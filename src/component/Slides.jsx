import React from 'react'
import "../style/Slides.css"
export default function Slides({ data, index, displayMovie }) {
    const { image, name, tagLine, date, duration, views, publisherName, publisherImage } = data
    const background = {
        backgroundImage: `url(${image})`
    }
    return <div
        style={background}
        className='allslides'
        onClick={() => {
            displayMovie(index)
            console.log(index, "index")
        }}
    >
        <div className='moviesname'>
            <h3>{name}</h3>
            <h3>{tagLine}</h3>
        </div>
        <div className='moviesdetails'>
            <span>{date}</span>
            <span>{duration}</span>
            <span>{`${views} views`}</span>
        </div>
        <div className='publisher'>
            <img src={publisherImage} alt="Publisher" />
        </div>
        <div className='svg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
        </div>
    </div>

}
