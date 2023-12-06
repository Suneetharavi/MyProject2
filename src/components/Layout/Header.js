import React from 'react'
import { AppBar,Typography,Toolbar,Box,Divider,Drawer,IconButton } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Header = () => {
  return (
    <>
    <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black'}}>
            Recipe Hunter
        </AppBar>

    </Box>
    </>
  )
}

export default Header