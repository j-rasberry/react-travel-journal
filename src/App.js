import React from "react";


import journalInfo from "./data"

import Header from "./Components/Header"
import Entries from "./Components/Entries"
import Footer from "./Components/Footer"

import "./Components/style/Global.css"

let key = 0;
export default function App(){

    const EntriesList = journalInfo.map(function(item){

        
        return(
            <Entries key={key += 1}info={item}/>

        )
    })

    return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"></link>
        <Header/>
       
        {EntriesList}
   
        </>
    )
}

