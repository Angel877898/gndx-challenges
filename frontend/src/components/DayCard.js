import React  from "react";
import "../static/css/DayCard.css"

export default function DayCard({dia="13",mes="Jan",semana="Mon",imagen,max="10°C",min="9°C"}) {
    return (
        <div className="card">
            <p className="card-date">{semana}. {dia} {mes}</p>
            <img className="card-image" src={imagen}/>
            <div className="card-temp">
                <p >{max}</p>
                <p>{min}</p>
            </div>
        </div>
    )
}
