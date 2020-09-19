import React  from "react";
import "../static/css/CircleButtonText.css"

export default function CircleButton({texto}) {
    return (
        <button className="circle-buttonText"><p>{texto}</p></button>
    )
}