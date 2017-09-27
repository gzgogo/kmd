const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event
process.env.BABEL_ENV = TARGET

const PATHS = {
    static: path.join(__dirname, 'static'),
    dist: path.join(__dirname, 'dist')
}

/*
  Common config
 */

var common = {
    entry: {
        main: path.resolve(PATHS.static, 'js/index.jsx'),
    },

    output: {
        path: PATHS.dist,
        filename: 'js/[name].js?v=[hash]',
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            use: "babel-loader",
            include: [path.resolve(PATHS.static, 'js')]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: function() {
                        return [
                            require('autoprefixer')
                        ];
                    }
                }
            }, 'less-loader']
        }, {
            test: /\.(gif|jpg|png|svg|woff|eot|ttf|webp)\??.*$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name]-[hash].[ext]'
                }
            }]
        }, {
            test: /\.json$/,
            loader: "json-loader"
        }]
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            css: path.resolve(__dirname, 'static/css'),
            js: path.resolve(__dirname, 'static/js'),
            components: path.resolve(__dirname, 'static/js/components'),
            pages: path.resolve(__dirname, 'static/js/pages'),
            img: path.resolve(__dirname, 'static/img'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: path.resolve(__dirname, 'static/img/favicon.png'),
            filename: 'index.html',
            chunks: ['main'],
            title: '座机专营网',
            template: path.resolve(__dirname, 'static/templates/index.html')
        })
    ]
}

/*
  Dev config
*/

if (TARGET === 'start' || !TARGET || TARGET == 'dev') {
    module.exports = merge(common, {
        devServer: {
            contentBase: PATHS.dist,
            historyApiFallback: true,
            hot: true,
            inline: true,
            // progress: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT || 8080
        },

        plugins: [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"development"',
                'process.env.rap': true
            })
        ]
    });
}

/*
  Prodcution config
 */

if (TARGET === 'build') {
    module.exports = merge(common, {
        output: {
            publicPath: '/'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"',
                'process.env.rap': false
            }),
            new ExtractTextPlugin("css/[name].css?v=[hash]"),
            new ParallelUglifyPlugin({
                cacheDir: '.cache/',
                uglifyJS: {
                    output: {
                        comments: false
                    },
                    compress: {
                        warnings: false
                    }
                }
            }),
            new HtmlWebpackPlugin({
                favicon: path.resolve(__dirname, 'static/img/favicon.png'),
                filename: 'index.html',
                chunks: ['main'],
                title: '座机专营网',
                template: path.resolve(__dirname, 'static/templates/index.html')
            })
        ]
    })
}