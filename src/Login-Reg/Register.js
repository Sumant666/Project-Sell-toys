import React from 'react'
import '../App.css';
import PurpleBackground from '../Components/PurpleBackground.mp4'


export default function Register() {
    return (
        <>

            <div className="titlebody">

                <div className="overlay2"></div>
                <video id='vid2' src={PurpleBackground} autoPlay loop muted />


                <div className="form">

                    <div className="register">
                        <h2>Register Here</h2>
                        <form id="register" method="post">
                            <label>First Name :</label>
                            <br />
                            <input type="text" name="fname" id="name"
                                placeholder="Enter Your First Name" />
                            <br /><br />
                            <label>Last Name : </label>
                            <br />
                            <input type="text" name="lname" id="name"
                                placeholder="Enter Your Last Name" />
                            <br /><br />
                            <label>Your Age :</label>
                            <br />
                            <input type="number" name="age" id="name"
                                placeholder="How Old are You ?" />
                            <br /><br />
                            <label>Email :</label>
                            <br /><input type="email" name="email" id="email"
                                placeholder="Enter Your Valid Email" />
                            <br /><br />
                            <label>Gender :</label>
                            <br />
                            &nbsp;&nbsp;&nbsp;
                            <input type="radio" name="gender" id="male" />
                            &nbsp;
                            <span id="male">Male</span>
                            &nbsp;&nbsp;&nbsp;
                            <input type="radio" name="gender" id="female" />
                            &nbsp;
                            <span id="female">Female</span>
                            <br /><br />
                            <label>Known Language :</label>
                            <br />
                            &nbsp;&nbsp;&nbsp;
                            <input type="checkbox" name="lang" id="hindi" />
                            &nbsp;
                            <span id="hindi">Hindi</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="checkbox" name="lang" id="eng" />
                            &nbsp;
                            <span id="eng">English</span>
                            <br /><br />
                            <input type="submit" value="Register" name="submit"
                                id="submit" />
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}
