import React from 'react'
import ReactPlayer from 'react-player'

function Player({activeSong}) {
  return (
    <div>
    <ReactPlayer
    width= "90%" height="90%" volume={0.5} style={{margin: 'auto', padding: '10px'}}

    controls={true}
    url={activeSong.link}
/>
</div>
  )
}

export default Player