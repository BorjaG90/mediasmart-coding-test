import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
    const { profile, profile_show } = this.props;
    return (
      <div className="shadow-lg" id="profile" 
        hidden={!profile_show}>
        <div className="row">

          <div className="profile-data col-md-7 text-center">
            <h2><b>Name:</b> {profile.name}</h2>
            <br/>
            <h3><b>Age:</b> {profile.age}</h3>
          </div>

          <div className="profile-photo col-md-5">
            <img src={profile.image} alt={profile.id} />
          </div>
          
        </div>

        <div className="row profile-bio">
        <b>Bio:</b><textarea rows="5" readOnly value={profile.bio}></textarea>
        </div>
        <div className="row profile-close">
          <button className="btn btn-danger btn-block" onClick={this.props.hideProfile}>Close</button>
        </div>

      </div>
    )
  }
}

export default Profile