import Footer from "../components/Footer";


export default function HomePage(props){
	return(
		<div>
			<div className="main-container">
				<h1>
					<br></br>
					Azure Splash
					
				</h1>
				<br></br>
				<div class="homedescription">
				<p>
					Get ready to immerse yourself into a world of  Whether you're in search of a leisurely dip to unwind or seeking a more invigorating aquatic workout, our pools cater to all levels of experience and preferences.
				</p>
				<p>
					Simply create an account with us, log in and reserve a lane slot to begin your experience.
				</p>
				</div>
				<br></br>
				<br></br>
				<h3 class="comingsoontext">

						Coming soon:
				</h3>
				<br></br>
				<div class = "aboutsection2">
			
					<div class="col-md-6">
					<img src={require('../components/images/sauna.jpg')} class="saunaimg img-fluid " alt="sauna"/>
					</div>
					
					<div>
					<p class ="comingsoondescription"> We are opening up a sauna in March 2024, adjacent to the indoor swimming pool. This is the perfect opportunity to release any tension, and improve cardiovascular health.</p>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	)
}