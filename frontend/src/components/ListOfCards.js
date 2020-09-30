import React  from "react";
import "../static/css/ListOfCards.css"
import Thunderstorm from "../static/images/Thunderstorm.png"
import Snow from "../static/images/Snow.png"
import Sleet from '../static/images/Sleet.png';
import Shower from "../static/images/Shower.png"
import LightRain from "../static/images/LightRain.png"
import LightCloud from "../static/images/LightCloud.png"
import HeavyRain from "../static/images/HeavyRain.png"
import HeavyCloud from "../static/images/HeavyCloud.png"
import Hail from "../static/images/Hail.png"
import Clear from "../static/images/Clear.png"
import DayCard from "./DayCard"

export default function ListOfCards() {
    return (
        <section className="days">
            <DayCard imagen={Snow} />
            <DayCard imagen={Sleet} />
            <DayCard imagen={LightRain} />
            <DayCard imagen={LightCloud} />
            <DayCard imagen={Clear} />
            
        </section>
    )
}