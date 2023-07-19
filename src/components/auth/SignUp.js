import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import AuthDetails from "../AuthDetails";
import headerlogo from '../../Images/Logos/logo.png';


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-up-container">
      <div className="auth-details">
        <AuthDetails />
      </div>
      <div className="card">
      <img src={headerlogo} alt="Student Activity Center" />
        <h2>Create Account</h2>
        <form onSubmit={signUp}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Sign Up</button><br /><br />
          <a href="/SignIn">Login Account</a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;