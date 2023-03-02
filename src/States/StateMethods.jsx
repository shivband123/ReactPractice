// states methods
//1.constructor method()

import React, { Component } from 'react'
 class StateMethods extends Component {
  constructor(){
  super()
  this.state={userName:"shiva"}
  }
  render(){
    console.log(this)
    return (
      <div>
      {this.state.userName}
    </div>
    )
  }
}
export default StateMethods

//2.Direct state object

// import React, { Component } from 'react'

// export default class StateMethods extends Component {
//   state={password:143}
//   render() {
//     console.log(this)
//     return (
//       <div>{this.state.password}</div>
//     )
//   }
// }

