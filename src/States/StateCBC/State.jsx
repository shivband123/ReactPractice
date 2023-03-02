import React, { Component } from 'react'

 class State extends Component {
  state={userName:"shiva",
          skills:["Java","Sql","JS","CSS","HTML","React","Node","Mongodb"],
          price:500,
          Available:true,
          Timing:{morning:"8.AM",
                  Evening:"9.PM"}}
  render() {
  console.log(this)
    return (
      <div>
        <h1>{this.state.userName}</h1>
        <ul>skills{this.state.skills.map((x)=>{
            return<li>{x}</li>
        })}</ul>
        <h1>price:{this.state.price}</h1>
      </div>
    )
  }
}
export default State
