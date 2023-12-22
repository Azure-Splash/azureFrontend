import contact from "../functions/contact";
import React, { useState} from "react";

export default function ContactForm(props){
    
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[message, setMessage] = useState('')
    
    return(
        <div id ="contact-page">
			<h2 id="contact-title">
				Contact Us
			</h2>
            <div id ="contact-details" >
            <div>
                <h4>Address:</h4>
                <h5> 111 Queens Parade</h5>
            </div>
            <div>
                <h4>Phone Number:</h4>
                <h5>+61448619343 </h5>
            </div>
            <div>
                <h4>Email:</h4>
                <h5>azuresplash@gmail.com</h5>
            </div>
            <div>
            <div id="social-media-section">
                <h4>Social Media:</h4>
            </div>
            <div id="social-media-instagram">
                <img src="instagramlogo.png" alt="insta"/>
                <h5 id="instagram-tag"> @azuresplash</h5>
            </div>
            <div id="social-media-facebook">
                <img src="facebooklogo.png" id="facebook-logo" alt="facebook"/>
                <h5 id="facebook-name"> Azure Splash</h5>
            </div>
            </div>

            </div>
        <div class="divider"></div>
        <div class="contact-form-section">
        <img src="mail-icon.png" alt="mail icon" class="mail-icon"/>
        <div class="contact-form-subtitle">
            
            <h2>
                
                "We'd love to hear from you! 
                <div class="d-block mb-3"></div>
                <p class="contact-form-subtitle-2">Please feel free to leave us a message."</p>
            
            </h2>
        </div>
        
        
        
        <form id="contact-form" class="custom-container rounded custom-border mx-auto">
        <div class="form-group">
            <label>
                <p class="text-left">Name:</p>
                <input class="form-control form-control-lg"
                type="name"
                value={name}
                onChange={(event)=>{setName(event.target.value)}} placeholder ="John Doe" />
            </label>
        </div>
        <div class="form-group">
            <label>
                <p class="text-left">Email:</p>
                <input  class="form-control form-control-lg"
                type="text" 
                value={email}
                onChange={(event)=>{setEmail(event.target.value)}} placeholder ="*****@gmail.com" />
            </label>
        </div>
        <div class="form-group">
            <label>
                <p class="text-left">Phone Number: </p>
                <input class="form-control form-control-lg"
                type="text"
                value={phoneNumber}
                onChange={(event)=>{setPhoneNumber(event.target.value)}} placeholder ="000" />
            </label>
        </div>
        <div class="form-group">
            <label>
                <p class="text-left">Message: </p>
                <textarea
                    className="form-control-lg form-control"
                    rows="5"
                    id="comment"
                    placeholder="Hi, please type in your query here."
                    value={message}
                    onChange={(event) => { setMessage(event.target.value) }}>

                </textarea>
            </label>
        </div>
       
        <div class="form-group">
            <button class="btn btn-info" onClick={() => {contact(email, name, phoneNumber, message)}}>
                Submit
            </button>
        </div>
        </form>
        </div>
        </div>
        )

}