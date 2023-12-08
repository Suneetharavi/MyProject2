import React from 'react'
import { useContext } from 'react'
import { ImagesContext } from '../contexts/ImagesContext'

function RegisterContext(props) {

    let contextpicture = useContext(ImagesContext)
    console.log(contextpicture.picture);
  return (

    <div>
   

    {contextpicture.picture.map((pic) =>
    {
        return(
          <>
          
        <div className='ContainerRegisterClass'  >
        
          <div className='RegisterImagesclass'>
          
            <div className='Marquees'>
            
                <div className='MarqueeGroup>'>
               
                    <div className='ImageGroup'>
                    
                      <marquee><img className='MyImage' src={pic}></img>hello world</marquee>
                      
                    </div>
                </div>
            </div>
          </div>
        </div>        
        </>  
        )
    } )}

    </div>
  )
}

export default RegisterContext