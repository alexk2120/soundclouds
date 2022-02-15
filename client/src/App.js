import React, { useState } from 'react'
import Player from './Components/player'
import playlist from './Components/playlist.data'
import { BrowserRouter, Route } from  "react-router-dom";
import ButtonAppBar from './Components/ButtonAppBar';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
function App() {
    const [activeSong, setActiveSong] = useState(playlist[0])
    const [activeSong2, setActiveSong2] = useState(playlist[1])
    const [activeSong3, setActiveSong3] = useState(playlist[2])
    const [activeSong4, setActiveSong4] = useState(playlist[3])


   
    return (
      <div className="app">
      <div className='content'>
      
<ButtonAppBar />
       <img className='concert-img' src="./audience-868074-ece4ae4782c50d84f7112d207185f64a821bd40ed1d61e662c8ab98b0693c2fc.png" alt="concert"></img> 
       
        <BrowserRouter>
        <Route path="/signup">
            < SignUp />
          </Route>
        <Route path="/">
            <SignIn />
          </Route>
      <Route path ="/songs">
  <Player activeSong={activeSong} />
  <Player activeSong={activeSong2} />
  <Player activeSong={activeSong3} />
  <Player activeSong={activeSong4} />
  
  </Route>
  </BrowserRouter>
      </div>
    </div>
      
      
      
      );
      
    }
  
    export default App