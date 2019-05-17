import React, { Component } from 'react'


const ASTRO_URL = 'http://api.open-notify.org/astros.json'

class App extends Component {

  state = {
    peopleInSpace: []
  }


  componentDidMount() {
    fetch(ASTRO_URL)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        peopleInSpace: json.people
      })
    })
  }

  render(){
    return (
      <div>
        People in space:
        {" "}
        {this.state.peopleInSpace.map(person => person.name).join(", ")}
      </div>
    )
  }
}

export default App
