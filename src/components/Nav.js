import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {
  render() {
    let button;
    if (this.props.actual_page > 1){
      button = <button 
        className="btn btn-danger btn-block shadow" 
        onClick={this.props.handleClickBack}
      >Back</button>
    } else {
      button = <button 
        className="btn btn-outline-danger btn-block"
      >Back</button>
    }

    return (
      <div className="row" id="nav">

        <div className="col-md-2">
          {button}
        </div>

        <div className="col-md-8 text-center nav-actualpage">
          {this.props.actual_page}
        </div>

        <div className="col-md-2">
          <button 
            className="btn btn-danger btn-block shadow" 
            onClick={this.props.handleClickForward}
          >Forward</button>
        </div>
        
      </div>
    )
  }
}

// Validation
Nav.propTypes = {
  actual_page: PropTypes.number.isRequired
}

export default Nav