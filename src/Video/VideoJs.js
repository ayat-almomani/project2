import React from "react";
import videoPlayer from "react-video-js-player"
import car from "../video1/car.mp4"
const VideoJs = () => {

      const videoSrc = car
      const poster ="https://www.youtube.com/watch?v=lVJLNsLNnWs"
    return (
        <div>


            <videoPlayer

src={videoSrc}
poster={poster}
width="720"

/>








        </div>
    )
}
export default VideoJs