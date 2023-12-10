import React from "react";
import Layout from "./../components/Layout/Layout";
// import Suneetha from '../models/logo/Suneetha.png'
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 4,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
            color:'purple',
            
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:500px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <div><img src='SRHLogo.png' width='100px' alt='NoImg'></img></div>
        <Typography variant="h4">Welcome To Suneetha's Recipe Hunter</Typography><br/>
        <p>
          Hi, I am Suneetha. An ambitious and Technology Driven Software Engineer 
                who is 
          Able to code HTML, Javascript, React, CSS from scratch on a daily basis. 
          Recently completed 450+ hours of hands-on technical instruction in software development, 
          aiming to leverage my abilities to successfully fill the Software engineer role on the team.
          </p><p>
          An individual contributor who adds value through technical expertise and creates a clear strategy and delivers results through teamwork. 
          </p>
          
        <br /><br/>
        <p>
        
        ●   	Developed object-oriented web applications using Java programming language.
        ●   	Designed user interfaces for laboratory systems that were intuitive and easy-to-use.
        ●   	Maintained records of program development activities and results.
        ●   	Worked successfully with a diverse group of coworkers to accomplish goals and address issues   related to our Institution.
        ●   	Demonstrated leadership by making improvements to work processes and helping to train others.
        ●   	Maintained schedule of class assignments to meet deadlines.
        ●   	Helped maintain positive relations between the students and faculty.
        ●   	Troubleshooting office equipment, computer hardware and software issues.
        ●   Processed and prepared business or government forms and expense reports.
        ●   Tracked students' attendance, materials distribution and assignments submitted in Excel.
        </p>
        <br/>
        <p>
        "I place great value on interpersonal relationships and a positive work environment at work. 
        I like being recognized for my hard work and dedication, and offer positive feedback to others 
        when I notice great work being done.
         I value mutual respect and validation.
        </p>
        <br/>
        <p>
        I wish to become a Principal Software Engineer in the coming future. As I have acquired my higher education in technology,
         I have built a strong base in different levels of programming.
        </p><br/>

      <p>Yes. My passion towards designing and developing websites makes me a right person to take this rigorous hand-on training and my dedication, smartwork , critical thinking and problem solving analysis skills makes me a right person for this position.
        My desire is to be a world class Software Developer who renders solutions for various problems, with building applications,
      being a great people manager and a great mentor to upcoming developers in the technology industry.</p>
      <br></br>
      My Ability to code HTML, Javascript, React, CSS make me confident in achieving my goal. 
      My  Recent experience in  450+ hours of hands-on technical instruction in software development,aiming to leverage my abilities to successfully fill the Software engineer role on the team.
<br/><br/>
      My Ambition to become a Software Engineer ,my dedication towards course learning , my confidence in coding with React, HTML, CSS technologies showcase the reality in achieving my Goal.

      
      </Box>
    </Layout>
  );
};

export default About;

