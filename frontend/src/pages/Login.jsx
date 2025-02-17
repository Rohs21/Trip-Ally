import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPass(value);
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage('Email is required.');
      return;
    }
    if (!pass) {
      setErrorMessage('Password is required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email: email,
        password: pass
      });
      
      console.log('Server Response:', response.data);
      
      // Check for success based on the actual response format
      if (response.data.success === true) {
        // You might want to store the JWT token here
        localStorage.setItem('token', response.data.jwtToken);
        localStorage.setItem('userEmail', response.data.email);
        localStorage.setItem('userName', response.data.name);
        
        navigate('/home');
      } else {
        setErrorMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.log('Error details:', error.response || error);
      
      if (error.response) {
        switch (error.response.status) {
          case 400:
            setErrorMessage('Invalid email or password format.');
            break;
          case 401:
            setErrorMessage('Invalid credentials. Please check your email and password.');
            break;
          case 404:
            setErrorMessage('Account not found. Please check your email.');
            break;
          default:
            setErrorMessage(error.response.data?.message || 'Login failed. Please try again.');
        }
      } else if (error.request) {
        setErrorMessage('No response from server. Please try again later.');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-700">Welcome Back</h2>
            <p className="mt-2 text-sm text-gray-500">Sign in to your account</p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* Error Message Display */}
            {errorMessage && (
              <div className="p-3 text-sm text-red-500 bg-red-50 rounded-lg">
                {errorMessage}
              </div>
            )}

            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email address"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={pass}
                  onChange={handleChange}
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-2 mt-4 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="text-sm text-center mt-4">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign-up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;