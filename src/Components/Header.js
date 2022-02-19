import React from "react";

import world from './images/world.svg'
import './style/Header.css'


export default function Header(){
    return(
        <header>
            <img className="header-logo-image" src={world} alt=""/>
            <h1 className="header-logo-text">Travel Journal</h1>

        </header>
    )

}