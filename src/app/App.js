import React, { Component } from 'react';

import Members from '../components/Members';
import Nav from '../components/Nav';

class App extends Component{

  constructor() {
    super();
    this.state = {
      members: [],
      page: 0,
      page_size: 9
    };
    this.handleClickForward = this.handleClickForward.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
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

  handleClickBack() {
    this.fetchMembers(this.state.page - 1, this.state.page_size);
  }

  handleClickForward(e) {
    this.fetchMembers(this.state.page +1, this.state.page_size);
  }

  /*handleScroll(e) {
    console.log("scrolling");
    let element = e
    console.log(element.scrollHeight + " : " + element.scrollTop + " : " + element.clientHeight)
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      console.log("Entra aqui");
      this.fetchMembers(this.state.page, this.state.page_size);
    }
  }*/

  render () {
    return(
      <div className="container" id="container">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="work.mediasmart.io">
              <img src="https://www.mediasmart.io/assets/images/logo-mediasmart.png"
                alt="MediaSmart Logo" className="logo-img"/>
              </a>
            <h3 className="">MediaSmart Members</h3>
          </nav>
        </header>

        <Nav
          size={this.state.page_size}
          actual_page={this.state.page + 1}
          handleClickForward={this.handleClickForward}
          handleClickBack={this.handleClickBack}
        />
        
        <div className="row">
          <Members 
            members={this.state.members}
          />
        </div>
      </div>
    )
  }
}

export default App;