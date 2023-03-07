import React, { Component } from 'react'
import JSON from "./Employee.json"
import Employee from "./EmployeeDetails"
 class App extends Component {
  constructor(){
    super()
    this.state={empDetails:JSON}
  }
  render() {
    return (
      <div>
        <Employee empDetails1={this.state.empDetails}/>
      </div>
    )
  }
}
export default App