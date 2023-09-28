// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigation = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);


  //if sign up successfully redirect to login page
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(false);
    setTimeout(() => {
      setIsSuccess(true);
      navigation('/loginm');
    }, 2000); 
  }

      
    return(
        <>
        
        <div className="heading">
          Sign Up
        </div>
       
        <div>
        <form className="su_form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />

    <input
        type="text"
        name="email"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@example.com"
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
      <button type="submit">Sign Up!</button>
    </form>
    <div className="signup"><p> Already have an account? <Link to='/loginm'>Log In</Link></p></div>
 
    {isSuccess && <p>Sign up successful!</p>}
      </div>

        </>
    )
}

export default SignUp;