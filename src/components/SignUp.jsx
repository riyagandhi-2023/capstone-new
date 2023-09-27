// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigation = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(false);
    setTimeout(() => {
      setIsSuccess(true);
      navigation('/login');
    }, 2000); 
  }
    return(
        <>
       
        <div>
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
    <div className="create"><p> Already have an account? <Link to='/loginm'>Log In</Link></p></div>
 
    
      </div>
        </>
    )
}

export default SignUp;