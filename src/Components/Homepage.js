import React from 'react'
import { Zoom } from 'react-reveal'
import Fade from 'react-reveal/Fade';


export default function Homepage() {
    return (
        <>

            <div className="container">

                <Zoom top duration='1500'>
                    <div className="toys1">

                        <div className="productbutton">
                            <h1>SOFT TOYS</h1>

                            <button>VIEW PRODUCTS</button>
                        </div>

                    </div>
                </Zoom>


                <Fade bottom duration='1000'>
                    <div className="toys2">
                        <div className="productbutton">
                            <h1>LEGO'S</h1>

                            <button id="Lbtn">VIEW PRODUCTS</button>
                        </div>
                    </div>
                </Fade>


                <Fade bottom duration='1000'>
                    <div className="toys3">
                        <div className="productbutton">
                            <h1>ACTION FIGURES</h1>

                            <button id='Abtn'>VIEW PRODUCTS</button>
                        </div>
                    </div>
                </Fade>


                <Fade bottom duration='1000'>
                    <div className="toys4">
                        <div className="productbutton">
                            <h1 id='Bh'>BOARD GAMES</h1>

                            <button id='Bbtn'>VIEW PRODUCTS</button>
                        </div>
                    </div>
                </Fade>


                <Fade bottom duration='1000'>
                    <div className="toys5">
                        <div className="productbutton">
                            <h1 id='Mh'>MUSICAL TOYS</h1>

                            <button id='Mbtn'>VIEW PRODUCTS</button>
                        </div>
                    </div>
                </Fade>


                <Fade bottom duration='1300'>
                    <div className="toys6">
                        <div className="productbutton">
                            <h1>PUZZLE'S</h1>

                            <button id='Pbtn'>VIEW PRODUCTS</button>
                        </div>
                    </div>
                </Fade>

            </div>

        </>
    )
}
