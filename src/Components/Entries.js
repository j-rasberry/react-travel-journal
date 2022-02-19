import React from "react";

import locationDot from './images/location-dot.svg'

import './style/Entries.css'

export default function Entries(props){
    console.log(props.info)
    return(
        <div className="entry-wrapper">
            <div>
                <img className="entry-img" src={props.info.imageUrl} alt="palce of"/>
            </div>

            <div className="entry-info">
                <div  className="entry-info-location">
                    <img src={locationDot} alt="Location dot"/>
                    <p>{props.info.location}</p>
                    <a href={props.info.googleMapsUrl}>View On Google Maps</a>
                </div>
                <h1  className="entry-info-title">{props.info.title}</h1>
                <p  className="entry-info-date">{props.info.startDate} - {props.info.endDate}</p>
                <p className="entry-info-description">{props.info.description}</p>
           

            </div>
            <br/>
        </div>
    )

}