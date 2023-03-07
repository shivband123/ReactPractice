import React, { Component } from 'react'
import { faker } from '@faker-js/faker';

 class Faker extends Component {
  constructor(){
    super()
    this.state={photo:faker.image.avatar()}
    this.state={userName:faker.internet.userName()}
}
handleChange =()=>{
  this.setState({photo:faker.image.avatar()})
}
handleName =()=>{
  this.setState({userName:faker.internet.userName()})
}
  render() {
    return (  
      <div>
        <img src={this.state.photo} alt="" />
        <h1>{this.state.userName}</h1>
        <button onClick={this.handleChange}>ChangeImage</button>
        <button onClick={this.handleName}>ChangeUserName</button>
      </div>
    )
  }
}
export default Faker
