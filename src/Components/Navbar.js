import React from 'react'
import NavBackground from '../Components/NavBackground.mp4'

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
                            <form>
                                <input id='search' type="search" placeholder="...Search for a Brand or Product" />
                                <button type="submit">&#128269;</button>
                            </form>
                        </div>
                        <div className="login-cart">
                            <a href="/">Login/</a>
                            <a href="/">Register</a>
                            <a id='carta' href="/">
                                <div id='cart'>&#x1F6D2;cart</div>
                            </a>
                        </div>
                    </div>


                    <div className="lowwernav">
                        <header>
                            <nav>
                                <div className="menu">
                                    <ul>
                                        <li id="listmenu1"><a href="/">HOME</a></li>
                                        <li id="listmenu"><a href="/">BESTSELLER</a></li>
                                        <li id="listmenu"><a href="/">SOFT TOYS</a></li>
                                        <li id="listmenu"><a href="/">LEGO's</a></li>
                                        <li id="listmenu"><a href="/">MUSICAL TOYS</a></li>
                                        <li id="listmenu"><a href="/">ABOUT US</a></li>
                                        <li id="listmenu"><a href="/">CONTACT US</a></li>
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