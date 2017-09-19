import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	};
	componentDidMount() {
		
	};
	render() {
		return (
			<div className='container'>
				<Header/>
					{this.props.children}
				<Footer/>
			</div>
		)
	};
};