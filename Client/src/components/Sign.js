import React from 'react';
import './Sign.css';
import {loginFailure, loginStart, loginSuccess} from "../redux/userSlice";
import {useDispatch} from "react-redux"
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';





const Sign = () => {

  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch= useDispatch();
  const navigate = useHistory();
  
  const handleLogin = async(e)=>{
    e.preventDefault();
    dispatch(loginStart());
    try{
      const res = await axios.post("http://localhost:8000/api/auth/login",{username,password});
      dispatch(loginSuccess(res.data));
      navigate.push("/");
    }catch(err){
      dispatch(loginFailure());
    }
    }

  return (
    <div>
        <div className='Scontainer'
    > 
    <div className='SWrapper'>

 
      <form className='SForm'>
      <h1 className='STitle'>Sign-In</h1>
        <input classname="inputs" type="text" placeholder="username" onChange={e=>setName(e.target.value)}/> 
        
        <input  classname="inputs" type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} />
       
        <button className='SButton' onClick={handleLogin} >Sign-In</button>

      </form>
    </div>
    </div>
    </div>
  )
}

export default Sign
