import React  from "react";
import "../static/css/DayCard.css"

export default function DayCard({dia="13",mes="Jan",semana="Mon",imagen,max="10°C",min="9°C"}) {
    return (
        <div className="days-card">
            <span className="days-card-title">{dia} {mes} {semana}</span>
            <picture className="days-card-logo">
                <img src={imagen} alt="" />
            </picture>
            <span className="days-card-max">{max}</span>
            <span className="days-card-min">{min}</span>
        </div>
    )
}
