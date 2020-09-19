import React  from "react";
import Clear from "../static/images/Clear.png"
import Location from "../static/images/Location.png"
import CircleButton from "../components/CircleButton"
import Brujula from "../static/images/brujula.png"
import fondo from "../static/images/Cloud-background.png"
import '../static/css/Sidebar.css';

export default function SideBar() {
    return (
        <div className="side-bar">
            <section className="side-bar-header">
                <button className="button-search">Search for places</button>
                <CircleButton imagen={Brujula} />
            </section>
            <div className="imagenes">
                <img src={fondo} className="image-back"/>
                <img src={Clear} className="image-bar"/>
            </div>
            <section className="temperature">
                <p className="temperature-text">15</p>
                <p className="temperature-measure">°C</p>
            </section>
            <section className="type">
                <p>Despejado</p>
            </section>
            <section className="date">
                <p className="date-today">Today</p>
                <p className="date-date">Fri 5 June</p>
            </section>
            <section className="location">
                <img src={Location} />
                <p className="location-place">Mexico</p>
            </section>
        </div>
    )
}
