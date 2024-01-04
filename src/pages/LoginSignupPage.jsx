import {useState} from "react";
// import {Link} from "react-router-dom";
import axios from 'axios'
 import Footer from "../components/Footer";
import {login} from "../functions/login";




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


                Login
                
            </h1>
        <form onSubmit={handleSubmit}>
        <div class="form-group">
            <label>
                <p class="text-left">Email</p>
                <input 
                class="form-control form-control-lg"
                type="email" 
                value={email}
                onChange={(event)=>{setEmail(event.target.value)}} placeholder ="*****@gmail.com" />
            </label>
        </div>
        <div class="form-group">
        <label>
            <p class="text-left">Password</p>
            <input
            class="form-control form-control-lg"
            type="password"
            value={password}
            onChange={(event)=>{setPassword(event.target.value)}} placeholder ="******" />
        </label>
        </div>
        <div class="form-group">
            <button class="btn btn-info"onClick={() => {login(email, password)}}>
                Login
            </button>
        </div>
        </form>
        <Footer/>
        
		</div>

	)
}


