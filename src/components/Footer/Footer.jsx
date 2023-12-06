import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import '../Footer/footer.css'

function Footer() {
  return (
    
    <div className='Footer-Container'>
        
      <h3>Follow us on </h3>
        <FaFacebook />
        <AiFillTwitterCircle />
        <PiInstagramLogoFill />
    </div>
  )
}

export default Footer