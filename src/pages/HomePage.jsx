import Footer from "../components/Footer";


export default function HomePage(props){
	return(
		<div>
			<h1>

                Azure Splash
                
            </h1>
			<p>
				Get ready to immerse yourself into a world of  Whether you're in search of a leisurely dip to unwind or seeking a more invigorating aquatic workout, our pools cater to all levels of experience and preferences.
			</p>
			<p>
				Simply create an account with us, log in and reserve a lane slot to begin your experience.
			</p>
			<div>
				<h3>
					Coming soon:
				</h3>
				<img src={require('../components/images/sauna.jpg')} alt="sauna"/>
				<p> We are opening up a sauna in March 2024, adjacent to the indoor swimming pool. This is the perfect opportunity to release any tension, and improve cardiovascular health.</p>
			</div>
			<main>
				
			</main>
			<Footer/>
		</div>
	)
}