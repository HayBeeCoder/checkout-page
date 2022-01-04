import React from 'react';
// import Header from '../header/Header'
import { Link } from "react-router-dom"
function SignUp(props) {
    return (
    
            <div>
                <h2 className='heading-2'>Create An Account</h2>
                <span>
                    <p>Already have shopr account?</p>
                    <Link to="/sign_in">
                        Log in
                    </Link>
                </span>
            </div>
        
    );
}

export default SignUp;