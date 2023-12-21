import {useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios'
import Footer from "../components/Footer";
import {login} from "../functions/login";



export default function LoginSignupPage(props){
        const[email, setEmail] = useState('')
        const[password, setPassword] = useState('')

        // const handleSubmit = (event) =>{
        //     event.preventDefault()
         
        //     axios.post('http://localhost:3000/loginorsignup', {email,password})
        //     .then(result => console.log(result))
        //     .catch(err=>console.log(err))
            
        // }

    return(
		<div>
			<h1>

                Login
                
            </h1>
        <form>
        <label>
            <p>Email</p>
            <input 
            type="email" 
            value={email}
            onChange={(event)=>{setEmail(event.target.value)}} placeholder ="*****@gmail.com" />
        </label>
        <label>
            <p>Password</p>
            <input 
            type="password"
            value={password}
            onChange={(event)=>{setPassword(event.target.value)}} placeholder ="******" />
        </label>
        <div>
            <button onClick={() => {login(email, password)}}>
                Login
            </button>
        </div>
        </form>
        <div>
            <h2>
                OR
            </h2>
        </div>
        <div>
        <h1>
                
                Sign Up

        </h1>  
        </div>
        
        <form>
        <label>
            <p>First Name</p>
            <input type="text" />
        <label>
            <p>Last Name</p>
            <input type="text" />
        </label>
        </label>
        <label>
            <p>Email</p>
            <input type="email" />
        </label>
        <label>
            <p>Phone Number</p>
            <input type="number"/>
        </label>
        <label>
            <p>Password</p>
            <input type="password" />
        </label>
        <label>
            <p>Re-Enter Password</p>
            <input type="password" />
        </label>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
        <Footer/>
		</div>
	)
}
