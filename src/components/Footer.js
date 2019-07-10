import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return <footer className="page-footer bg-dark">
      <div className="row">
        <div className="col-md-6 text-center">
          Prueba de código para <a href="http://www.mediasmart.io">MediaSmart</a>
        </div>
        <div className="col-md-6">
        <ul class="list-unstyled">
          <li>
            <a href="https://www.linkedin.com/in/borjag90/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/BorjaG90">GitHub</a>
          </li>
        </ul>
        </div>
      </div>
      <div class="footer-copyright text-center py-3">© 2019 Copyright:
        <a href="https://github.com/BorjaG90"> BorjaG90</a>
      </div>
    </footer>
  }
}

export default Footer