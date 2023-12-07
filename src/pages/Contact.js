import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, TableCell, TableContainer, TableHead, Typography } from '@mui/material'

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
                      <TableColumn>

                        <TableRow>
                          <TableCell>

                            
                          </TableCell>
                        </TableRow>

                      </TableColumn>


                </TableHead>


            </Table>

        </TableContainer>
      </Box>
      </Layout>
  )
}

export default Contact