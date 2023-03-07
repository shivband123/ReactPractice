import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div style={{display:'flex', border:"2px solid red",justifyContent:"space-between"}}>
      <div>
        logo
      </div>
      <div style={{display:'flex',justifyContent:"space-around",width:"300px"}}>
        <ul>
          <li>
            <link to="/">Home</link>
          </li>
          <li>
            <link to="/signup">Signup</link>
          </li>
          <li>
            <link to="/">Login</link>
          </li>
          <li>
            <link to="/">Menu</link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav