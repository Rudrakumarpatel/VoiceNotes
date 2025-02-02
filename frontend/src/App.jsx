import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import React from "react";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState(""); 
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");  
    setIsAuthenticated(false);  
    setMessage("Logged out successfully!");  
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="p-4 bg-blue-600 text-white">
        <Link to="/" className="mr-4">Home</Link>
        {isAuthenticated ? (
          <>
            <button onClick={handleLogout} className="text-white">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/register" className="mr-4">Register</Link>
          </>
        )}
      </nav>
      
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">
          {isAuthenticated ? "Welcome back!" : "Please login or register"}
        </h2>
        
        {message && <p className="text-green-500">{message}</p>}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setMessage={setMessage} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register setMessage={setMessage} setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
