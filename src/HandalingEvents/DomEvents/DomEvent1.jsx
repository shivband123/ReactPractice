import React, { Component } from 'react'

export default class DomEvent1 extends Component {
  constructor(){
    super()
    this.state={userName:"Anu"}
  }
  componentDidMount(){
    document.querySelector("input").addEventListener(("keypress"),(e)=>{
      this.setState({userName:e.target.value})
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
        <input type="text" placeholder='Enter the name' />
      </div>
    )
  }
}