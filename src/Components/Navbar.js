import React from 'react'
import NavBackground from '../Components/NavBackground.mp4'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>

            <div className="navC">

                <div className="overlay"></div>
                <video id='vid' src={NavBackground} autoPlay loop muted />

                <div className="logo"></div>

                <div className="navmenu">

                    <div className="uppernav">
                        <div className="search">
                            <form id='upperform'>
                                <input id='search' type="search" placeholder="...Search for a Brand or Product" />
                                <button type="submit">&#128269;</button>
                            </form>
                        </div>
                        <div className="login-cart">
                            <Link to="/Login">Login/</Link>
                            <Link to="/Register">Register</Link>
                            <Link to="/Cart" id='carta'><div id='cart'>&#x1F6D2;cart</div></Link>

                        </div>
                    </div>


                    <div className="lowwernav">
                        <header>
                            <nav>
                                <div className="menu">
                                    <ul>
                                        <li id="listmenu1"><Link to="/">HOME</Link></li>
                                        <li id="listmenu"><Link to="/Bestseller">BESTSELLER</Link></li>
                                        <li id="listmenu"><Link to="/Soft">SOFT TOYS</Link></li>
                                        <li id="listmenu"><Link to="/Lego">LEGO'S</Link></li>
                                        <li id="listmenu"><Link to="/Musical">MUSICAL TOYS</Link></li>
                                        <li id="listmenu"><Link to="/About">ABOUT US</Link></li>
                                        <li id="listmenu"><Link to="/Contact">CONTACT US</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </header>

                    </div>
                </div>
            </div>



        </>
    )
}