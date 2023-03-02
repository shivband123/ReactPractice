import React,{useState} from 'react'

const Conditonal = () => {
  let [authuser, setAuthuser]=useState(true)
  let Accepteduser=()=>{
    return(
      <>
      <nav>
        <ol>
          <li>Logo</li>
          <li>Menu</li>
          <li>Contact</li>
          <li>Search</li>
        </ol>
      </nav>
      </>
    )
  }
  let NotAccepteduser=()=>{
    return(
      <>
      <nav>
        <ol>
          <li>Login</li>
          <li>signup</li>
          <li>Forget password ?</li>
        </ol>
      </nav>
      </>
    )
  }
  return (
    <div>
      {authuser ? <Accepteduser/>:<NotAccepteduser/>}
    </div>
  )
}

export default Conditonal