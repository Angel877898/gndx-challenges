import React  from "react";
import ListOfCards from "../components/ListOfCards";
import Header from "../components/Header";
import Footer from "../components/Footer"
import '../static/css/Details.css';
import Hail from "../static/images/Hail.png"
import BigRectangle from "../components/BigRentangle.jsx";
export default function Details() {
    return (
        <div className="details">
            <Header/>
            <ListOfCards />
            <p className="title">Today's Hightlights</p>
            <div className="bigRectangles">
                <BigRectangle title="Wind status" value="7 mph" wind="WSW" />
                <BigRectangle title="Humidity" value="94%" quality="50" />
            </div>
            <div className="bigRectangles">
                <BigRectangle title="Visibility" value="64 miles"  />
                <BigRectangle title="Air Pressure" value="998 mb"  />
            </div>
            <Footer/>
        </div>
    )
}
