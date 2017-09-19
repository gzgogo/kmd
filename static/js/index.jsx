// global
import React from 'react';
import ReactDom from 'react-dom';
import routes from './routes';

// style
import 'css/common/reset.css';
import 'css/animate.css';
import 'css/index.less';

// render
const root = document.createElement('div');
root.style.cssText = 'width:100%;height:100%;';
document.body.appendChild(root);

ReactDom.render(
	routes,
	root
);