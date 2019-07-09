import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {
  render() {
    let button;
    if (this.props.actual_page > 1){
      button = <button 
        className="btn btn-danger btn-block" 
        onClick={this.props.handleClickBack}
      >Back</button>
    }

    return (
      <div className="row">
        <div className="col-md-2">
          {button}
        </div>
        <div className="col-md-8 text-center">
          {this.props.actual_page}
        </div>
        <div className="col-md-2">
          <button 
            className="btn btn-primary btn-block" 
            onClick={this.props.handleClickForward}
          >Forward</button>
        </div>
      </div>
    )
  }
}

export default Nav