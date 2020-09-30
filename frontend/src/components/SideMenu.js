import React, { useState } from 'react'
import InputSearch from './InputSearch'
import CloseIcon from '@material-ui/icons/Close';
import "../static/css/SideMenu.css"
import PlaceButton from './placeButton';

export default function SideMenu(props) {
    const [sideMenu, setSideMenu] =useState(props.sidemenu)

    const closeHandler= (e) =>{
        e.preventDefault()
        setSideMenu("sideMenu close")
        props.close()
    }

    return(
        <div className="sideMenu">
            <div className="closeDiv">
                <CloseIcon onClick={closeHandler} color="primary" fontSize="large" className="closeIcon" />
            </div>
            <InputSearch/>
            <div className="listPlaces">
                <PlaceButton />
                <PlaceButton />
                <PlaceButton />
                <PlaceButton />
                <PlaceButton />
                <PlaceButton />
                <PlaceButton />
                
            </div>
            
        </div>
    )
}