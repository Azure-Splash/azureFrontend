import {useState} from "react";
// import {Link} from "react-router-dom";
// import axios from 'axios'
import Footer from "../components/Footer";
import {signup} from "../functions/signup";



export default function SignupPage(props){
        const[email, setEmail] = useState('')
        const[password, setPassword] = useState('')
        const[reenterpassword, setReenterPassword] = useState('')
        const[suburb, setSuburb] = useState('')
        const[firstName, setFirstName] = useState('')
        const[lastName, setLastName] = useState('')
        const[phoneNumber, setPhoneNumber] = useState('')
        const[age, setAge] = useState('')


        // const handleSubmit = (event) =>{
        //     event.preventDefault()
         
        //     axios.post('http://localhost:3000/loginorsignup', {email,password})
        //     .then(result => console.log(result))
        //     .catch(err=>console.log(err))
            
        // }

    return(
		<div>
			<h1>
                Sign Up
            </h1>

        <form class="custom-container rounded custom-border mx-auto" >
        <div class="form-group">
            <label>
                <p class="text-left">Email</p>
                <input class="form-control form-control-lg"
                type="email" 
                value={email}
                onChange={(event)=>{setEmail(event.target.value)}} placeholder ="*****@gmail.com" />
            
            </label>
        </div>
        <div class="form-group">
            <label>
                <p class="text-left">Suburb</p>
                <input 
                class="form-control form-control-lg"

                type="suburb"
                value={suburb}
                onChange={(event)=>{setSuburb(event.target.value)}} placeholder ="Melbourne" />
            </label>


        </div>
        <div class="form-group">
            <label>
                <p class="text-left">Phone Number</p>
                <input 
                class="form-control form-control-lg"

                type="phoneNumber"
                value={phoneNumber}
                onChange={(event)=>{setPhoneNumber(event.target.value)}} placeholder ="000" />
            </label>

        </div>
        <div class="form-group">
            <label>
                <p class="text-left">First Name</p>
                <input 
                class="form-control form-control-lg"

                type="firstName"
                value={firstName}
                onChange={(event)=>{setFirstName(event.target.value)}} placeholder ="John" />
            </label>


        </div>
        <div class="form-group">
            <label>
                <p class="text-left">Last Name</p>
                <input
                class="form-control form-control-lg" 

                type="lastName"
                value={lastName}
                onChange={(event)=>{setLastName(event.target.value)}} placeholder ="Doe" />
            </label>


        </div>
        <label>
                <p class="text-left">Age</p>
                <input 
                class="form-control form-control-lg"
                type="age"
                value={age}
                onChange={(event)=>{setAge(event.target.value)}} />
            </label>
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
            <label>
                <p class="text-left">Re-Enter Password</p>
                <input 
                class="form-control form-control-lg"
                type="password"
                value={reenterpassword}
                onChange={(event)=>{setReenterPassword(event.target.value)}} placeholder ="******" />
            </label>
        </div>
        
        <div class="form-group">
            <button class="btn btn-info" onClick={() => {signup(email, password, suburb, firstName, lastName, phoneNumber)}}>
                Register
            </button>
        </div>
        </form>

    
        <Footer/>
		</div>
	)
}
