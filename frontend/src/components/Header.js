import React  from "react";
import "../static/css/Header.css";
import Brujula from "../static/images/brujula.png"

export default function Header(props) {
    
    return (
        <header className="search-location">
            <button className="search" onClick={props.click} >Search for places</button>
            <button className="location"><img src={Brujula} alt="location image" /></button>
        </header>
    )
}