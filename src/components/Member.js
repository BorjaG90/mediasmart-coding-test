import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Member extends Component {
  render() {
    const { member } = this.props;

    return <div className="col-md-4" 
        key={member.id} 
        onClick={this.props.paintProfile.bind(this, member)}>
      <div className="card text-center shadow-lg">
        <div className="card-body member-card">

          <div className="member-data">
            <div className="member-name"><b>{member.name}</b></div>
            <div className="member-age">{member.age} years old</div>
          </div>

          <div className="member-img">
            <img className="photo-img" src={member.image} alt={member.id} />
          </div>
          
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