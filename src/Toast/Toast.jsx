import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 class Toast extends Component {
  render() {
    console.log(this)
    return (
      <div> 
      <ToastContainer/>
      <h1>Toast</h1>
      <button onClick={()=>{
       //toast.success("COMPLETED",{position:toast.POSITION.TOP_RIGHT})
        var a=20;
        var b=30;
        var c=a*b
        toast.success(`This value is ${c}`,{position:toast.POSITION.TOP_RIGHT})
      }}>Success</button>
      </div>
    )
  }
}
export default Toast