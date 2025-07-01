"use client"
import React, { useState } from 'react'

const Error = () => {
    const [click,setClick] = useState(false);
  return (
    <>
    <div className={`w-[300px] h-[330px] tranition-transform duration-300 tranform  ${click ? "translate-x-0 ": "translate-x-100"} bg-black fixed right-3 bottom-5 rounded-md `}></div>
    <p onClick={()=>setClick(!click)} className={`fixed bottom-5 ${click && "-bottom-10"} transition-transform duration-300 bg-black rounded-full cursor-pointer text-white text-[12px] p-3  right-3`}>Report a  Bugs</p>
    
    </>
  )
}

export default Error
