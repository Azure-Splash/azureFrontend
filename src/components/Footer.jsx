<<<<<<< Updated upstream


function Footer(props){
	return (
        <footer>
            <div>
                <h3>Address:</h3>
                <h3> 111 Queens Parade</h3>
            </div>
            <div>
                <h3>Phone Number:</h3>
                <h3>+61448619343 </h3>
            </div>
            <div>
                <h3>Email:</h3>
                <h3>azuresplash@gmail.com</h3>
            </div>
            <div>
            <div>
                <h3>Social Media:</h3>
            </div>
            <div>
                <img src="instagramlogo.png"/>
                <h3> @azuresplash</h3>
            </div>
            <div>
                <img src="facebooklogo.png"/>
                <h3> Azure Splash</h3>
            </div>
            </div>
                
            
            
        </footer>
    )
}



=======
import React from 'react';

const Footer = (props) => {
  return (
    <footer>
      <div className="footer-section">
        <h3>Address:</h3>
        <h3>111 Queens Parade</h3>
      </div>

      <div className="footer-section">
        <h3>Phone Number:</h3>
        <h3>+61448619343</h3>
      </div>

      <div className="footer-section">
        <h3>Email:</h3>
        <h3>azuresplash@gmail.com</h3>
      </div>

      <div className="footer-section social-media">
        <div>
          <h3>Social Media:</h3>
        </div>
        <div>
          <img className="social-image" src="instagramlogo.png" alt="Instagram" />
          <h3>@azuresplash</h3>
        </div>
        <div>
          <img className="social-image" src="facebooklogo.png" alt="Facebook" />
          <h3>Azure Splash</h3>
        </div>
      </div>
    </footer>
  );
}

>>>>>>> Stashed changes
export default Footer;