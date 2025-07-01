import React, { useState } from "react";
//axios is used to make HTTP requests (like POST to your backend)1

import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //password submissiom handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      return setError("Password must have atleast 8 characters");
    }
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      console.log(res.data);
      setError("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Login Failed");
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}></form>
      <h2>Welcome Back</h2>
      <h4>Please enter your details to log in</h4>
      <input
        type="email"
        placeholder="jack@example.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
    </div>
  );
}

export default Login;
