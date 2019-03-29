import React, { Component } from 'react'

import '../../assets/css/App.css'

import Routes from '../Routes/Routes'

import AudioPlayer from '../AudioPlayer/AudioPlayer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AudioPlayer/>
        <Routes />
      </div>
    )
  }
}

export default App
