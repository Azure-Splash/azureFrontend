

function Footer(props){
	return (
        <footer>
            <address>
                <div id="contact-details" >
                    <div id="address">
                        <h4>Address:</h4>
                        <h5> 111 Queens Parade</h5>
                    </div>
                    <div id="phone">
                        <h4>Phone Number:</h4>
                        <h5>+61448619343 </h5>
                    </div>
                    <div id="email">
                        <h4>Email:</h4>
                        <h5>azuresplash@gmail.com</h5>
                    </div>
                    <div>
                        <div id="social-section">
                            <h4>Social Media:</h4>
                        </div>
                        <div id="social-instagram">
                            <img src="instagramlogo.png" alt="insta"/>
                            <h5 id="instagram"> @azuresplash</h5>
                        </div>
                        <div id="social-facebook">
                            <img src="facebooklogo.png" id="facebook-logo" alt="facebook"/>
                            <h5 id="facebook"> Azure Splash</h5>
                        </div>
                    </div>
                </div>
            </address>
                
            
            
        </footer>
    )
}



export default Footer;