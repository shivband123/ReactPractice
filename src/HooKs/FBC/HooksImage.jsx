import React from 'react'
import { useState } from 'react';

const HooksImage = () => {
  let [photo ,setPhoto]=useState("https://images.herzindagi.info/image/2022/Aug/Shri-ganesh-story.jpg")
  return (
    <div>
      <h1>{photo}</h1>
      <img src={photo} alt="" width={"400px"}/><br></br>
      <button onClick={()=>{setPhoto("Ganesh")} }>CLICK HERE</button>
    </div>
  )
  }
export default HooksImage