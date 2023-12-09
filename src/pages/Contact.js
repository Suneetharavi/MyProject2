import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import FaxIcon from '@mui/icons-material/Fax';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Table, TableRow, TableBody, TableCell, TableContainer, TableHead, Typography } from '@mui/material'

function Contact() {
  return (
    <Layout>
      <Box sx={{
        my:2,
        ml:10,
        textAlign:'center',
        "& h4":{fontWeight:"bold",mb:2,color:'purple'},
        "& p":{mb:2,color:'#D988B9'}
      }}>

    <div><img src='SRHLogo.png' width='100px'></img></div>
          <Typography variant='h4' >
                Contact Me
          </Typography>
          <p>
          Please contact the SRH (Suneetha's Receipe Hunter) for any details. <p>
          It's a 24/7 working hotline.</p>
          </p>
      </Box>

      <Box  sx={{
          m: 3,
          width: "1000px",
          ml: 10,
          my:7,

          //Styling To fit in mobile view
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}>
         
         
            {/* Tablecontainer contains the table. Giving tablecomponent type as paper which is available in materialUI */}
        <TableContainer>
            <Table aria-label='Contact Table'>

              <TableHead>                
                <TableRow>
                  <TableCell  sx={{ bgcolor: "black", color: "#D988B9" }}
                  align="center">
                     Contact Me - The Suneetha's Receipe Hunter (SRH)
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>
                      <SupportAgentIcon sx={{ color: "red", pt: 1 }}/>1800-000-0000
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <LocationOnIcon sx={{ color: "blue", pt: 1 }} /> USA
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <MailIcon sx={{ color: "skyblue", pt: 1 }} /> mail2.suneetha@srh.com
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                  </TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell>
                    <FaxIcon sx={{ color: "orange", pt: 1 }} /> 1111111
                  </TableCell>
                </TableRow>

              </TableBody>

            </Table>
        </TableContainer>
      </Box>
      </Layout>
  )
}

export default Contact