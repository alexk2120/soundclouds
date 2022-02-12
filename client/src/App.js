import React, { useState } from 'react'
import Player from './Components/player'
import playlist from './Components/playlist.data'
import { BrowserRouter, Route } from  "react-router-dom";

import ButtonAppBar from './Components/ButtonAppBar';

function App() {
    const [activeSong, setActiveSong] = useState(playlist[0])
    const [activeSong2, setActiveSong2] = useState(playlist[1])
    const [activeSong3, setActiveSong3] = useState(playlist[2])

    
    return (
      <div className="app">
      <div className='content'>
      <ButtonAppBar /> 
      
      <img className='concert-img' src="./audience-868074-ece4ae4782c50d84f7112d207185f64a821bd40ed1d61e662c8ab98b0693c2fc.png" alt="concert"></img> 
       
      {/* probably switch from router to navlink */}
        <BrowserRouter>
        <Route path="/signup">
            <h1> Sign Up </h1>
          </Route>
        <Route path="/login">
            <h1> login </h1>
          </Route>
      <Route path ="/">
  <Player activeSong={activeSong} />
  <Player activeSong={activeSong2} />
  <Player activeSong={activeSong3} />
  {/* <Playlist setActiveSong={setActiveSong} t /> */}
  </Route>
  </BrowserRouter>
      </div>
    </div>
      
  
    
    );
  
  }
export default App