import React from 'react';
import { Menu } from 'semantic-ui-react'
import Routes from './Routes'
import { Link } from 'react-router-dom'

export default class Example extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu stackable>
          <Menu.Item header>Hackterms Clone</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
             <Link to="/signup">Sign Up</Link>
            </Menu.Item>
            <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}>
             Login
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Routes />
      </div>
    );
  }
}
