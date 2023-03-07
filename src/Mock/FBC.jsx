import React,{useState} from 'react'

const FBC = () => {
  let[username,setUsername]=useState("")
  let[password,setPassword]=useState("")

  let handlesubmit=(e)=>{
    e.preventDefault()
    console.log({username,password})
  }
  return (
    <div>
      <form action="">
          <label htmlFor="username">username</label><br/>
          <input type="text" id='username' onChange={(e)=>{
            setUsername(e.target.value)
          }}/><br/>
          <label htmlFor="password">password</label><br/>
          <input type="password" id='password' onChange={(e)=>{
            setPassword(e.target.value)
          }}/><br/>
          <button onClick={handlesubmit}>Submit</button>
        </form>
    </div>
  )
}

export default FBC

