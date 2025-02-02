# 📝 VoiceNotes - Note Taking Web App  

## Project Overview  
VoiceNotes is a **full-stack note-taking web application** that allows users to create notes using **text and voice input** (converted to text using the **Web Speech API**). It includes **user authentication (JWT)**, **MongoDB database storage**, and is built using **Node.js, Express, React (Vite), and Tailwind CSS**.  

This project supports **deployment on Vercel** and ensures seamless **frontend and backend integration**.  

---

## Tech Stack  
### **Frontend (React Vite)**
- **React.js (Vite)**
- **Tailwind CSS** (for styling)
- **React Router DOM** (for navigation)
- **Web Speech API** (for voice-to-text)
- **Axios** (for API requests)

### **Backend (Node.js & Express)**
- **Express.js** (for REST APIs)
- **MongoDB + Mongoose** (for database storage)
- **JWT Authentication** (for user login & registration)
- **CORS & dotenv** (for security and configuration)

---

## Features  
 **User Authentication** (Login, Register, Logout)  
 **Create Notes** (via text or voice)  
 **Edit & Delete Notes**  
 **Voice-to-Text using Web Speech API**  
 **Search Notes**  
 **Responsive UI with Tailwind CSS**  
 **Protected Routes using JWT**  
 **Backend API with MongoDB Storage**  

---

##  Project Structure  


---

## Installation & Setup  

### ** 1. Clone the Repository**
```sh
git clone https://github.com/Rudrakumarpatel/VoiceNotes
cd voiceNotes

 2. Install Backend & Frontend Dependencies

# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..

 3. Setup Environment Variables


Start the Backend (Express Server)
npm start
