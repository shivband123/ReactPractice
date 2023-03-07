import React,{useState,useEffect} from 'react'

const UseEfectUpdate = () => {
  let [value, setValue]=useState(window.innerWidth)

  useEffect(()=>{
window.addEventListener("Resize",(e)=>{
  console.log(value)
    setValue(e.target.innerWidth)
  })
    },[value])
  return (
    <div>
      <h1>{value}</h1>
    </div>
  )
}

export default UseEfectUpdate