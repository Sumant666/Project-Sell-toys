import React from 'react'
import PurpleBackground from '../Components/PurpleBackground.mp4'
import { Link } from "react-router-dom";

export default function Bestseller() {
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
              <div className="AP3img"></div>
              <div className="SP1info">
                <p>Narruto Action Figures, Anime Narruto Action Figures Set PVC Action Figures Cake Decorating Topper Items Gifts for Girls Boys (Narruto)</p>
                <p id='price'><sup id='sup'>₹</sup>759 <p id='mrp'> M.R.P: <p id='oldprice'>₹999</p></p> </p>
                <p id='free'>Free delivery</p>
              </div>
            </div>

            <div className="Pcolr">
              <div className="AP4img"></div>
              <div className="SP1info">
                <p>Naruto Shippuden Sasuke Uchiha - Action Figure - Naruto Merchandise for Anime Lovers (Size - 18 cm)(Polyvinyl Chloride, Multicolour)</p>
                <p id='price'><sup id='sup'>₹</sup>999 <p id='mrp'> M.R.P: <p id='oldprice'>₹1,099</p></p> </p>
                <p id='free'>Free delivery</p>
              </div>
            </div>
          </div>


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
              <div className="PP1img"></div>
              <div className="SP1info">
                <p>Fiddlys Kid's Wooden Jigsaw Puzzle Games for Children & Kids Paperless Puzzle - 9 Pieces (Pack of 4) Age 3+</p>
                <p id='price'><sup id='sup'>₹</sup>250 <p id='mrp'> M.R.P: <p id='oldprice'>₹499</p></p> </p>
                <p id='free'>Free delivery over ₹499</p>
              </div>
            </div>

            <div className="Pcolr">
              <div className="PP2img"></div>
              <div className="SP1info">
                <p>Frank Paris Street - 500 Pieces Jigsaw Puzzle for Kids and for Adults – Fun and Challenging Having Realistic Illustrations</p>
                <p id='price'><sup id='sup'>₹</sup>699 <p id='mrp'> M.R.P: <p id='oldprice'>₹799</p></p> </p>
                <p id='free'>Free delivery</p>
              </div>
            </div>
          </div>

        </div>

      </div>


    </>
  )
}
