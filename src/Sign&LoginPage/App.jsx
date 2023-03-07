import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App