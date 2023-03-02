import React from 'react'
import Course from './Course'

const Boolean= () => {
  return (
    <div>
    <Course data={{course_Available: true,
                    courseName:"JAVA",
                    courseDuration:"3Months"}}/>
  
    <Course data={{course_Available: false,
      courseName:"REACT",
      courseDuration:"3Months"}}/>

<Course data={{course_Available: true,
      courseName:"SQL",
      courseDuration:"3Months"}}/>
    </div>
  )
}

export default Boolean

