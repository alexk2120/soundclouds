import React, { useState } from 'react'
import Player from './Components/player'
import Playlist from './Components/playlist'
import playlist from './Components/playlist.data'
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from  "react-router-dom";


function App() {
    const [activeSong, setActiveSong] = useState(playlist[0])


  
  return (
    <><div className="app">
      <Player activeSong={activeSong} />
      <Playlist setActiveSong={setActiveSong} t />
    </div><div>
        <BrowserRouter>
          
        </BrowserRouter>

      </div></>
  
    
    );
  
  }
export default App