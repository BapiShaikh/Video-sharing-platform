// import React from 'react'
// import "../style/Navbar.css"
// // import { Link } from 'react-router-dom'
// import SignIn from './SignIn-Register/Signin'
// export default function Navbar(user) {
//     return <>
//         <section className='nav-bar'>
//             <div className='brand-name'>Tuner</div>
//             <div className='search-bar'>
//                 <form method='post' action='#'>
//                     <input
//                         type='text'
//                         placeholder='Search'
//                     />
//                 </form>
//             </div>
//             {
//                 user ? <div className='user'>
//                     <span className='login'>My Videos</span>
//                     <span>|</span>
//                     <span className='login'>Upload</span>
//                     <span>|</span>
//                     <span className='login'>Sign Out</span>
//                 </div>
//                     : <div className='sign'>
//                         <span className='login'>Login</span>
//                         <span>|</span>
//                         <span className='login'>Register</span>
//                     </div>
//             }

//         </section>
//     </>

// }
// import { Link, useLocation } from "react-router-dom";

// import React from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import "../style/Navbar.css";

// export default function Navbar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('loginToken');
//     navigate('/');
//   };

//   const location = useLocation();
//   const isHomePage = location.pathname === '/';

//   if (!isHomePage) {
//     return null; // Don't render the navbar on pages other than the home page
//   }

//   const loginToken = localStorage.getItem("loginToken");

//   return (
//     <>
//       <section className='nav-bar'>
//         <Link to="/" className='home-link'>
//           <div className='brand-name'>Tuner</div>
//         </Link>
//         <div className='search-bar'>
//           <form method='post' action='#'>
//             <input
//               type='text'
//               placeholder='Search'
//             />
//           </form>
//         </div>
//         {loginToken ? (
//           <div className='user'>
//             <Link to="/myvideos" className='login'>My Videos</Link> 
//             <span>|</span>
//             <Link to="/upload" className='login'>Upload</Link>
//             <span>|</span>
//             <span className='login' onClick={handleLogout}>Sign Out</span>
//           </div>
//         ) : (
//           <div className='sign'>
//             <Link to="/signin" className='login'>Login</Link>
//             <span>|</span>
//             <Link to="/register" className='login'>Register</Link>
//           </div>
//         )}
//       </section>
//     </>
//   );
// }

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../style/Navbar.css";

export default function Navbar({ user, logout }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/myvideos';

  if (!isHomePage) {
    return null; // Don't render the navbar on pages other than the home page and "myvideos" page
  }

  const handleLogout = () => {
    logout();
  };

  const loginToken = localStorage.getItem("loginToken");

  return (
    <>
      <section className='nav-bar'>
        <Link to="/" className='home-link'>
          <div className='brand-name'>Tuner</div>
        </Link>
        <div className='search-bar'>
          <form method='post' action='#'>
            <input
              type='text'
              placeholder='Search'
            />
          </form>
        </div>
        {loginToken ? (
          <div className='user'>
            <Link to="/myvideos" className='login'>My Videos</Link>
            <span>|</span>
            <Link to="/upload" className='login'>Upload</Link>
            <span>|</span>
            <span className='login' onClick={handleLogout}>Sign Out</span>
          </div>
        ) : (
          <div className='sign'>
            <Link to="/signin" className='login'>Login</Link>
            <span>|</span>
            <Link to="/register" className='login'>Register</Link>
          </div>
        )}
      </section>
    </>
  );
}