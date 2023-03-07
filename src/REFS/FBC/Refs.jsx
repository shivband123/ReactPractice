import React ,{useState,useRef} from 'react'

const RefsFBC = () => {
  let [Img, setImg]=useState("https://imgd.aeplcdn.com/640X480/cw/ucp/stockApiImg/E5MI7S4_2147731_1_19617580.jpg?q=85")
  let imgRef=useRef()
  let btnRef=useRef()
  let Changeborder=()=>{
    imgRef.current.style.border="2px solid red"
    btnRef.current.style.border="2px solid green"
    imgRef.current.style.hight="200px"
    imgRef.current.style.width="200px"

  }
  return (
    <div>
      <img src={Img} alt="" ref={imgRef}/>
      <button onClick={Changeborder} ref={btnRef}>Change Border</button>
    </div>
  )
}

export default RefsFBC