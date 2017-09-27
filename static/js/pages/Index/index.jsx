import React from 'react';
import {
	Link
} from 'react-router';
import './index.less';

export default class Index extends React.Component {
	constructor(props) {
		super(props);

		this.strings = window.dym.index;
	};
	componentDidMount() {

	};
	render() {
		return (
			<div className='index'>
				<div className='channel'>
					<img src={require('img/channel/1.jpg')} alt=''/>
					<ul className='channel-footer'>
						<li><Link to={{pathname:'service'}}>{this.strings.index_nav_f}</Link></li>
						<li><Link to={{pathname:'service', query:{type:2}}}>{this.strings.index_nav_r}</Link></li>
					</ul>
				</div>
				<div className='index-content'>
					<h2>更全面 更精确 更少负担</h2>
					<h3>一次检验，覆盖全部潜在治疗方案，提高诊断效率的同时，也降低了患者的时间成本与经济负担</h3>
					<div className='index-content-circles'>
						<div className='index-content-circle'>
							<span>全面</span><em>Comprehensive</em>
						</div>
						<div className='index-content-circle'>
							<span>精准</span><em>Precise</em>
						</div>
						<div className='index-content-circle'>
							<span>可负担</span><em>Affordable</em>
						</div>
					</div>
					<h2>更标准 更安全 更多保障</h2>
					<h3>标准化采样KIT，简单的样本采集流程，隔绝外源污染，控制环境温度，确保样本安全</h3>
					<img src={require('img/index/box.png')} alt='' className='index-image'/>
					<ul className='index-nav'>
						<li>
							<span className='index-nav-title'>凯昂医学诊断</span>
							<span className='index-nav-content'>Kaiumph Medical Diagnostics</span>
							<Link to='about'>了解我们</Link>
						</li>
						<li>
							<span className='index-nav-title'>服务支持</span>
							<span className='index-nav-content'>有关产品、临床检测服务的相关问题</span>
							<Link to='service'>点击提问</Link>
						</li>
						<li>
							<span className='index-nav-title'>职业发展</span>
							<span className='index-nav-content'>查看最新职位需求</span>
							<Link to='support'>加入我们</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	};
};