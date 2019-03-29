import React, { Component } from 'react'

import '../../assets/css/App.css'

import Routes from '../Routes/Routes'

class AudioPlayer extends Component {
  render() {
    return (
      <div className="App">
        AudioPlayer
        <audio id="player">
            Your browser does not support the audio format
        </audio>
        <div id="player-controls" className="player-controls">
            <button id="btnPlay" title="play" accessKey="P" onClick="">Play</button>
        </div>
      </div>
    )
  }
}

export default AudioPlayer