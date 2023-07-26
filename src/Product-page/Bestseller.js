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

        </div>

      </div>


    </>
  )
}
