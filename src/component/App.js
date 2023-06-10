import { useState } from 'react';
import '../style/App.css'
import Mainvideo from './Mainvideo';
import Navbar from './Navbar';
import Homepage from './Homepage';
import { DataProvider } from '../context/Datacontext';

function App() {

  return <div className="App">
    <DataProvider>
      <Navbar user={user} />
      {
        myvideos ? <Mainvideo /> : <Homepage />
      }
    </DataProvider>

  </div>
}

export default App;
