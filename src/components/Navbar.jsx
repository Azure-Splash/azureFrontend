import { NavLink } from "react-router-dom";

export default function Navbar(props){
	return (
		<nav>
			
			<ul>
				<li>
					<NavLink to="/" style={({isActive}) => isActive ? {color: "red"} : undefined} >
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/about">
						About
					</NavLink>				
				</li>
				<li>
					<NavLink to="/services" style={({isActive}) => isActive ? {color: "red"} : undefined} >
						Services
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" style={({isActive}) => isActive ? {color: "red"} : undefined} >
						Contact
					</NavLink>
				</li>
			
				<li>
					<NavLink to="/loginorsignup" style={({isActive}) => isActive ? {color: "red"} : undefined} >
						Login/Sign Up
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
      
        
    
