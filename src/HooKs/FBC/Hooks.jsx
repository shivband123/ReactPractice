import React from 'react'
import {useState} from "react"

const Hooks = () => {
  let[userName, setUserName]=useState("Shiva")
  let[phone , setPhone]=useState(7411944465)
  return (
    <div>
<h1>{userName}</h1>
<h2>{phone}</h2>
<button onClick={()=>{setUserName("Anu")}}>Click</button>
<button onClick={()=>{setPhone(9972698887)}}>change</button>
    </div>
  )
}
export default Hooks