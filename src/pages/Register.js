import React, {useRef, useEffect, useState} from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Footer/Footer';
import '../App.css';
import RegisterContext from '../components/RegisterContext';
import emailjs from 'emailjs-com';

const Register=() =>{
    const dataref = useRef(null);

    const [data,setData] = useState({ email:''})
    const {email} = data;

    const changeHandler = e =>{
     setData({...data,[e.target.name]:e.target.value})}


    const submitHandler = e => {
        e.preventDefault();
        console.log(dataref.current.value)

          emailjs.sendForm('service_7nqksw6', 'template_v4k4bqs', e.target, 'KqxfdcF4ZT9d7pi7D')
         .then((result) => {
              console.log(result.text);
              e.target.reset();
              setData(!data);

          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
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
            <input  className='textboxClass' name='email' ref={dataref} type="text" onChange={changeHandler} placeholder='Enter your Email Id'  /><br/>
            <button className='submit-button-class' ><h4>Submit</h4> </button>           
          
        </form>                    
        </div>

    
    <div className='Texth1class'>Our Sponsers and Customers</div>
    
    <RegisterContext/>
    {/* </Layout> */}
   </div>
    <div className='FooterClass1'>
    <Footer/>
    </div>
    
    </>
)}
  
export default Register