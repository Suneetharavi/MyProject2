import React from 'react'
import { useContext } from 'react'
import { ImagesContext } from '../contexts/ImagesContext'

function RegisterContext(props) {

    let contextpicture = useContext(ImagesContext)
    // console.log(contextpicture.picture[0]);
    const pic0=contextpicture.picture[0];
    const pic1=contextpicture.picture[1];
    const pic2=contextpicture.picture[2];
    const pic3=contextpicture.picture[3];
    const pic4=contextpicture.picture[4];
    const pic5=contextpicture.picture[5];
    const pic6=contextpicture.picture[6];
    const pic7=contextpicture.picture[7];
    const pic8=contextpicture.picture[8];
    const pic9=contextpicture.picture[9];
    const pic10=contextpicture.picture[10];
    const pic11=contextpicture.picture[11];
    console.log(pic1);
  return (

    <div>
          
        <div className='ContainerRegisterClass'  >
        
          <div className='RegisterImagesclass'>
          
            <div className='Marquees'>
            
                <div className='MarqueeGroup>'>
               
                    <div className='ImageGroup'>
                    
                      <marquee width='250px' height='200px'>

                        <div className='FinalImagesDiv'>

                        <img className='MyImage' src={pic10}></img>
                        <img className='MyImage' src={pic1}></img> 
                        <img className='MyImage' src={pic0}></img>                            
                        <img className='MyImage' src={pic2}></img>
                        <img className='MyImage' src={pic3}></img>
                        <img className='MyImage' src={pic5}></img>                        
                        <img className='MyImage' src={pic4}></img>
                        <img className='MyImage' src={pic6}></img>
                        <img className='MyImage' src={pic7}></img>
                        <img className='MyImage' src={pic8}></img>
                        <img className='MyImage' src={pic9}></img>
                        <img className='MyImage' src={pic10}></img>
                        <img className='MyImage' src={pic1}></img> 
                        <img className='MyImage' src={pic0}></img>                            
                        <img className='MyImage' src={pic2}></img>
                        <img className='MyImage' src={pic3}></img>
                        <img className='MyImage' src={pic5}></img>                        
                        <img className='MyImage' src={pic4}></img>
                        <img className='MyImage' src={pic6}></img>
                        <img className='MyImage' src={pic7}></img>
                        <img className='MyImage' src={pic8}></img>
                        <img className='MyImage' src={pic9}></img>
                       
                        

                        </div>

                        </marquee>
                    </div>
                </div>
            </div>
          </div>
        </div>        
    </div>
  )
}

export default RegisterContext