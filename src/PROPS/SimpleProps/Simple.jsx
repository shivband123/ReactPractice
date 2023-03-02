import React from 'react'
import Course from './Course';

const Simple = () => {
  return (
    <div>
      <Course data={()=>{console.log("Hello","Good Evening")}}/>
    </div>
  )
}
export default Simple