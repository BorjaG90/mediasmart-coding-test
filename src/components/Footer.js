import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return <footer className="page-footer bg-dark">
      <div className="row">
        <div className="col-md-7 text-center">
          Prueba de código para <a href="http://www.mediasmart.io">MediaSmart</a>
        </div>
        <div className="col-md-5 text-center">
        
          <a className="foot-ico" href="https://www.linkedin.com/in/borjag90/">
            <i className="fab fa-linkedin"></i>
          </a>
        
          <a className="foot-ico" href="https://github.com/BorjaG90">
            <i className="fab fa-github-square"></i>
          </a>
          
        </div>
      </div>
      <div className="footer-copyright text-center py-3">© 2019:
        <a href="https://github.com/BorjaG90"> BorjaG90</a>
      </div>
    </footer>
  }
}

export default Footer