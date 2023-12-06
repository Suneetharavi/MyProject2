import React from 'react'
import { AppBar,Typography,Toolbar,Box,Divider,Drawer,IconButton } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SRHLogo from '../../models/logo/SRHLogo.png'

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
              <img src={SRHLogo.png} alt="logo" height={"70"} width="250" />
        </Typography>
        </AppBar>

    </Box>
    </>
  )
}

export default Header