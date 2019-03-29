import React, { Component } from 'react'

import '../../assets/css/App.css'

import Routes from '../Routes/Routes'
import Main from "../Main/Main";

import AudioPlayer from '../AudioPlayer/AudioPlayer.js'
import Sidebar from '../sidebar/Sidebar'

class App extends Component {
  render() {
    return (
      <div className="App">

      <Main/>

        <AudioPlayer/>

        <Routes />
      </div>
    )
  }
}

export default App
