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
                <h5> Come and visit us!</h5>
                <h5> We welcome swimmers of all levels, </h5>
                <h5> and are open from Monday - Sunday, 8 a.m - 4 p.m.</h5>
                <h5> <b>111 Queens Parade</b></h5>
                <h5><b>Carlton, 3205</b></h5>
            </div>
            <div>
                <h4>Phone Number:</h4>
                <h5>If you prefer to speak to someone over the phone,</h5>
                <h5>our team is available during business hours.</h5>
                <h5> We look forward to speaking with you! </h5>
                <h5><b>+61 448619343 </b></h5>
            </div>
            <div>
                <h4>Email:</h4>
                <h5>However, if you'd prefer not to speak to someone </h5>
                <h5>we are reachable via email.</h5>
                <h5>Please expect 1-2 business days for a response. </h5>
                <h5><b>azuresplash@gmail.com</b></h5>
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