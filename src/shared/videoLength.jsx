import React from 'react'
import momemt from "moment";
// import Moment from 'react-moment'

const VideoLength=({time})=> {
    const videoLengthInSeconds = momemt()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");

  return (
    <div className='absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md' >{videoLengthInSeconds}</div>
  )
}

export default VideoLength