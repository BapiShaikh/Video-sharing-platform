import React from "react"
import { useState} from "react";
import "./Search.css"
import Navbar from "../Navbar"
import Slides from "../Slides"


const Search = ()=>{
    const [videos, setVideos] = useState([]);

    return <>
        <Navbar/>
        <div id="container">
            {videos.map((data)=>{
                return <Slides/>
            })}
        </div>
    </>
}
export default Search