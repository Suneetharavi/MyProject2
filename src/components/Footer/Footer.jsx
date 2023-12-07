import React from 'react'
import {Box, Typography} from '@mui/material'
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FaFacebook } from "react-icons/fa";
import '../Footer/footer.css'

const Footer = () => {
  // const imageURL="https://t4.ftcdn.net/jpg/03/10/37/25/360_F_310372527_QHGvFcWTuqalbHPabQTmNwJNEQlWeiKv.jpg"
  return (
    <>
    <div className='FooterDiv'>
    <Box
        sx={{ textAlign: "center", bgcolor: "#9f609c", color: "white", p: 2,my:5 }}
      >
        <Box
        //Styling icons onhover animating to goldcolour
          sx={{
                my: 0,               //margin:3
                "& svg": {                  //Targettin svg images directly
                  fontSize: "30px",
                  cursor: "pointer",
                  mr: 2,     //margin right:2

                  
                },
                "& svg:hover": {             //Styling onhover
                  color: "goldenrod",
                  transform: "translateX(5px)",
                  transition: "all 400ms",
                },
              }}
          >   
          <h3>Follow us on </h3>
            <FaFacebook />
            <AiFillTwitterCircle />
            <PiInstagramLogoFill />
            <GitHubIcon />
            <YouTubeIcon />
        </Box>
  
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
    </div>
  </>
  );
};

export default Footer