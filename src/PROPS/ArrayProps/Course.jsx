import React from 'react'
const Course= (props) => {
  return (
    <div >
      <ul style={{listStyle: "square"}}>
      {props.data.skills.map((x)=>{
        return<li>{x}</li>
      })}
      </ul>
    </div>
  )
}

export default Course
