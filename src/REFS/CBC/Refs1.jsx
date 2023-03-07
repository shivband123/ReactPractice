import React, { Component, createRef } from 'react'

export default class Refs1 extends Component {
  constructor(){
    super()
    this.h1Ref=createRef(null)
  }
  render() {
    console.log(this)
    return (
      <div>
        <h1 ref={this.h1Ref}>Hello World</h1>
      </div>
    )
  }
}
