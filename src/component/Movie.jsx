import React from 'react'
import "../style/Movie.css"

export default function Movie({ movie }) {
    console.log(movie, "Movie")
    const background = {
        backgroundImage: `url(${movie.image})`
    }
    return <div className='moviedisplay'>
        <div className='poster' style={background} ></div>
        <section className='details'>
            <div>
                <h1>{movie.name}</h1>
                <h1>{movie.tagLine}</h1>
            </div>

            <div className='detailsmore'>
                <h3>{movie.date}</h3>
                <h3>{movie.duration}</h3>
                <h3>{movie.views}</h3>
            </div>

        </section>
        <hr className='hr'></hr>
        <div className='description'>
            <h5>Description</h5>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, soluta. Sit quasi temporibus vitae? Dignissimos est placeat atque,  quisquam ut ipsa eos fuga voluptate soluta. Perspiciatis exercitationem similique adipisci?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates incidunt similique dolorem explicabo asperiores obcaecati temporibus officia, dolorum atque fuga quae minima quis voluptas facere hic qui. Atque, autem ut!
            </p>
        </div>
        <hr className='hr'></hr>
        <div className='types1'>
            <span>Category</span>
            <span>Visibility</span>
            <span>Other</span>
        </div>
        <div className='types2'>
            <span>Category</span>
            <span>Public</span>
            <span>Other</span>
        </div>
        <hr className='hr'></hr>
        <div>
            <button className='delete'>Delete</button>
            <button className='save'>Save</button>
        </div>

    </div>
}
