import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className='container'
    > 
    <div className='Wrapper'>

 
      <form className='Form'>
      <h1 className='Title'>Register</h1>
        <input classname="inputs" type="text" placeholder="username" /> 
        <input  classname="inputs" type="text" placeholder="email" />
        <input  classname="inputs" type="password" placeholder="password" />
       
        <button className='Button'>Register</button>

      </form>
    </div>
    </div>
  )
}

export default Register
