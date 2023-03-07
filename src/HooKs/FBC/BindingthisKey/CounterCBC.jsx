import React, { Component } from 'react'

export default class CounterCBC extends Component {
  constructor(){ 
    super()
    this.state={
      userName:"Shiva"
    }
    // this.handleChange=this.handleChange.bind(this)//method .1
  } 
  handleChange=function(){
    this.setState({userName:"Abhinav"})
  }
  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
        <button onClick={this.handleChange.bind(this)}>Change</button>
      </div>
    )
  }
}
