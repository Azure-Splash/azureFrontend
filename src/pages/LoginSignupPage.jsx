import {useState} from "react";
// import {Link} from "react-router-dom";
// import axios from 'axios'
 import Footer from "../components/Footer";
import {login} from "../functions/login";
import {Link} from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://azures-splash-8d7c939ebec7.herokuapp.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const { token, userId } = await response.json();

      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Store the user ID in localStorage (you can use a different storage method if needed)
      localStorage.setItem('userId', userId);

      // Redirect the user to the booking page
      window.location.href = '/booking';
    } catch (error) {
      console.error('Login Error:', error.message);
      throw new Error()
    }
  };

    return(

            <div>
                <div className="main-container">
                        <h1>
                          Login
                        </h1>

        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <br></br>
        <div class="form-group">
            <label>
                <h6 class="text-left">Email</h6>
                <input 
                class="form-control form-control-lg"
                type="email" 
                value={email}
                onChange={(event)=>{setEmail(event.target.value)}} required placeholder ="*****@gmail.com" />
            </label>
        </div>
        <div class="form-group">
        <label>
            <h6 class="text-left">Password</h6>
            <div class="col-m-10">
            <input
            class="form-control form-control-lg"
            type="password"
            value={password}
            onChange={(event)=>{setPassword(event.target.value)}} required placeholder ="******" />
            </div>
        </label>
        </div>
        <div class="form-group">
            <button class="btn btn-info text-left" onClick={() => {login(email, password)}}>
                Login
            </button>
        </div>
        </form>

        <p>Don't have an account? <Link to="/signup"> Sign up here. </Link></p>

        </div>

        <Footer/>
        
		</div>
	)
}


export default Login;


