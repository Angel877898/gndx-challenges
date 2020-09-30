import React  from "react";
import "../static/css/MainWeather.css";
import LightCloud from "../static/images/LightCloud.png"
import Background from "../static/images/Cloud-background.png"
//hacer componente la imagen a regresar

export default function MainWeather() {
    return (
        <section className="weather">
            <picture className="weather-images">
                <img className="weather-images-background" src={Background} alt="" />
                
                <img className="weather-images-logo" src={LightCloud} alt="weather image" />
            </picture>
            <div className="weather-info">
                <span className="weather-info-degrees">15 <span>°C</span> </span>
                <span className="weather-info-type">Shower</span>
                <span className="weather-info-date">Today Fri 5 Jun</span>
                <span className="weather-info-location">Mexico</span>
            </div>
        </section>
    )
}