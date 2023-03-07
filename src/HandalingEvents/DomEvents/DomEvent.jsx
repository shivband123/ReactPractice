import React, { Component } from 'react'

export default class DomEvent extends Component {
  constructor(){
    super()
    this.state={userName:"GaNeSh"}
  }
  componentDidMount(){
    let btn =document.querySelector("button")
    btn.addEventListener(("click"),()=>{
      this.setState({userName:"BhImaShankar"})
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
        <button>Change</button>
      </div>
    )
  }
}
