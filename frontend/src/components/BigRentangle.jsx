import React  from "react";


import '../static/css/BigRectangle.css'
import ProgressBar from "./ProgressBar";

export default function BigRectangle({children="Holaa",title="Heyy",value=20,quality, wind}) {
    return (
        <div className="bigRectangle">
            <p className="bigRectangle-title">{title}</p>
            <p className="bigRectangle-value">{value}</p>
            { quality
                ? 
                    <div className="bigRectangle-asset">
                        <ProgressBar bgcolor={"#00fffb"} completed={quality} />
                    </div>
                :
                    <div className="bigRectangle-asset">
                        <p className="bigRectangle-wind">{wind}</p>
                    </div>
            }
        </div>
        
    )
}

