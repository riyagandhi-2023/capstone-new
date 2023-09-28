/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


//login page created by me
const Loginm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    
        
    }

  return (
  <>
 <div className="loginm-container">
  
    <h1 className="heading"> Login Form </h1>
    <div className="split">
      <div className="left">
      <img src="https://storeliquidators.com/public/front_assets/images/signin-image.jpg"/>
      </div>
    
    
      <div className="centerd">
    <form className="lg_form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
       
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        minLength={6}
        required
        
      />
      <button type="submit">Login</button>
    </form>
    <div className="create"><p> Do not have an account? <Link to='/signup'>Create</Link></p></div>
    </div>
    </div>
    </div>
   

    </>
  )

};

export default Loginm;
