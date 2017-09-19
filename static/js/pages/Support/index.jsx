import React from 'react';
import {
	Link
} from 'react-router';
import './index.less';
import { Form, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
export default class Support extends React.Component {
	constructor(props) {
		super(props);
	};
	componentDidMount() {

	};
	render() {
		return (
			<div className='support'>
				<div className='channel'>
					<img src={require('img/channel/3.jpg')} alt=''/>
					<ul className='channel-footer'>
						<li>Kaiumph Gene Testing Service 凯昂基因检测服务咨询</li>
					</ul>
				</div>
				<div className='support-content'>
					<div className='support-title'>
						如果您对凯昂医学诊断的基因检测咨询服务有疑问，请关注凯昂医学诊断的服务号，留言或提问，我们收到会及时解答您的疑问。也可在此留言，我们收到后将尽快与您联络，为您解答。
					</div>
					<div className='support-contact'>
						<div className='support-code'>
							<img src={require('img/qrcode.png')} alt=''/>
							<ul>
								<li>关注我们</li>
								<li>技术遵从医学</li>
								<li>微信服务号</li>
								<li>客服热线：010-84782182</li>
								<li>客服邮箱：service@kaiumph.com</li>
							</ul>
						</div>
						<img src={require('img/support/1.png')} alt=''/>
					</div>
					<div className='support-form'>
						<div className='support-form-title'>请您留言</div>
						<CustomizedForm/>
						<Button type='primary'>提交</Button>
					</div>
				</div>
			</div>
		)
	};
};

class CustomizedForm extends React.Component {
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form layout='horizontal' className='support-form-item'>
		        <FormItem label='您的姓名：'>
		          {getFieldDecorator('username')(
		            <Input placeholder='请输入您的姓名' />
		          )}
		        </FormItem>
		        <FormItem label='提问身份：'>
		          {getFieldDecorator('identity',{
		          	initialValue : '0'
		          })(
		            <Select>
		            	<Option value='0'>医生</Option>
		            	<Option value='1'>患者</Option>
		            </Select>
		          )}
		        </FormItem>
		        <FormItem label='联系电话：'>
		          {getFieldDecorator('tel')(
		            <Input placeholder='请输入您的电话号码' />
		          )}
		        </FormItem>
		        <FormItem label='E-mail:'>
		          {getFieldDecorator('tel')(
		            <Input placeholder='请输入您的E-mail地址' />
		          )}
		        </FormItem>
		        <FormItem label='问题描述：'>
		          {getFieldDecorator('content')(
		            <TextArea placeholder='请输入您的问题描述' autosize={{ minRows: 6, maxRows: 10 }} />
		          )}
		        </FormItem>
		    </Form>
		)
	};
}

CustomizedForm = Form.create({})(CustomizedForm);