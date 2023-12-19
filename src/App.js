import {  Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import LoginSignupPage from './pages/LoginSignupPage';
import SignupPage from './pages/SignupPage';
import Navbar from './components/Navbar';
import axios from 'axios';
import {useEffect, useState } from 'react';
import BookingPage from './pages/BookingPage';





axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true

function App() {

  
  const [jwt, //setJwt
] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  useEffect(() => {
  console.log(`JWT value is:\n${jwt}`);
  }, [jwt]);
  
  return (
    <div className="App">

     


    
      <Navbar />

      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/services" element={<ServicesPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/loginorsignup" element={<LoginSignupPage />}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/POST" element={<LoginSignupPage />}/>
        {/* This is for testing, to be removed */}
        <Route path="/booking" element={<BookingPage />}/> 


      </Routes>

    </div>
  );
}

export default App;