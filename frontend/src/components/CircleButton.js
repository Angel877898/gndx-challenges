import React  from "react";
import "../static/css/CircleButton.css"

export default function CircleButton({imagen}) {
    return (
        <button className="circle-button"><img src={imagen}/></button>
    )
}