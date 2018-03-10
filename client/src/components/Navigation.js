import React from 'react';
import { Menu } from 'semantic-ui-react'

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
          <Menu.Item
            name='terms'
            active={activeItem === 'terms'}
            onClick={this.handleItemClick}
          >
            Terms
          </Menu.Item>

          <Menu.Item
            name='categories'
            active={activeItem === 'categories'}
            onClick={this.handleItemClick}
          >
            Categories
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
             Sign Up
            </Menu.Item>

            <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}>
             Login
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
