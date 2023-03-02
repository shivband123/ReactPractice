import React, { Component } from 'react'
import Nav from "./Nav"
import IMG from "./photo.jpg.jpg"

export default class Props extends Component {

  render() {
    return (
      <div>
        {/* <Nav data="Hello"/>*/}
        <Nav photo={IMG}/>
      </div>
    )
  }
}
