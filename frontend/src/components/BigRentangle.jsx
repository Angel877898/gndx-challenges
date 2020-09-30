import React  from "react";
import '../static/css/BigRectangle.css'
import ProgressBar from "./ProgressBar";

export default function BigRectangle({title="Heyy",value=20,quality, wind}) {
    return (
        <div className="big">
            <div className="highlights-bigCard">
                <span className="highlights-bigCard-title">{title}</span>
                <span className="highlights-bigCard-content">{value} </span>
                {quality
                    ?   
                        <div className="highlights-bigCard-bar">
                            <ProgressBar  bgcolor={"#00fffb"} completed={quality} />
                        </div>
                        
                    :
                      <span className="highlights-bigCard-footer">{wind} </span>
                }
                
            </div>
        </div>
        
    )
}

