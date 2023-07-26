import React from 'react'
import PurpleBackground from '../Components/PurpleBackground.mp4'
import { Link } from "react-router-dom";

export default function Puzzle() {
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

                    <div className="Prows">
                        <div className="Pcoll">
                            <div className="PP3img"></div>
                            <div className="SP1info">
                                <p>Frank - 10203 In Water Puzzle For 3 Year Old Kids And Above</p>
                                <p id='price'><sup id='sup'>₹</sup>199 <p id='mrp'> M.R.P: <p id='oldprice'>₹399</p></p> </p>
                                <p id='free'>Free delivery over ₹499</p>
                            </div>
                        </div>

                        <div className="Pcolr">
                            <div className="PP4img"></div>
                            <div className="SP1info">
                                <p>Ratna's 4 in 1 Indian Seasons Jigsaw Puzzle for Kids - Set of 4 | 35-Piece Puzzles | Puzzle Guide Included | Ages 3 and Up</p>
                                <p id='price'><sup id='sup'>₹</sup>299 <p id='mrp'> M.R.P: <p id='oldprice'>₹399</p></p> </p>
                                <p id='free'>Free delivery over ₹499</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
