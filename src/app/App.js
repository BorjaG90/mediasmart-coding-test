import React, { Component } from 'react';

import Members from '../components/Members';

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
    //document.getElementById('container').addEventListener("scroll", this.handleScroll.bind(this));
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
    debugger
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
    let button;
    let actual_page = this.state.page + 1;
    let size = this.state.page_size;
    if (actual_page > 1){
      button = <button 
        className="btn btn-danger btn-block" 
        onClick={this.handleClickBack}
        >
        Back
      </button>
    }
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
        <span>
          {button}
          {actual_page}
          <button 
            className="btn btn-primary btn-block" 
            onClick={this.handleClickForward}
            >
            Forward
          </button>
        </span>
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