import React from 'react'
import { useContext } from 'react'
import { ImagesContext } from '../contexts/ImagesContext'

function RegisterContext(props) {

    let contextpicture = useContext(ImagesContext)
    console.log(contextpicture.picture);
  return (

    <div>RegisterContext
   

    {contextpicture.picture.map((pic) =>
    {
        return(
          
                <img src={pic}></img>
                
           
            
        )
    } )}

    </div>
  )
}

export default RegisterContext