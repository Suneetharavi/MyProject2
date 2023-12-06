import React from 'react'
import {Box, Typography} from '@mui/material'
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
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
        <GitHubIcon />
        <YouTubeIcon />
    
    <Box>
    <Typography
          variant="h7"
          //Styling for responsive design
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}>
            All Rights Reserved &copy; Suneetha's Receipe Hunt
    </Typography>
    </Box>
    </Box>
  </>
  )
}

export default Footer