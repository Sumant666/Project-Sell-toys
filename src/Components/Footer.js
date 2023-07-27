import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <>
            <footer class="footer-distributed">

                <div class="footer-left">

                    <div className="logo"></div>

                    <p class="footer-links">
                        <a href="#" class="link-1">Home</a>

                        <a href="#">Blog</a>

                        <a href="#">Pricing</a>

                        <a href="#">About</a>

                        <a href="#">Contact</a>
                    </p>

                    <p class="footer-company-name">Company Name © 2015</p>
                </div>

                <div class="footer-center">

                    <div>
                        <FontAwesomeIcon icon={faLocationDot} bounce />
                        <p><span>177, Manat Enclave-2</span> Zirakpur, Punjab</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faMobileScreenButton} shake />
                        <p>+91 6284949099</p>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p><a href="mailto:support@company.com">Sumantkansal90@gmail.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About the company</span>
                        This is the best place to get your kid a best memory of there childhood, kids make there some most beautiful memories with there first toys.
                    </p>

                    <div class="footer-icons">

                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-github"></i></a>

                    </div>

                </div>

            </footer>
        </>
    )
}
