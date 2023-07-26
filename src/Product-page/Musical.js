import React from 'react'
import PurpleBackground from '../Components/PurpleBackground.mp4'
import { Link } from "react-router-dom";

export default function Musical() {
  return (
    <>


      <div className="Pcontainer">

        <div className="overlay2"></div>
        <video id='vid2' src={PurpleBackground} autoPlay loop muted />

        <div className="Pbody">
          <p id="result1">Result:</p>
          <p id='result'>Price and other details may vary based on product size and type.</p>

          <div className="Prows">
            <div className="Pcoll">
              <div className="MP1img"></div>
              <div className="SP1info">
                <p>Storio Toys Dancing Cactus Talking Toy, Cactus Plush Toy, Wriggle & Singing Recording, Home Decorate</p>
                <p id='price'><sup id='sup'>₹</sup>399 <p id='mrp'> M.R.P: <p id='oldprice'>₹699</p></p> </p>
                <p id='free'>Free delivery over ₹499</p>
              </div>
            </div>

            <div className="Pcolr">
              <div className="MP2img"></div>
              <div className="SP1info">
                <p>Cable World Drum Keyboard Musical Toys with Flashing Lights - Animal Sounds and Songs,Multi Color(Pack of 1)</p>
                <p id='price'><sup id='sup'>₹</sup>699 <p id='mrp'> M.R.P: <p id='oldprice'>₹799</p></p> </p>
                <p id='free'>Free delivery</p>
              </div>
            </div>
          </div>

          <div className="Prows">
            <div className="Pcoll">
              <div className="MP3img"></div>
              <div className="SP1info">
                <p>Toyshine 2 in 1 Baby Piano Xylophone Toy for Toddlers 1-3 Years Old, 8 Multicolored Key Keyboard Xylophone Piano</p>
                <p id='price'><sup id='sup'>₹</sup>779 <p id='mrp'> M.R.P: <p id='oldprice'>₹999</p></p> </p>
                <p id='free'>Free delivery</p>
              </div>
            </div>

            <div className="Pcolr">
              <div className="MP4img"></div>
              <div className="SP1info">
                <p>Kidology Crawling Crab Baby Musical Kids Toy with LED Lights & Rechargeable Battery |  Tummy Time Dancing Toys</p>
                <p id='price'><sup id='sup'>₹</sup>999 <p id='mrp'> M.R.P: <p id='oldprice'>₹1,099</p></p> </p>
                <p id='free'>Free delivery</p>
              </div>
            </div>
          </div>

          <div className="Prows">
            <div className="Pcoll">
              <div className="MP5img"></div>
              <div className="SP1info">
                <p>NHR Musical Flash Drum Toys for Kids 3D Flash Drums Toys for Kids with Lights & Musical, Good Quality Plastic (4+ Years, Multicolor)</p>
                <p id='price'><sup id='sup'>₹</sup>349 <p id='mrp'> M.R.P: <p id='oldprice'>₹499</p></p> </p>
                <p id='free'>Free delivery over ₹499</p>
              </div>
            </div>

            <div className="Pcolr">
              <div className="MP6img"></div>
              <div className="SP1info">
                <p>Webby Colorful 8 Different Tones Hand Knock Xylophone with 2 Wooden Mallets</p>
                <p id='price'><sup id='sup'>₹</sup>299 <p id='mrp'> M.R.P: <p id='oldprice'>₹599</p></p> </p>
                <p id='free'>Free delivery over ₹499</p>
              </div>
            </div>
          </div>



        </div>

      </div>

    </>
  )
}
