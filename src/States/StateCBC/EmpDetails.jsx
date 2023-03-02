// create a state using constructor and store Employee Details & display in the user interface 

import React, { Component } from 'react'

 class EmpDetails extends Component {
  constructor(){
    super()
    this.state={emp_Id:143,
                 emp_Name:"Anu",
                emp_Sal:500000,
              emp_Number:7411944465 }
  }
  render() {
    return (
      <table border="2px" cellPadding={"20px"}>
        <tr>
          <th>EMP ID</th>
          <th>EMP NAME</th>
          <th>EMP SAL</th>
          <th>EMP NUMBER</th>
        </tr>
        <tr>
        <td>{this.state.emp_Id}</td>
        <td>{this.state.emp_Name}</td>
        <td>{this.state.emp_Sal}</td>
        <td>{this.state.emp_Number}</td>
        </tr>
      </table>
    )
  }
}
export default EmpDetails
