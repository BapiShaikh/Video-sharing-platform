// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Mainvideo from './Mainvideo';
// import Navbar from './Navbar';
// import Homepage from './Homepage';
// import SignIn from './SignIn-Register/Signin';
// import Register from './SignIn-Register/Register';

// function App() {
//   const [user, setUser] = useState(true);
//   console.log(user)

//   const handleLogout = () => {
//     setUser(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar user={user} />

//         <Routes>
//           <Route path="/" element={user ? <Mainvideo /> : <Homepage />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainvideo from './Mainvideo';
import Navbar from './Navbar';
import Homepage from './Homepage';
import SignIn from './SignIn-Register/Signin';
import Register from './SignIn-Register/Register';
import Upload from './upload-search-streaming/Upload';

function App() {
  const [user, setUser] = useState(true);
  console.log(user)

  const handleLogout = () => {
    setUser(false);
    localStorage.removeItem('loginToken');
    window.location.href = "/";
    // navigate('/');

    
  };

  return (
    <Router>
      <div className="App">
        {/* <Navbar user={user} /> */}
        <Navbar user={user} logout={handleLogout} />

        <Routes>
          <Route path="/" element={user ? <Mainvideo /> : <Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path ="/Upload" element={<Upload/>}/>
          <Route path="/myvideos" element={<Homepage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;