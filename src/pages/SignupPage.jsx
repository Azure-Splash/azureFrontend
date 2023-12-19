import {useState} from "react";
// import {Link} from "react-router-dom";
// import axios from 'axios'
import Footer from "../components/Footer";
import {signup} from "../functions/signup";



export default function SignupPage(props){
        const[email, setEmail] = useState('')
        const[password, setPassword] = useState('')
        const[suburb, setSuburb] = useState('')
        const[firstName, setFirstName] = useState('')
        const[lastName, setLastName] = useState('')
        const[phoneNumber, setPhoneNumber] = useState('')


        // const handleSubmit = (event) =>{
        //     event.preventDefault()
         
        //     axios.post('http://localhost:3000/loginorsignup', {email,password})
        //     .then(result => console.log(result))
        //     .catch(err=>console.log(err))
            
        // }

    return(
		<div>
			<h1>
                Signup
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
            <p>suburb</p>
            <input 
            type="suburb"
            value={suburb}
            onChange={(event)=>{setSuburb(event.target.value)}} placeholder ="Melbourne" />
        </label>
        <label>
            <p>phoneNumber</p>
            <input 
            type="phoneNumber"
            value={phoneNumber}
            onChange={(event)=>{setPhoneNumber(event.target.value)}} placeholder ="000" />
        </label>
        <label>
            <p>First Name</p>
            <input 
            type="firstName"
            value={firstName}
            onChange={(event)=>{setFirstName(event.target.value)}} placeholder ="John" />
        </label>
        <label>
            <p>Last Name</p>
            <input 
            type="lastName"
            value={lastName}
            onChange={(event)=>{setLastName(event.target.value)}} placeholder ="Doe" />
        </label>
        <label>
            <p>Password</p>
            <input 
            type="password"
            value={password}
            onChange={(event)=>{setPassword(event.target.value)}} placeholder ="******" />
        </label>
    
        <div>
            <button onClick={() => {signup(email, password, suburb, firstName, lastName, phoneNumber)}}>
                Sign Up
            </button>
        </div>
        </form>
    
        <Footer/>
		</div>
	)
}
