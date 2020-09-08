import React, { useRef, useState } from "react";
import "./Video.css";
import Video1 from "./Video/1min Video.mp4";
import VideoFooter from "./VideoFooter";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if(playing){
        videoRef.current.pause();
        setPlaying(false);
    }else{
        videoRef.current.play();
        setPlaying(true);
    }

    //if video is playing
    //stop it..
    //otherwise if its not playing
    //play it...
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src={Video1}
        controls
      />

      <VideoFooter />
      {/* VideoFooter */}
      {/* VideoSidebar */}
    </div>
  );
}

export default Video;
