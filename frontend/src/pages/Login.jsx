import { useState } from "react";
import { login } from "../services/authService.js";
import { useNavigate } from "react-router-dom";
import React from "react";

const Login = ({ setMessage, setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);  
      setMessage("Login successful!");  
      setIsAuthenticated(true); 
      navigate("/");  // Redirect to home after successful login
    } catch (err) {
      setMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mt-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mt-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
