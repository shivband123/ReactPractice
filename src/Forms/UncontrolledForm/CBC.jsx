import React, { Component, createRef } from 'react'

export default class CBC extends Component {
  constructor(){
    super()
    this.userRef=createRef(null)
    this.passRef=createRef(null)
  }
    handleSubmit=(e)=>{
      e.preventDefault()
      let username=this.userRef.current.value
      let password=this.passRef.current.value
      console.log({username,password})
    }
  
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="username">USERNAME</label><br/>
          <input type="text" id='username' ref={this.userRef}/><br/>
          <label htmlFor="password">PASSWORD</label><br/>
          <input type="password" id='password' ref={this.passRef}/><br/>
          <button onClick={this.handleSubmit}>SUBMIT</button>
        </form>
      </div>
    )
  }
}

