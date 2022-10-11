// import video1 from "./assets/Vite + React - Google Chrome 2022-09-16 20-45-45.mp4"
import video1 from "./assets/video.mp4";
import './App.css'
// import video1 from "./assets/video.mp4";
import useVideoPlayer from "./hooks/useVideoPlayer";
// import useVideoPlayer from "./videoplay";
import  { useRef } from "react";
// import { useState } from "react";
function App() {
  const videoElement = useRef(null);

  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);


  return (
    <div className="container">
      <div className="video-wrapper">
        <video
          src={video1}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? 
                'play'
               
               : 'pause'
                
            }
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
           id="ranger"
            value={playerState.progress}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={playerState.progress} 
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? (
              'mute'
            ) : (
              'unmute'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App