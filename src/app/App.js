import React, { Component } from 'react';

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
            {
              this.state.members.map(member => {
                return (
                  <div className="col-md-4" key={member.id}>
                    <div className="card text-center">
                      <div className="card-body">
                        <span>
                          <img className="img-thumbnail" src={member.image}></img>
                          {member.name}
                        </span>
                        <br/>
                        <span>{member.age} years old</span>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            
          </div>
        </div>
      </div>
    )
  }
}

export default App;