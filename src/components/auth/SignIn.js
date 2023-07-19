import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./signin.css"; // Import custom styles
import AuthDetails from "../AuthDetails";
import headerlogo from '../../Images/Logos/logo.png';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <div className="auth-details">
        <AuthDetails />
      </div>
      <div className="card">
        <img src={headerlogo} alt="Student Activity Center" />
        <h3>Log In to your Account</h3>
        <form onSubmit={signIn}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
          <br /><br />
          <a href="/SignUp">Create Account</a>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
