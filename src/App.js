// create your App component here
import React, { Component } from 'react';

const URL = 'http://api.open-notify.org/astros.json'

class App extends Component {
  constructor(){
    super()

    this.state = {
    people: []
  }

  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(data => this.setState({people: data}))
  }

  render() {
    return (
      <div>
        People in space: {this.state.people.number}
      </div>
    )
  }
}


export default App;
