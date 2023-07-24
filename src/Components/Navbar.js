import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className="searchContainer">

                <div className="search">
                    <form>
                        <input id='search' type="search" placeholder="Search for a Brand or Product" />
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

            <header>
                <nav>
                    <div className="menu">
                        <ul>
                            <li id="listmenu"><a href="/">HOME</a></li>
                            <li id="listmenu"><a href="/">BESTSELLER</a></li>
                            <li id="listmenu"><a href="/">NEW ARRIVALS</a></li>
                            <li id="listmenu"><a href="/">SOFT TOYS</a></li>
                            <li id="listmenu"><a href="/">MUSICAL TOYS</a></li>
                            <li id="listmenu"><a href="/">BOARD GAMES</a></li>
                            <li id="listmenu"><a href="/">ACTION FIGURES</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}