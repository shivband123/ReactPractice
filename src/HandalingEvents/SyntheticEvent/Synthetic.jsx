import React, { Component } from 'react'

export default class Synthetic extends Component {
  constructor(){
    super()
this.state={userName:"Sai"}
  }
  render() {
    return(
      <div>
        <h1>{this.state.userName}</h1>
        <button onClick={()=>{
          this.setState({userName:"PriYa"})
        }}>Change</button>
      </div>
    )
  }
}
