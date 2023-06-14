import React from 'react';
import './Sign-register.css';
import { useLocation, Link } from 'react-router-dom';
const Poster = () => {
    const location = useLocation()
    return <section className="poster">
        <h1>Tuner</h1>
        <div>Enjoy Multiple videos <br></br>at one place</div>
        {location.pathname === "/register" ?
            <Link to="/signin">
                <p className='signInButton' >Sign In</p>
            </Link>
            :
            <Link to="/register">
                <p className='registerButton'>Register</p>
            </Link>
        }
    </section>

}

export default Poster
