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
			<div className='job'>
				<div className='channel'>
					<img src={require('img/channel/5.jpg')} alt=''/>
					<ul className='channel-footer'>
						<li>Kaiumph Medical Diagnostics 关于凯昂医学诊断</li>
					</ul>
				</div>
				<div className='job-content'>
					<p>凯昂医学诊断视患者的健康为最高价值与责任，致力普及先进的医学诊断技术，特别是在临床上具有重大诊断意义，能够切实协助医生、惠及患者的检验方案。我们强调服务基于循证医学的诊断流程，以医生为中心，不对报告做过度解读。我们追求质量、精确、以及合理的价格，尽最大努力减轻患者的负担。</p>
					<p>如果您认可我们的理念，也对医疗健康事业充满兴趣，那么无论背景，请加入我们的团队，共同应对挑战，一起寻找每一个人自己事业发展的机会。</p>
				</div>
				<div className='job-info'>
					<div className='job-content'>
						<p>请查看我们在前程无忧发布的最新职位需求 <a href='http://www.51job.com' target='_blank'><img src={require('img/job/1.png')} alt=''/>查看</a></p>
						<p>简历请投送至：hr@kaiumph.com</p>
					</div>
				</div>
			</div>
		)
	};
};
