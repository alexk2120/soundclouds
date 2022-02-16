import React from 'react'
import ReactPlayer from 'react-player'

function Player({activeSong}) {
  return (
    <div>
    <ReactPlayer
    width= "100%" height="100%" volume={0.4} style={{margin: 'auto', padding: '20px'}}

    controls={true}
    url={activeSong.link}
/>
</div>
  )
}

export default Player