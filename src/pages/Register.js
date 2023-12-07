import {React, useRef} from 'react';

function Register() {

    const dataref = useRef(null);
    const submit=e=>{
        e.preventDefault();
    }


  return (
<>
        <div>Please Register for Latest Updates</div>

        <form>
            <input ref={data} type="text" placeholder='Enter your Email Id'/> <br/>
            <input type = 'submit'/>            
        </form>                    
       
</>
    
  )
}

export default Register