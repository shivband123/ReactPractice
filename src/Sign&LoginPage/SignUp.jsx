import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Sign&LoginCSS/Sign.css"

const SignUp = () => {
  let navigate=useNavigate()
  let[username , setUsername]=useState("")
  let[password ,setPassword]=useState("")

  let handleSubmit=(e)=>{
      e.preventDefault()
      console.log(username,password)
      localStorage.setItem("username",username)
      localStorage.setItem("password",password)
      navigate("/Login")
  }
  return (
    <div className='mainSign'>
       <form action="">
          <h1>SignUp</h1>
          <input type="text" id='username' placeholder='Enter your Email/userName' onChange={(e)=>{
            setUsername(e.target.value)
          }}/><br></br>
          <input type="text" id='password' placeholder='Enter your Password' onChange={(e)=>{
            setPassword(e.target.value)
          }}/><br></br>
          <button id='SignUp' onClick={handleSubmit}>SignUp</button>
        </form>
    </div>
  )
}

export default SignUp



