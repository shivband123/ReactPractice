import React,{useRef} from 'react'

const FBC = () => {
  let userRef=useRef()
  let passRef=useRef()
  
  let handleSubmit=(e)=>{
    e.preventDefault()
    let userName=userRef.current.value
    let password=passRef.current.value
    console.log({userName, password})
  }
  return (
     <div>
      <form action="">
        <label htmlFor="username">username</label><br/>
        <input type="text" id='username' ref={userRef}/><br/>
         <label htmlFor="password">password</label><br/>
         <input type="text" id='password' ref={passRef}/><br/>
         <button onClick={handleSubmit}>Submit</button>

      </form>
     </div>
  )
}

export default FBC