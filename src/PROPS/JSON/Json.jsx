import React from 'react'
import Course from './Course.jsx'
import JSON from "./course.json"
import "./global.css"
const Json = () => {
  return (
    <div>
      <Course data={JSON}/>
    </div>
  )
}

export default Json