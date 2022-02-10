import React from 'react'
import playlist from './playlist.data'

function Playlist({setActiveSong}) {
  return (
    <div style={{display: 'flex', width: '80%', margin: 'auto', justifyContent: 'space-between'}}>
        {playlist.map(song => <button onClick={() => setActiveSong(song)}>{song.name}</button>)}
    </div>
  )
}

export default Playlist