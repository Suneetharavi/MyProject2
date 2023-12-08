import React, {useRef, useEffect} from 'react';
import Header from '../components/Layout/Header';
import '../App.css';

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
    <div className='RegisterMainDiv'>
        <Header/>
        <div>Please Register for Latest Updates</div>

        <form onSubmit={submitHandler}>
            <input ref={dataref} type="text" placeholder='Enter your Email Id'/><br/>
            <input type = 'submit'/>            
        </form>                    
       
    </div>
)}
  
export default Register