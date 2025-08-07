import React from 'react'
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const { loggedInUser, setUserName, setIsLoggedIn } = useContext(UserContext);
  const handleLogin = () => {
  if (loggedInUser.trim() !== "") {
    setIsLoggedIn(true);
    alert(`Welcome, ${loggedInUser}!`);
  } else {
    alert("Please enter a name before logging in.");
  }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="text"
            className="border border-gray-300 rounded p-2 mb-4"
            placeholder="Enter your name"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
        />
        <Link to="/">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
        </Link>
        </div>
    </div>
  )
}

export default Login
