import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

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
      </Layout>
  )
}

export default Contact