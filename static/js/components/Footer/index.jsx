import React from 'react';
import './index.less';

import classnames from 'classnames';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
	};
	render() {
		return (
			<div className='footer'>
				<div className='footer-left'>
					<div className='footer-logo'>
						<img src={require('img/logo-footer.png')} alt=''/>
					</div>
					<div className='footer-code'>
						<img src={require('img/qrcode.png')} alt=''/>
						<ul>
							<li>关注我们</li>
							<li>技术遵从医学</li>
							<li>微信服务号</li>
							<li>客服热线：010-84782182</li>
							<li>客服邮箱：service@kaiumph.com</li>
						</ul>
					</div>
				</div>
				<div className='footer-right'>
					<ul>
						<li>杰傲医学检验所</li>
						<li>GOPATH Laboratories LLC GOPATH </li>
						<li>Genetics • Chicago 提供技术支持</li>
					</ul>
					<img src={require('img/logo-gopath.png')} alt=""/>
				</div>
			</div>
		)
	};
};