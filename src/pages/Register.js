import {React, useRef} from 'react';

function Register() {

    const dataref = useRef(null);

  return (
<>
        <div>Please Register for Latest Updates</div>

        <form>
            <input type="text" placeholder='Enter your Name'/> <br/>
            <input type = 'submit'/>            
        </form>                    
       
</>
    
  )
}

export default Register