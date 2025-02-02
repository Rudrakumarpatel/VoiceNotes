import { useState } from "react";
import { register } from "../services/authService.js";
import { useNavigate } from "react-router-dom";
import React from "react";

const Register = ({ setMessage, setIsAuthenticated }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (name && email && password) {
      try {
        await register(name, email, password); 
        setMessage("Registration successful! Please login.");
        setIsAuthenticated(false);  
        navigate("/login");  // Redirect to login after successful registration
      } catch (err) {
        setError("Error during registration: " + err.message);
      }
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Register</h2>
      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full mt-2"
        onChange={(e) => setName(e.target.value)}
      />
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
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        onClick={handleRegister}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Register
      </button>
    </div>
  );
};

export default Register;
