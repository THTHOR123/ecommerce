import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value })
  }

  const loginsubmit = async(e)=>{
    e.preventDefault();

    try {
      
      await axios.post('/user/login',{...user});
      localStorage.setItem('firstLogin',true);
      window.location.href="/";
    } catch (error) {
      alert(error.response.data.msg)
    }
  }


  return (
    <div className='login-page'>

      <form onSubmit={loginsubmit}>
        <input type='email'
         name='email' 
         required 
         placeholder='email' 
         value={user.email} 
         onChange={onChangeInput} 
         />

        <input type='password' 
        name='password' 
        required 
        placeholder='password' 
        value={user.password} 
        onChange={onChangeInput} 
        />

        <div className='row'>
          <button type='submit'>login</button>
          <Link to='/register'>register</Link>
        </div>
      </form>

    </div>
  )
}

export default Login
