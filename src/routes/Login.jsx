import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
import './login.css'
import { Card } from 'antd';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://34.101.113.12/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    if (response.ok) {
      const { token } = await response.json();
      <Card token={token}></Card>
      localStorage.setItem('token', token);
      setLoginStatus(
        alert("Login Succesfull")
      );
      navigate('/add');
    }else {
      setLoginStatus(
       alert('Invalid email or password')
      );
    }
  };

  const handleCreateAccount = () => {
    navigate('/');
  }

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={Logo} alt="logo" className="logo"/>
            </div>
          </div>
           
          <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
              <input class="border-t border-b mt-8 border-gray-900" type="text" placeholder="Username" aria-label="name"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
  
              <input class="border-b border-gray-900" type="password" placeholder="Password" aria-label="pass"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            
              <div className="login-button">
                <button>Login</button>
              </div>
              
              <div className="lines">
                <p>OR</p>
              </div>
              
              <div className="create-button">
                <button onClick={handleCreateAccount}>Create Account</button>
              </div>
            </form>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Login;
