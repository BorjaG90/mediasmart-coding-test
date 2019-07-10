import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return <footer className="page-footer bg-dark">
      <div className="row">
        <div className="col-md-7 text-center">
          Prueba de código para <a href="http://www.mediasmart.io">MediaSmart</a>
        </div>
        <div className="col-md-5 text-center">
        <ul class="list-unstyled">
          <li>
            <a href="https://www.linkedin.com/in/borjag90/">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/BorjaG90">
              <i class="fab fa-github-square"></i>
            </a>
          </li>
        </ul>
        </div>
      </div>
      <div class="footer-copyright text-center py-3">© 2019:
        <a href="https://github.com/BorjaG90"> BorjaG90</a>
      </div>
    </footer>
  }
}

export default Footer