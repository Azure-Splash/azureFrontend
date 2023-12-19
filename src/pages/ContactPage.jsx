import contact from "../functions/contact";
import React, {useEffect, useState} from "react";

export default function ContactForm(props){
    
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[message, setMessage] = useState('')
    
    return(
        <div>
			<h3>
				Contact Us
			</h3>
        <form>
        <label>
            <p>Name</p>
            <input 
            type="name"
            value={name}
            onChange={(event)=>{setName(event.target.value)}} placeholder ="John Doe" />
        </label>
        <label>
            <p>Email</p>
            <input 
            type="email" 
            value={email}
            onChange={(event)=>{setEmail(event.target.value)}} placeholder ="*****@gmail.com" />
        </label>
        
        <label>
            <p>Phone Number </p>
            <input 
            type="phoneNumber"
            value={phoneNumber}
            onChange={(event)=>{setPhoneNumber(event.target.value)}} placeholder ="000" />
        </label>
        <label>
            <p>Message: </p>
            <input 
            type="message"
            value={message}
            onChange={(event)=>{setMessage(event.target.value)}} placeholder ="hi" />
        </label>
    
        <div>
            <button onClick={() => {contact(email, name, phoneNumber, message)}}>
                Submit
            </button>
        </div>
        </form>
    
        </div>
        )

}