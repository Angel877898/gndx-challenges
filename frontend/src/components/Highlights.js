import React  from "react";
import "../static/css/Highlights.css"
import BigRectangle from "./BigRentangle";
import SmallRectangle from "./SmallRectangle";


export default function Highlights() {
    return (
        <section className="highlights">
            <div className="big">
                <BigRectangle title="Himidity" value="50%" quality="50" />
                <BigRectangle title="Wind status" value="7mph" wind="WSW"/>
            </div>
            <div className="small">
                <SmallRectangle title="Visibility" value="6,4 miles" />
                <SmallRectangle title="Air Preassure" value="998mb" />
            </div>
        </section>
    )
}