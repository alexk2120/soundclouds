import React, { useState } from 'react'
import Player from './Components/player'
import Playlist from './Components/playlist'
import playlist from './Components/playlist.data'


function App() {
    const [activeSong, setActiveSong] = useState(playlist[0])
  return (
    <div className="app">
        <Player activeSong={activeSong} />
        <Playlist setActiveSong={setActiveSong} t/>
    </div>
  )
}

export default App