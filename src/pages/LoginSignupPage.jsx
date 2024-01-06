import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = axios.post('https://azures-splash-8d7c939ebec7.herokuapp.com/users/login', { email, password }, {
        withCredentials: true,
      })
        
      if (response.data.token) {
        // Save the token to localStorage
        localStorage.setItem('token', response.data.token);

        // Redirect to the booking page
        navigate('/booking');
      } else {
        console.error('Login failed');
        // Handle login failure, show an error message, etc.
      }
    } catch (error) {
      console.error('Error during login', error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <div className="main-container">
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label>
            <p className="text-left">Email</p>
            <input
              className="form-control form-control-lg"
              type="email"
              value={email}
              onChange={(event) => { setEmail(event.target.value) }} placeholder="*****@gmail.com" />
          </label>
        </div>
        <div className="form-group">
          <label>
            <p className="text-left">Password</p>
            <input
              className="form-control form-control-lg"
              type="password"
              value={password}
              onChange={(event) => { setPassword(event.target.value) }} placeholder="******" />
          </label>
        </div>
        <div className="form-group" />
        <button type="submit" className="btn btn-info">
          Login
        </button>
      </form>
    </div>
  );
}



