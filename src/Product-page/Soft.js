import React from 'react'
import PurpleBackground from '../Components/PurpleBackground.mp4'
import { Link } from "react-router-dom";

export default function Soft() {
  return (
    <>

      <div className="Pcontainer">

        <div className="overlay2"></div>
        <video id='vid2' src={PurpleBackground} autoPlay loop muted />

        <div className="Pbody">
          <p id="result1">Result:</p>
          <p id='result'>Price and other details may vary based on product size and colour.</p>

          <div className="Prows">
            <div className="Pcoll">
              <div className="SP1img"></div>
              <div className="SP1info">
                <p>Babique Elephant Sitting Plush Soft Toy Cute Kids Animal Home Decor Boys/Girls (Blue, 30 cm)</p>
                <p id='price'><sup id='sup'>₹</sup>339 <p id='mrp'> M.R.P: <p id='oldprice'>₹499</p></p> </p>
                <p id='free'>Free delivery over ₹499</p>
              </div>
            </div>

            <div className="Pcolr">
              <div className="SP2img"></div>
              <div className="SP1info">
                <p>HUG 'n' FEEL SOFT TOYS Among us toy, Soft toy, Boys/Girls, gift items, (18 cm, Sea Green & Blue)</p>
                <p id='price'><sup id='sup'>₹</sup>289 <p id='mrp'> M.R.P: <p id='oldprice'>₹699</p></p> </p>
                <p id='free'>Free delivery over ₹499</p>
              </div>
            </div>
          </div>

          <div className="Prows">
            <div className="Pcoll">
              <div className="SP3img"></div>
              <div className="SP1info">
                <p>Blue Aura Demon Slayer Nezuko Plush Toy Height 18.5CM to 19CM Collectible Anime Demon Slayer Plushie (Nezuko Plush)</p>
                <p id='price'><sup id='sup'>₹</sup>499 <p id='mrp'> M.R.P: <p id='oldprice'>₹699</p></p> </p>
                <p id='free'>Free delivery</p>
              </div>
            </div>

            <div className="Pcolr">
              <div className="SP4img"></div>
              <div className="SP1info">
                <p>HUG 'n' FEEL SOFT TOYS Shinchan Soft Toys, Baby Toys,  Soft Toy, Soft Toy for Girls, Soft Toys for Baby Girl, Gift Items, (32 cm)</p>
                <p id='price'><sup id='sup'>₹</sup>468 <p id='mrp'> M.R.P: <p id='oldprice'>₹999</p></p> </p>
                <p id='free'>Free delivery over ₹499</p>
              </div>
            </div>
          </div>

          <div className="Prows">
            <div className="Pcoll">
              <div className="SP5img"></div>
              <div className="SP1info">
                <p>Blue Aura Demon Slayer Zenitsu Plush Toy Height 18.5CM to 19CM Collectible Anime Demon Slayer Plushie (Zenitsu Plush)</p>
                <p id='price'><sup id='sup'>₹</sup>489 <p id='mrp'> M.R.P: <p id='oldprice'>₹1,299</p></p> </p>
                <p id='free'>Free delivery over ₹499</p>
              </div>
            </div>

            <div className="Pcolr">
              <div className="SP6img"></div>
              <div className="SP1info">
                <p>Babique Octopus Sitting Plush Soft Toy Cute Kids Animal Home Decor Boys/Girls (17 Cm)</p>
                <p id='price'><sup id='sup'>₹</sup>179 <p id='mrp'> M.R.P: <p id='oldprice'>₹799</p></p> </p>
                <p id='free'>Free delivery over ₹499</p>
              </div>
            </div>
          </div>



        </div>

      </div>


    </>
  )
}