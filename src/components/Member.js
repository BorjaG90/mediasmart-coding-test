import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Member extends Component {
  render() {
    const { member } = this.props;

    return <div className="col-md-4" key={member.id}>
      <div className="card text-center">
        <div className="card-body">
          <span>
            <img className="img-thumbnail photo-img" src={member.image}></img>
            {member.name}
          </span>
          <br/>
          <span>{member.age} years old</span>
        </div>
      </div>
    </div>
  }
}

// Validation
Member.propTypes = {
  member: PropTypes.object.isRequired
}

export default Member