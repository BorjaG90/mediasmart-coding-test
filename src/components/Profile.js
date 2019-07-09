import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
    const { profile, profile_show } = this.props;
    return (
      <div className="" id="profile" 
        hidden={!profile_show} onClick={this.props.hideProfile}>
        <div className="row">

          <div className="profile-photo col-md-5">
            <img src={profile.image} alt={profile.id} />
          </div>

          <div className="profile-data col-md-7">
            <p>{profile.name}</p>
            <p>{profile.age}</p>
          </div>

        </div>

        <div className="row profile-bio">
          <p>{profile.bio}</p>
        </div>

      </div>
    )
  }
}

export default Profile