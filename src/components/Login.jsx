import React from 'react';
import '../styles/Login.css';

function Login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Login</h1>
        <form className="login-form">
          <label>
            Email:
            <input type="email" placeholder="Enter your email" required />
          </label>
          <label>
            Password:
            <input type="password" placeholder="Enter your password" required />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
