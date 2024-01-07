import Footer from "../components/Footer"

export default function AboutPage(props){
        return (
              <div>
                <div className="main-container">
                <h1>
                    <br></br>
                    About
                </h1>

                <div className="aboutcontainer">
                    <div className="aboutsection2">
                        <div className="col-md-5">
                            <img src={require('../components/images/mission.png')} className="img-fluid rounded float-left p-2 mt-0" alt="lifeguard watching over pool" />
                            <h5><u>Our Mission</u></h5>
                            <p>
                                At Azure Splash, we are dedicated to creating an escape for water-lovers of all ages and experience levels.
                                Our cutting-edge facilities and coupled with our amazing service enable all patrons to enjoy their time in this water haven.
                            </p>
                        </div>

                        <div className="col-md-5 mt-md-0 mt-4">
                            <img src={require('../components/images/values.png')} className="img-fluid rounded float-left p-2" alt="two hands cupping each other" />
                            <h5><u>Our Values</u></h5>
                            <p>
                                Safety:
                                We prioritize the safety of our patrons by ensuring the establishment is secure and compliant with safety standards.
                                <br></br>
                                <br></br>
                                Cleanliness:
                                We know how important to keep the waters clean and sparkling for our swimmers, as such we have an excellent debris management and filtration system.
                                <br></br>
                                <br></br>
                                Fun:
                                Last but not least, we aim to foster an environment where all patrons are able to enjoy themselves.
                            </p>
                        </div>

                        <div className="col-md-5 mt-md-0 mt-1">
                            <h5><b>Important Notice</b></h5>
                            <p>
                                We sincerely thank the community for the overwhelming support we've received. <br></br>

                                In order to ensure that all patrons are able to access the amenities, we highly recommend creating a booking prior to visiting us.

                                <br></br>
                                <br></br>
                                How to create a booking?
                                <br></br>
                                <br></br>
                                <div className="list1">
                                    <ul>
                                        <li>Call us at +61 448619343</li>
                                        <li>Create a profile, and reserve a lane via the bookings page</li>
                                        <li>Or, feel free to drop by and speak to a staff member</li>
                                    </ul>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                <Footer />
        </div>
    );
}
