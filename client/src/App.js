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
    const [activeSong5, setActiveSong5] = useState(playlist[4])
    const [activeSong6, setActiveSong6] = useState(playlist[5])
    const [activeSong7, setActiveSong7] = useState(playlist[6])
   
    return (
      <div className="app">
      <div className='content'>
      
<ButtonAppBar />
       <img className='concert-img' src="./audience-868074-ece4ae4782c50d84f7112d207185f64a821bd40ed1d61e662c8ab98b0693c2fc.png" alt="concert"></img> 
       
        <BrowserRouter>
        <Route path="/signup">
            < SignUp />
          </Route>
        <Route path="/signin">
            <SignIn />
          </Route>
      <Route path ="/">
  <Player activeSong={activeSong} />
  <Player activeSong={activeSong2} />
  <Player activeSong={activeSong3} />
  <Player activeSong={activeSong4} />
  <Player activeSong={activeSong5} />
  <Player activeSong={activeSong6} />
  
  </Route>
  </BrowserRouter>
      </div>
    </div>
      
      
      
      );
      
    }
  
    export default App