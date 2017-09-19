import React from 'react';
import {
	Link
} from 'react-router';
import './index.less';

export default class Support extends React.Component {
	constructor(props) {
		super(props);
	};
	componentDidMount() {

	};
	render() {
		return (
			<div className='about'>
				<div className='channel'>
					<img src={require('img/channel/4.jpg')} alt=''/>
					<ul className='channel-footer'>
						<li>Kaiumph Medical Diagnostics 关于凯昂医学诊断</li>
					</ul>
				</div>
				<div className='about-content'>
					<h2>技术遵从医学</h2>
					<h3>Technology Serves Medicine</h3>
					<h4>
						Kaiumph Medical Diagnostics<br/>凯昂医学诊断
					</h4>
					<ul className='about-history'>
						<li>
							<span className='about-history-year'>1960</span>
							<i className='iconfont'>&#xe615;</i>
							<span className='about-history-title'>IHC/Karyotyping</span>
							<span className='about-history-text'>免疫组化/染色体核型分析平台</span>
						</li>
						<li>
							<span className='about-history-year'>1980</span>
							<i className='iconfont'>&#xe615;</i>
							<span className='about-history-title'>Sanger</span>
							<span className='about-history-text'>第一代测序平台</span>
						</li>
						<li>
							<span className='about-history-year'>1990</span>
							<i className='iconfont'>&#xe615;</i>
							<span className='about-history-title'>Real-Time PCR</span>
							<span className='about-history-text'>实时荧光定量平台</span>
						</li>
						<li>
							<span className='about-history-year'>2006</span>
							<i className='iconfont'>&#xe615;</i>
							<span className='about-history-title'>NGS</span>
							<span className='about-history-text'>第二代测序平台</span>
						</li>
						<li>
							<span className='about-history-year'>Future</span>
							<i className='iconfont'>&#xe615;</i>
							<span className='about-history-title'>Future</span>
							<span className='about-history-text'>技术总是不断革新</span>
						</li>
					</ul>
					<div className='about-slogan'>
						<p>Service </p>
						<p>不变的是<span>服务医学诊断流程</span></p>
						<p>而不是仅仅提供检验与数据</p>
					</div>
					<div className='about-title'>
						基因检测不等于医学诊断，对患者最负责任的方式<br/>是做好相应的服务，把诊断留给医生
					</div>
					<div className='about-subtitle'>
						建立基于循证医学的<br/><span>沟通能力</span>与<span>专业背景</span>
					</div>
					<div className='about-info'>
						<div className='about-info-left'>
							<div className='about-info-text'>
								具备临床医学、护理学背景, 是与医生建立起良好沟通的基础，也确保我们肩负起与医生一样的对患者的责任感。 凯昂医学诊断通过设立两支服务团队,医学代表(KMR)与医生助理(KPA)，来支持医生的工作
							</div>
							<div className='about-info-icon'>
								<div><img src={require('img/about/1.png')} alt=''/></div>
								<div>
									<strong>52%</strong>
									<em>医学背景比率</em>
									<span>医学背景比率
以临床医学、护理学背景为主的团队使我们能够像医生一样思考如何为医生和患者们服务。</span>
								</div>
							</div>
						</div>
						<div className='about-info-right'>
							<div className='about-info-more'>
								<div className='about-info-more-text'>
									<span>其它背景</span>
									<span>生信分析</span>
									<span>护士护理</span>
									<span>临床医学</span>
									<span>生物技术</span>
								</div>
								<div className='about-info-more-title'>在三年内实现将企业中具备医学背景的人员比率提升至较高水平</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	};
};
