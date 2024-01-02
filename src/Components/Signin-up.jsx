
 import { useEffect, useRef, useState } from 'react';
import { useValue } from '../Customprovider';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebaseinit';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const {signintoggle,signinup}=useValue();
  const navigate=useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const emailRef=useRef(null);


  useEffect(()=>{
    emailRef.current.focus();
  },[])

  function handleSignUpSubmit(event){
    event.preventDefault();
    createUserWithEmailAndPassword(db,email,password).then(user=>{
      console.log(user,"authdata");
      navigate("/signup");
    }).catch(err=>console.log(err));
    setName("");
    setEmail("");
    setPassword("");
  }


  function handlesiginToggle(event){
    event.preventDefault();
    signInWithEmailAndPassword(db,email,password).then(user=>{
      console.log(user,"authdata");
      navigate("/home");
    }).catch(err=>console.log(err))

    setEmail("");
    setPassword("");

  }
    
  return (


    
    <>
    {signinup?
    <div className="signup-container">
      <form  className="signup-form" onSubmit={handleSignUpSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
           ref={emailRef}
           value={name} onChange={(e)=>setName(e.target.value)}
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email} onChange={(e)=>setEmail(e.target.value)}
            id="email"
            name="email"
            
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password} onChange={(e)=>setPassword(e.target.value)}
            name="password"
            required
          />
        </div>
        <button className='signup-button' type="submit">Sign Up</button>
        <p className='signup-new' onClick={signintoggle}> I Have <span>Already Account</span> ?</p>
      </form>
    </div>:

<div className="signup-container">
<form  className="signup-form" onSubmit={handlesiginToggle}>
  <h2>Sign In</h2>
  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      value={email}
      ref={emailRef}
      onChange={(e)=>setEmail(e.target.value)}
      name="email"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      name="password"
      required
    />
  </div>
  <button className='signup-button' type="submit">Login</button>
  <p className='signup-new' onClick={signintoggle}> Create <span>New Account</span> ?</p>
  
</form>
</div>
}
</>
  );
}

export default Signup;
