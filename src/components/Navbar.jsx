import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem'
import HeaderCarousel from "./headerImages";


export default function Navbar(props){
	return (
<div>
        <Nav variant="tabs" defaultActiveKey="/home">
			<NavItem>
					<NavLink to="/" >
						Home
					</NavLink>
					<NavLink to="/about">
						About
					</NavLink>				

					<NavLink to="/services" >
						Services
					</NavLink>

					<NavLink to="/contact"  >
						Contact
					</NavLink>

					<NavLink to="/loginorsignup"  >
						Login/Sign Up
					</NavLink>

					<NavLink to="/signup"  >
						Sign Up
					</NavLink>
					<NavLink to="/booking"  >
						Bookings
					</NavLink>
			</NavItem>
			<img class="navimage" src="../azuresplashlogo.png" alt="azure splash logo"/>
		</Nav>
		<HeaderCarousel />
</div>

	)
}
      
        
<img class="navimage" src="../azuresplashlogo.png" alt="azure splash logo"/>
