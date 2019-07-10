import React, { Component } from 'react';

import Members from '../components/Members';
import Nav from '../components/Nav';
import Profile from '../components/Profile';
import Header from '../components/Header';

class App extends Component{

  constructor() {
    super();
    this.state = {
      members: [],
      page: 0,
      page_size: 9,
      profile: {},
      profile_show: false
    };
    this.handleClickForward = this.handleClickForward.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.paintProfile = this.paintProfile.bind(this);
    this.hideProfile = this.hideProfile.bind(this);
  }

  componentDidMount() {
    this.fetchMembers(this.state.page, this.state.page_size);
  }

  fetchMembers(page, pagesize) {
    fetch(`/api/members/?page=${page}&page_size=${pagesize}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          members: data,
          page
        });
      });
  }

  // Nav
  handleClickBack() {
    this.fetchMembers(this.state.page - 1, this.state.page_size);
  }

  handleClickForward() {
    this.fetchMembers(this.state.page +1, this.state.page_size);
  }

  // Profile
  paintProfile(profile) {
    this.setState({
      profile,
      profile_show: true
    })
    window.scrollTo(0, 0);
  }

  hideProfile(){
    this.setState({
      profile_show: false
    })
  }

  render () {
    return(
      <div className="container" id="container">
        <Profile 
          profile={this.state.profile}
          profile_show={this.state.profile_show}
          hideProfile={this.hideProfile}
        />

        <div id="dark" 
          hidden={!this.state.profile_show} 
          onClick={this.hideProfile}>
        </div>

        <Header/>

        <Nav
          actual_page={this.state.page + 1}
          handleClickForward={this.handleClickForward}
          handleClickBack={this.handleClickBack}
        />
        
        <div className="row">
          <Members 
            members={this.state.members}
            paintProfile={this.paintProfile}
          />
        </div>

        <Nav
          actual_page={this.state.page + 1}
          handleClickForward={this.handleClickForward}
          handleClickBack={this.handleClickBack}
        />

      </div> // container
    )
  }
}

export default App;