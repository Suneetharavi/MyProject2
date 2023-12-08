import React, {useRef, useEffect} from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Footer/Footer';
import '../App.css';
import RegisterContext from '../components/RegisterContext';



const Register=() =>{

    const dataref = useRef(null);
    const submitHandler = e => {
        e.preventDefault();
        console.log(dataref.current.value)
    }

    useEffect(() => {
        dataref.current.focus();
    },[])

  return (
    <>
    <Header/>
    <div className='RegisterMainDiv'>
        
        <h1>Please Register for Latest Updates</h1>
        <div className='FormClass'>
        <form onSubmit={submitHandler}>
            <input  className='textboxClass' ref={dataref} type="text" placeholder='Enter your Email Id'/><br/>
            <button className='submit-button-class' ><h4>Submit</h4> </button>           
        </form>                    
        </div>
    </div>

   
         <RegisterContext/>

  
    <div className='FooterClass1'>
    <Footer/>
    </div>

    </>
)}
  
export default Register