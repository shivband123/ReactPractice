import React from 'react'

const Course = (props) => {
  if(props.data.course_Available ===true)
  {
  return (
    <div>
      <h1>{props.data.courseName}</h1>
      <button style={{backgroundColor:"green"}}>Available</button>
    </div>
  )} 
  else{
    return(
      <div>
      <h1>{props.data.courseName}</h1>
      <button style={{backgroundColor:"red"}}> NotAvailable</button>
      </div>
    )
  }
}
export default Course
