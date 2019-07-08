import React, { Component } from 'react';
import Members from '../components/Members';

class App extends Component{

  constructor() {
    super();
    this.state = {
      members: [],
      page: 0,
      page_size: 10
    };
  }

  componentDidMount() {
    this.fetchMembers(this.state.page, this.state.page_size);
  }

  fetchMembers(page, pagesize) {
    console.log("page: " + page);
    fetch('/api/members/?page=' + page + '&page_size=' + pagesize)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          members: [...this.state.members, ...data],
          page: page + 1
        });
        console.log(this.members)
      });
  }

  render () {
    return(
      <div>
        <div className="container">
          <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="work.mediasmart.io">
                <img src="https://www.mediasmart.io/assets/images/logo-mediasmart.png"
                  alt="MediaSmart Logo" className="logo-img"/>
                </a>
              <h3 className="">MediaSmart Members</h3>
            </nav>
          </header>
          <div className="row">
            <Members 
              members={this.state.members}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;