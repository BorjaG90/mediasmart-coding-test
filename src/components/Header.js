import React, { Component } from 'react';

class Header extends Component {
  render() {
    return <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="http://www.mediasmart.io">
            <img src="https://www.mediasmart.io/assets/images/logo-mediasmart.png"
              alt="MediaSmart Logo" className="logo-img"/>
            </a>
          <h1>MediaSmart Members</h1>
        </nav>
      </header>
  }
}

export default Header