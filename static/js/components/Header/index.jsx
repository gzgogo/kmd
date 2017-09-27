import React from 'react';
import './index.less';
import {
  browserHistory,
	Link
} from 'react-router';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		  showMenu: false
    };

    this.handleShowMenu = this.handleShowMenu.bind(this);
    this.handleLink = this.handleLink.bind(this);
	};

	componentDidMount() {
		
	};

  handleShowMenu() {
    this.setState({
      showMenu: true
    });
  }

  handleLink(url) {
    this.setState({
      showMenu: false
    }, () => browserHistory.push(url));
  }

	render() {
    const { showMenu } = this.state;
    const path = window.location.pathname;
		return (
			<div className='header'>
				<Link to='/'><img src={require('img/logo-header.png')} className='logo'/></Link>
        <ul className='nav'>
          <li><Link to='/' activeClassName='active'>首页</Link></li>
          <li><Link to='/service' activeClassName='active'>检测服务</Link></li>
          <li><Link to='/support' activeClassName='active'>服务支持</Link></li>
          <li><Link to='/about' activeClassName='active'>关于我们</Link></li>
        </ul>
        <div className="menu" onClick={this.handleShowMenu}>
          <img src={require('img/menu.png')} alt=""/>
        </div>
        {
          showMenu
            ? (
              <ul className='nav-mobile'>
                <div className="btn-close" onClick={() => this.setState({ showMenu: false })}>
                  <img src={require('img/close.png')} alt=""/>
                </div>
                <li>
                  <a
                    className={ path === '/' ? 'active' : ''}
                    onClick={() => this.handleLink('/')}>首页
                  </a>
                </li>
                <li>
                  <a
                    className={ path === '/service' ? 'active' : ''}
                    onClick={() => this.handleLink('/service')}>
                    检测服务
                  </a>
                </li>
                <li>
                  <a
                    className={ path === '/support' ? 'active' : ''}
                    onClick={() => this.handleLink('/support')}>
                    服务支持
                  </a>
                </li>
                <li>
                  <a
                    className={ path === '/about' ? 'active' : ''}
                    onClick={() => this.handleLink('/about')}>
                    关于我们
                  </a>
                </li>
              </ul>
            )
            : null
        }
			</div>
		)
	};
};