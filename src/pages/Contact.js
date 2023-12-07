import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Table,TableRow,TableBody, TableCell, TableContainer, TableHead, Typography } from '@mui/material'

function Contact() {
  return (
    <Layout>
      <Box sx={{
        my:10,
        ml:10,
        "& h4":{fontWeight:"bold",mb:2}
      }}>
          <Typography variant='h4'>
                Contact Me
          </Typography>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
          beatae ducimus magni nobis culpa praesentium velit expedita quae,
          corrupti, pariatur inventore laboriosam consectetur modi impedit
          error, repudiandae obcaecati doloribus.
          </p>
      </Box>

      <Box>
            {/* Tablecontainer contains the table. Giving tablecomponent type as paper which is available in materialUI */}
        <TableContainer>
            <Table aria-label='Contact Table'>

                <TableHead>                
                        <TableRow>
                          <TableCell>

                                  Contact Details
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
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> suneetha.gopu3@gmail.com
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