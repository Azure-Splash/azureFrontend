import Footer from "../components/Footer"

export default function AboutPage(props){
        return (
            <div>
                
                    <h1>

                        About
                        
                    </h1>
                    <h5>
                        Our Mission
                    </h5>
                    <p>
                        At Azure Splash, we are dedicated to creating an escape for water-lovers of all ages and experience levels.
                        Our cutting-edge facilities and coupled with our amazing service enable all patrons to enjoy their time in this water haven.
                       
                    </p>
                    <img src={require('../components/images/mission.png')} alt="lifeguard watching over pool"/>
                    <h5>
                        Our Values
                    </h5>
                        <p>
                            Safety:
                            We prioritise the safety of our patrons by ensuring the establishment is secure and compliant with safety standards.
                            
                            Cleanliness:
                            We aim to 

                            Fun:
                            Last but not least, we aim to foster an environment where all patrons are able to enjoy themselves.
                        </p>
                        <img src={require('../components/images/values.png')} alt="two hands cupping each other"/>
        
                    <h5>
                        Important Notice
                    </h5>
                        <p>
                            We sincerely thank the community for the overwhelming support we've received.

                            In order to ensure that all patrons are able to access the amenities, we highly recommend creating a booking prior to visiting us.

                            <div>
                            How to create a booking?
                            
                            <ul>Call us at +61 448619343</ul>
                            <ul>Create a profile, and reserve a lane via the bookings page</ul>
                            <ul>Or, feel free to drop by and speak to a staff member</ul>

                            </div>
                        </p>
                    <Footer/>
                <main>
                </main>    
            </div>
           
            
        )
}
    
