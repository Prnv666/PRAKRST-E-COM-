import React from 'react'
import './CSS/loginSignup.css'

const LoginSignup = () => {
  return (
    <>
    <div className="loginSignup">
      <div className="loginsignup-container">
          <h1>Sign Up</h1>

          <div className="loginSignup-fields">
            <input type="text" placeholder='Your Name ' />
            <input type="email"  placeholder='Your E-mail'/>
            <input type="password" placeholder='Type Your Password'/>
          </div>

          <button>Continue</button>
          <p className='loginSignup-login'>Already Have an Account ? <span>Login</span></p>
        
        <div className="loginSignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing I Agree to terms  of use & Provacy Policy</p>
        </div>

      </div>
      
    </div>
      
    </>
  )
}

export default LoginSignup
