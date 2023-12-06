import React from 'react'
import {Box, Typography} from '@mui/material'
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import '../Footer/footer.css'

function Footer() {
  return (
    <>
    <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        
      <h3>Follow us on </h3>
        <FaFacebook />
        <AiFillTwitterCircle />
        <PiInstagramLogoFill />
    
    <Box>
    <Typography
          variant="h7">
            All Rights Reserved &Copy; Suneetha's Receipe Hunt
    </Typography>
    </Box>
    </Box>
  </>
  )
}

export default Footer