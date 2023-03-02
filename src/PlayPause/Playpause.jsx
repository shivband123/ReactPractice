import React ,{useRef, useState} from 'react'
import VIDEO from "./kGF.mp4"

const Playpause = () => {
  let [video , setvideo]=useState(VIDEO)
  let [play ,setplay]=useState(false)
  let videoRef=useRef()
  let handleChange=()=>{
    if(!play)
    {
      setplay(true)
      videoRef.current.play()
    }
    else{
      setplay(false)
      videoRef.current.pause()
    }
  }
  return (
    <div>
      <video src={video} ref={videoRef} onClick={handleChange}></video>
    </div>
  )
}

export default Playpause