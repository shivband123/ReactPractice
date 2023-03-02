import React from 'react'
import Parent from './Parent'

const GrandParent = (props) => {
  return (
    <div className='Grandparent'>
      <strong>Grandparent</strong>
      <Parent data={props.data}/>
    </div>
  )
}

export default GrandParent