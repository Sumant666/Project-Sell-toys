import React from 'react'
import PurpleBackground from '../Components/PurpleBackground.mp4'
import { Link } from "react-router-dom";

export default function Lego() {
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
              <div className="LP1img"></div>
              <div className="SP1info">
                <p>LEGO Creator Space Shuttle 31134 Building Toy Set (144 Pieces)</p>
                <p id='price'><sup id='sup'>₹</sup>1,299 <p id='mrp'> M.R.P: <p id='oldprice'>₹1,999</p></p> </p>
                <p id='free'>Free delivery</p>
              </div>
            </div>

            <div className="Pcolr">
              <div className="LP2img"></div>
              <div className="SP1info">
                <p>LEGO Creator 3in1 Cyber Drone 31111 Building Kit (113 Pieces)</p>
                <p id='price'><sup id='sup'>₹</sup>999 <p id='mrp'> M.R.P: <p id='oldprice'>₹1,499</p></p> </p>
                <p id='free'>Free delivery</p>
              </div>
            </div>
          </div>

          <div className="Prows">
            <div className="Pcoll">
              <div className="LP3img"></div>
              <div className="SP1info">
                <p>LEGO Medium Creative Brick Box</p>
                <p id='price'><sup id='sup'>₹</sup>2,649 <p id='mrp'> M.R.P: <p id='oldprice'>₹2,999</p></p> </p>
                <p id='free'>Free delivery</p>
              </div>
            </div>

            <div className="Pcolr">
              <div className="LP4img"></div>
              <div className="SP1info">
                <p>LEGO 60253 City Great Vehicles Ice-Cream Truck Toy with Skater and Dog Figure, for Kids 5+ Year Old (200 Pieces)</p>
                <p id='price'><sup id='sup'>₹</sup>2,999 <p id='mrp'> M.R.P: <p id='oldprice'>₹3,099</p></p> </p>
                <p id='free'>Free delivery</p>
              </div>
            </div>
          </div>

          <div className="Prows">
            <div className="Pcoll">
              <div className="LP5img"></div>
              <div className="SP1info">
                <p>LEGO 41443 Friends Olivia's Electric Car Toy, Eco Education Playset for Kids 6+ Multicolor (183 Pieces)</p>
                <p id='price'><sup id='sup'>₹</sup>1,899 <p id='mrp'> M.R.P: <p id='oldprice'>₹2,499</p></p> </p>
                <p id='free'>Free delivery</p>
              </div>
            </div>

            <div className="Pcolr">
              <div className="LP6img"></div>
              <div className="SP1info">
                <p>LEGO Technic Dump Truck 42147 Building Toy Set (177 Pieces)</p>
                <p id='price'><sup id='sup'>₹</sup>1,199 <p id='mrp'> M.R.P: <p id='oldprice'>₹1,599</p></p> </p>
                <p id='free'>Free delivery</p>
              </div>
            </div>
          </div>



        </div>

      </div>


    </>
  )
}
