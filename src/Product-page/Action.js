import React from 'react'
import PurpleBackground from '../Components/PurpleBackground.mp4'
import { Link } from "react-router-dom";

export default function Action() {
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
                            <div className="AP1img"></div>
                            <div className="SP1info">
                                <p>Bobble Head Action Figure Limted Edition For Car Dashboard, Decoration Study/Office Table (13Cm) Pack of 01 (Spider Man)</p>
                                <p id='price'><sup id='sup'>₹</sup>479 <p id='mrp'> M.R.P: <p id='oldprice'>₹699</p></p> </p>
                                <p id='free'>Free delivery over ₹499</p>
                            </div>
                        </div>

                        <div className="Pcolr">
                            <div className="AP2img"></div>
                            <div className="SP1info">
                                <p>Demon Slayer Tanjiro Kamado Action Figure | Height 15CM | Assembly Required | (Tanjiro on White Stone)</p>
                                <p id='price'><sup id='sup'>₹</sup>1,199 <p id='mrp'> M.R.P: <p id='oldprice'>₹1,799</p></p> </p>
                                <p id='free'>Free delivery</p>
                            </div>
                        </div>
                    </div>

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
                            <div className="AP5img"></div>
                            <div className="SP1info">
                                <p>Toys for Kids,Miniature Toys,Toys for Girls & Boys, Figurines for Kids, Mini Action Figure Collectible Set of 10 Pcs (Yellow)</p>
                                <p id='price'><sup id='sup'>₹</sup>979 <p id='mrp'> M.R.P: <p id='oldprice'>₹999</p></p> </p>
                                <p id='free'>Free delivery</p>
                            </div>
                        </div>

                        <div className="Pcolr">
                            <div className="AP6img"></div>
                            <div className="SP1info">
                                <p>Dragon Ball Z - Son Goku Action Figure- Miniature Toy Figure (Doll), Office Desk & Study Table (Pack of 1) (Height- 18cm)</p>
                                <p id='price'><sup id='sup'>₹</sup>1,080 <p id='mrp'> M.R.P: <p id='oldprice'>₹1,599</p></p> </p>
                                <p id='free'>Free delivery</p>
                            </div>
                        </div>
                    </div>



                </div>

            </div>


        </>
    )
}
