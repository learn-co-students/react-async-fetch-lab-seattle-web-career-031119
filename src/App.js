// create your App component here
import React, { Component } from 'react'
const API = "http://api.open-notify.org/astros.json"

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      people: []
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(json => this.setState({people: json}))
  }

  render(){
    return null;
  }
}
