import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import LoginSignupPage from './pages/LoginSignupPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      {/* <img src="../azuresplashlogo.png" alt="azure splash logo"/> */}
      <Navbar />

      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/services" element={<ServicesPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/loginorsignup" element={<LoginSignupPage />}/>

      </Routes>

    </div>
  );
}

export default App;