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
								<div className="service-content-triangle-inner">
									<div className='service-content-ellipse'><span>{this.strings.service_1_trig_1}</span></div>
									<div className='service-content-ellipse'><span>{this.strings.service_1_trig_2}</span></div>
									<div className='service-content-ellipse'><span>{this.strings.service_1_trig_3}</span></div>
								</div>
							</div>
						</div>
					)}
					{type == 2 && (
						<div>
              <div id="service-desc2" dangerouslySetInnerHTML={{__html: this.strings.service_2_content}}></div>
							<div className='service-content-circles'>
								<div className='service-content-circle'>
									<div className='service-content-fan'><span>{this.strings.service_2_circle_1}</span></div>
									<div className='service-content-ellipse'>
										{/*<strong>83项</strong><br/>*/}
										<span>{this.strings.service_2_square_1}</span>
									</div>
								</div>
								<div className='service-content-circle'>
									<div className='service-content-fan'><span>{this.strings.service_2_circle_2}</span></div>
									<div className='service-content-ellipse'>
										{/*<strong>4项</strong><br/>*/}
										<span>{this.strings.service_2_square_2}</span>
									</div>
								</div>
								<div className='service-content-circle'>
									<div className='service-content-fan'><span>{this.strings.service_2_circle_3}</span></div>
									<div className='service-content-ellipse'>
										{/*<strong>13项</strong><br/>*/}
										<span>{this.strings.service_2_square_3}</span>
									</div>
								</div>
								<div className='service-content-circle'>
									<div className='service-content-fan'><span>{this.strings.service_2_circle_4}</span></div>
									<div className='service-content-ellipse'>
										{/*<strong>7类</strong><br/>*/}
										<span>{this.strings.service_2_square_4}</span>
									</div>
								</div>
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