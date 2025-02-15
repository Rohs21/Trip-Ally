import React from 'react';
import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';



function Login(){
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, pass })
          .then((result) => {
            console.log(result)
            if(result.data === "Successfully"){
                navigate('/home')
              }
            
          })
          .catch((err) => console.log(err));
      };
  
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-700">Welcome Back</h2>
            <p className="mt-2 text-sm text-gray-500">Sign in to your account</p>
          </div>

          <form className="mt-8 space-y-6" method="POST" onSubmit={handleSubmit}>

            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPass(e.target.value)}
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
            <p className="text-gray-600">Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign-up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
