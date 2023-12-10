import React from 'react'
import { useState } from 'react';
import { AppBar,Typography,Toolbar,Box,Divider,Drawer,IconButton } from '@mui/material'
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import '../../App.css';

const Header = () => {

    const [mobileOpen,setMobileOpen] = useState(false)
    //Adding handling function to MenuIcon

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    //menu drawer
const drawer =(
    <Box onClick ={handleDrawerToggle} sx={{textAlign:'center'}}>

        <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, my:2 }}
        >
               
        <SoupKitchenIcon/>Recipe Hunt
              {/* <img src={SRHLogo.png} alt="logo" height={"70"} width="250" /> */}
        </Typography>
        <Divider/>
      {/* Responsive Design  ..*/}
              <ul className="mobile-navigation">
                <li>
                <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/About"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/Contact"}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to={"/Register"}>Register</NavLink>
                </li>
              </ul>
    </Box>);


  return (
    <>
    <Box>
        <AppBar component={'nav'} sx={{ bgcolor: ' #9f609c'}}>
            <Toolbar>
                <IconButton 
                color='inherit' 
                aria-label='open drawer'
                edge='start'
                sx={{mr:2,
                display:{sm:'none'},
            }}
            onClick={handleDrawerToggle}
            >
            <MenuIcon/>
            </IconButton>
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
                <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/About"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/Contact"}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to={"/Register"}>Register</NavLink>
                </li>
              </ul>
            </Box>
            </Toolbar>
        </AppBar>
        <Box component='nav'>
            <Drawer variant='temporary' 
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{display:{xs:'block',sm:'none'},
            "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
            },
        }}
            >
                {drawer}
            </Drawer>
        </Box>
    
    {/* To Fix the hiding content in the pages */}
    
       <Box> 
          <Toolbar />
      </Box> 

    </Box>
    </>
  )
}

export default Header