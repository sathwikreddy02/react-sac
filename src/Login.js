import React, { useState } from "react";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';

const Login = () => {

  return (
    <div>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
};

export default Login;
