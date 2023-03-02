import React, { Component } from 'react'

 class Course extends Component {
  render() {
    let payloadData=this.props.data
    return (
      <div className='mainBlock'>
        <center>
        <div>
        <img src={payloadData[0].Photo} alt="" />
        <h3>{payloadData[0].Course_name}</h3>
        <p>{payloadData[0].Trainer_name}</p>
        <p>{payloadData[0].Duration}</p>
         <p>{payloadData[0].Languages}</p>
        </div>
        </center>

        <center>
        <div>
        <img src={payloadData[1].Photo} alt="" />
        <h3>{payloadData[1].Course_name}</h3>
        <p>{payloadData[1].Trainer_name}</p>
        <p>{payloadData[1].Duration}</p>
        <p>{payloadData[1].Languages}</p>
        </div>
        </center>

        <center>
        <div>
        <img src={payloadData[2].Photo} alt="" />
        <h3>{payloadData[2].Course_name}</h3>
        <p>{payloadData[2].Trainer_name}</p>
        <p>{payloadData[2].Duration}</p>
        <p>{payloadData[2].Languages}</p>
        </div>
        </center>
      </div>
    )
  }
}
export default Course