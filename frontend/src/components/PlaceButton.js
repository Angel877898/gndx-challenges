import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "../static/css/PlaceButton.css"

export default function PlaceButton({city="London"}) {
    return(
        <div className="placeButton">
            <button className="placeButton-button">
                <span>{city}</span> 
                <ArrowForwardIosIcon className="icon"/>
            </button>
            
        </div>
        
    )
}