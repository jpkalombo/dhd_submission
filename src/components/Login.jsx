import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { Button } from '@mui/material';

async function loginUser(credentials) {
  if (credentials.username === '' || credentials.password === '') {
    Swal.fire({
      title: 'Error!',
      text: 'Please enter all the required information',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }else{
    let response = () => {
      return new Promise(function(resolve, reject) {
        fetch('https://restful-booker.herokuapp.com/auth', {
          method: "post",
          headers: {
                "Content-Type": "application/json"
          },
        }).then(response => {
          console.log(response);
        });
      });
    };
    let responseData = await response();
    console.log(responseData.data);
  }
  
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    
    const token = await loginUser({
      username,
      password
    });
    // const token1 = '3bc0c57f07507aa';
    console.log(token)
    setToken(token)
    localStorage.setItem('token', JSON.stringify(token));
    
  }

  return(
    <div className="login-wrapper box">
      <h1>Please Enter Your Details to Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" className='input' onChange={e => setUserName(e.target.value)} placeholder='Username'/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" className='input' onChange={e => setPassword(e.target.value)} placeholder='Password'/>
        </label>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};