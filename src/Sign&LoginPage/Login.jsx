import React,{useState} from 'react'
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';
import "./Sign&LoginCSS/Login.css"

const Login = () => {
  let navigate=useNavigate()
  let[username,setUsername]=useState("")
  let[password,setPassword]=useState("")

  let handlePage =(e)=>{
      e.preventDefault()
      console.log(username, password)
      let localUsername=localStorage.getItem("username")
      let localPassword=localStorage.getItem("password")
      if(localUsername===username && localPassword===password)
      {
        toast.success(`${username}Login is Successfully`)
        navigate("/Home")
      }
      else
      {
        toast.error("Please Check your username and password")
        navigate("/Login")
      }
  }
  return (
    <div className='mainLogin'>
       <form action="">
          <h1>Login</h1>
          <input type="text" id='username' placeholder='Enter your Email/userName' onChange={(e)=>{
            setUsername(e.target.value)
          }}/><br></br>
          <input type="text" id='password' placeholder='Enter your Password' onChange={(e)=>{
              setPassword(e.target.value)
          }}  /><br></br>
          <button id='Login' onClick={handlePage}>Login page</button>
        </form>
    </div>
  )
}

export default Login