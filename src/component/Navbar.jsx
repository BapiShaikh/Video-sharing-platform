import React from 'react'
import "../style/Navbar.css"
export default function Navbar(user) {
    return <>
        <section className='nav-bar'>
            <div className='brand-name'>Tuner</div>
            <div className='search-bar'>
                <form method='post' action='#'>
                    <input
                        type='text'
                        placeholder='    Search'
                    />
                </form>
            </div>
            {
                user ? <div className='user'>
                    <span className='login'>My Videos</span>
                    <span>|</span>
                    <span className='login'>Upload</span>
                    <span>|</span>
                    <span className='login'>Sign Out</span>
                </div>
                    : <div className='sign'>
                        <span className='login'>Login</span>
                        <span>|</span>
                        <span className='login'>Register</span>
                    </div>
            }

        </section>
    </>

}
