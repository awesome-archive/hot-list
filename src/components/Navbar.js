import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    isMenuActive: false
  };

  render() {
    const { isMenuActive } = this.state;

    return (
      <div className="navbar is-fixed-top b-navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item navbar-logo" to="/">
              今日热榜
            </Link>
            <div
              className={`navbar-burger${isMenuActive ? ' is-active' : ''}`}
              onClick={() => this.setState({ isMenuActive: !isMenuActive })}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={`navbar-menu${isMenuActive ? ' is-active' : ''}`}>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://www.wjx.top/jq/23641653.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                反馈
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
