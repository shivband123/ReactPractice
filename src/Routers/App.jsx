
import React from 'react' 
import Nav from "./Nav"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./Home"
import SignUp from "./Signup"
import Login from "./Login"
import Menu from "./Menu"
import PageNotFound from "./PageNotFound"

function App (){
  return (
    <div>
      <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </Router>
     
    </div>
  )
}

export default App