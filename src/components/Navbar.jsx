import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem'


export default function Navbar(props){
	return (

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
			</NavItem>
			<img class="navimage" src="../azuresplashlogo.png" alt="azure splash logo"/>
		</Nav>

	)
}
      
        
<img class="navimage" src="../azuresplashlogo.png" alt="azure splash logo"/>
