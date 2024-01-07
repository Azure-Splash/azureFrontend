import {useState} from "react";
// import {Link} from "react-router-dom";
import axios from 'axios'
 import Footer from "../components/Footer";
import {login} from "../functions/login";
import {Link} from "react-router-dom";




export default function LoginPage(props){
        const[email, setEmail] = useState('')
        const[password, setPassword] = useState('')

        const handleSubmit = (event) =>{
            event.preventDefault()
         
            axios.post('http://localhost:3000/loginorsignup', {email,password})
            .then(result => console.log(result))
            .catch(err=>console.log(err))
            
        }

    return(
        // added the React.Fragment to allow for multiple elements without introducing an additional wrapping div.
        <div className="main-container">
            <h1>
                <br></br>


                Login
                
            </h1>
        <form onSubmit={handleSubmit}>
            <br></br>
        <div class="form-group">
            <label>
                <h6 class="text-left">Email</h6>
                <input 
                class="form-control form-control-lg"
                type="email" 
                value={email}
                onChange={(event)=>{setEmail(event.target.value)}} placeholder ="*****@gmail.com" />
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
            onChange={(event)=>{setPassword(event.target.value)}} placeholder ="******" />
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
        <Footer/>
        
		</div>

	)
}


