import React from 'react'
import GrandParent from './GrandParent'
import "./global.css"

const Drilling = () => {
  return (
    <div className='rootComponent'>
    <strong>ROOT</strong>
    <GrandParent data="Shiva"/>
    </div>
  )
}

export default Drilling