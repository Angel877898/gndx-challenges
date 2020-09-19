import React  from "react";
import "../static/css/Header.css";
import CircleButtonText from "./CircleButtonText"
import FarenW from "../static/images/farenheitW.png"
import CelsiusW from "../static/images/celsiusW.png"

export default function Header({imagen}) {
    return (
        <div className="header">
            <CircleButtonText texto="°C" />
            <CircleButtonText texto="°F" />
        </div>
    )
}