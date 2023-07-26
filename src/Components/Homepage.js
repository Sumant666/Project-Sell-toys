import React from 'react'
import Fade from 'react-reveal/Fade';
import PurpleBackground from '../Components/PurpleBackground.mp4'
import { Link } from "react-router-dom";


export default function Homepage() {
    return (
        <>

            <div className="container">



                <div className="titlebody">

                    <div className="overlay2"></div>
                    <video id='vid2' src={PurpleBackground} autoPlay loop muted />

                    <h1 id='H1'>METALLICA</h1>


                    <Fade bottom duration='1500'>
                        <h1 id='H2'>YOUR FAVOURITE TOY DESTINATION</h1>
                        <p id='arrow'>&#8681;</p>
                    </Fade>

                </div>



                <Fade bottom duration='1000'>
                    <div className="toys1">

                        <div className="productbutton">
                            <h1>SOFT TOYS</h1>

                            
                            <button><Link to="/Soft">VIEW PRODUCT</Link></button>
                        </div>

                    </div>
                </Fade>


                <Fade bottom duration='1000'>
                    <div className="toys2">
                        <div className="productbutton">
                            <h1>LEGO'S</h1>

                            <button id="Lbtn"><Link to="/Lego">VIEW PRODUCT</Link></button>
                        </div>
                    </div>
                </Fade>


                <Fade bottom duration='1000'>
                    <div className="toys3">
                        <div className="productbutton">
                            <h1>ACTION FIGURES</h1>

                            <button id='Abtn'><Link to="/Action">VIEW PRODUCT</Link></button>
                        </div>
                    </div>
                </Fade>


                <Fade bottom duration='1000'>
                    <div className="toys5">
                        <div className="productbutton">
                            <h1 id='Mh'>MUSICAL TOYS</h1>

                            <button id='Mbtn'><Link to="/Musical">VIEW PRODUCT</Link></button>
                        </div>
                    </div>
                </Fade>


                <Fade bottom duration='1000'>
                    <div className="toys6">
                        <div className="productbutton">
                            <h1>PUZZLE'S</h1>

                            <button id='Pbtn'><Link to="/Puzzle">VIEW PRODUCT</Link></button>
                        </div>
                    </div>
                </Fade>

            </div>

        </>
    )
}
