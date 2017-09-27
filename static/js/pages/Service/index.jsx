import React from 'react';
import {
	Link,
	browserHistory
} from 'react-router';
import classnames from 'classnames';
import './index.less';

export default class Service extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: this.props.location.query.type || 1
		};

		this.strings = window.dym.service;
	};
	componentDidMount() {
	};
	componentWillReceiveProps(nextProps) {
		const type = nextProps.location.query.type || 1;
		if (type !== this.state.type) {
			this.setState({
				type: type
			});
		};
	};
	render() {
		const {
			type
		} = this.state;
		const clsName = classnames('service', 'service-' + type)
		return (
			<div className={clsName}>
				<div className='channel'>
					<img src={require('img/channel/2.jpg')} alt=''/>
					<div className='service-channel-title'>Kaiumph T-Series 凯昂肿瘤分子诊断</div>
					<ul className='channel-footer'>
						<li><Link to={{pathname:'service'}}>{this.strings.service_nav_f}</Link></li>
						<li><Link to={{pathname:'service', query:{type:2}}}>{this.strings.service_nav_r}</Link></li>
					</ul>
				</div>
				<div className='service-content'>
					{type == 1 && (
						<div>
							<div id="service-desc1" dangerouslySetInnerHTML={{__html: this.strings.service_1_content}}></div>
							<div className="service-content-triangle">
                <img src={require('img/service/service1-content.png')} alt=""/>
              </div>
						</div>
					)}
					{type == 2 && (
						<div>
              <div id="service-desc2" dangerouslySetInnerHTML={{__html: this.strings.service_2_content}}></div>
							<div className='service-content-circles'>
                <img src={require('img/service/service2-content.png')} alt=""/>
							</div>
						</div>
					)}
				</div>
				<div className='service-steps'>
					<div className='service-tips'>
						<img src={require('img/service/1.png')} alt=''/>
						<div className='service-tip'>立即响应<br/>毋需等待</div>
						<img src={require('img/service/2.png')} alt=''/>
						<div className='service-tip'>专业采样KIT<br/>患者良好的体验</div>
						<img src={require('img/service/3.png')} alt=''/>
						<div className='service-tip'>恒温冷链运输<br/>快速送达Lab</div>
						<img src={require('img/service/4.png')} alt=''/>
						<div className='service-tip'>IR-IC双质控<br/>报告三审制度</div>
						<img src={require('img/service/5.png')} alt=''/>
					</div>
				</div>
			</div>
		)
	};
};