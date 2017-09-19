import React from 'react';
import './index.less';
import {
	Link
} from 'react-router';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	};
	componentDidMount() {
		
	};
	render() {
		return (
			<div className='header'>
				<Link to='/'><img src={require('img/logo-header.png')} className='logo'/></Link>
				<ul className='nav'>
					<li><Link to='/' activeClassName='active'>首页</Link></li>
					<li><Link to='/service' activeClassName='active'>检测服务</Link></li>
					<li><Link to='/support' activeClassName='active'>服务支持</Link></li>
					<li><Link to='/about' activeClassName='active'>关于我们</Link></li>
				</ul>
			</div>
		)
	};
};