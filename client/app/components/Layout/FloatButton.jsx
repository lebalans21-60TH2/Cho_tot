"use client";

import React,{useState} from 'react'

const FloatButton = () => {
    const [hideButton, setHideButton] = useState("800px:block");
  return (
    <div className= {`${hideButton} hidden 800px:fixed 800px:right-0 800px:bottom-[60px] 800px:z-[99] 800px:bg-[transparent]`}>
    <img className="h-[120px]" src="https://cdn.chotot.com/admincentre/1710765259024_Floating%20(3).png" alt="" />
    <div className="absolute top-0 right-0 w-[40px] h-[40px] ">
      <div style={{
            margin: "10px auto",
            width: "20px",
            height:" 20px",
            cursor: "pointer",
            textAlign: "center",
            fontWeight: "600",
            fontSize: "15px",
            borderRadius: "10px",
            backgroundColor:" rgb(17, 17, 17)",
            color:" rgb(255, 255, 255)",
            boxShadow:" grey 0px 0px 10px 2px",
      }} onClick={()=>setHideButton('800px:hidden')}>X</div>
    </div>
  </div>
  )
}

export default FloatButton