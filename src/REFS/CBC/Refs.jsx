import React, { Component } from 'react'

export default class Refs extends Component {
  componentDidMount(){
    let h1=document.querySelector("h1")
    console.log(h1, "DOM Way")
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  } 
}