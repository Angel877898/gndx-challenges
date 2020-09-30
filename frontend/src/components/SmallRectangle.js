import React  from "react";
import '../static/css/SmallRectangle.css'

export default function SmallRectangle({title="Heyy",value=20}) {
    return (
        <div className="small">
            <div className="highlights-card">
                <span className="highlights-card-title">{title}</span>
                <span className="highlights-card-content">{value} </span>
            </div>
        </div>
        
    )
}
