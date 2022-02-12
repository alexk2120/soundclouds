import React from 'react'
import ReactPlayer from 'react-player'

function Player({activeSong}) {
  return (
    <div>
    <ReactPlayer
    width="75%" height="100%" style={{margin: 'auto', padding: '20px'}}

    controls={true}
    url={activeSong.link}
/>
</div>
  )
}

export default Player