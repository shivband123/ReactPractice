import React, { Component, createRef } from 'react'

export default class Refs2 extends Component {
  constructor(){
    super()
    this.state={company:"QSpider"}
    this.divRef=createRef()
    this.btnRef=createRef
  }
  ChangeCompany=()=>{
    this.setState({company:"JSpider"})
    this.divRef.current.style.color="yellow"
    this.divRef.current.style.backgroundcolor="black"
    this.divRef.current.style.padding="10px"
    this.btnRef.current.style.backgroundcolor="green";
  }
  render() {
    return (
      <div>
        <div ref={this.divRef}>{this.state.company}</div>
        <button ref={this.btnRef} onClick={this.ChangeCompany}>Change company</button>
      </div>
    )
  }
}
