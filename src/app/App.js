import React, { Component } from 'react';
import Members from '../components/Members';

class App extends Component{

  constructor() {
    super();
    this.state = {
      members: []
    }
  }

  componentDidMount() {
    this.fetchMembers();
  }

  fetchMembers() {
    fetch('/api/members')
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        this.setState({members: data});
      });
  }

  render () {
    return(
      <div>
        <div className="container">
          <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="work.mediasmart.io">MS</a>
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