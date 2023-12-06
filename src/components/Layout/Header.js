import React from 'react'
import { AppBar,Typography,Toolbar,Box,Divider,Drawer,IconButton } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import SRHLogo from '../../models/logo/SRHLogo.png'
import {Link} from "react-router-dom";
import '../../App.css';

const Header = () => {
  return (
    <>
    <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black'}}>
        <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
                
                <SoupKitchenIcon/>Recipe Hunter
              {/* <img src={SRHLogo.png} alt="logo" height={"70"} width="250" /> */}
        </Typography>
      {/* Responsive Design  ..Mobile View*/}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/About"}>About</Link>
                </li>
                <li>
                  <Link to={"/Contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
        </AppBar>

    </Box>
    </>
  )
}

export default Header