import React, { Component } from 'react'

import '../../assets/css/App.css'

import Routes from '../Routes/Routes'
import SearchForm from "../SearchForm/SearchForm";

import AudioPlayer from '../AudioPlayer/AudioPlayer.js'
import Sidebar from '../sidebar/Sidebar'

class App extends Component {
  render() {
    return (
      <div className="App">

      <SearchForm/>

        <AudioPlayer/>

        <Routes />
      </div>
    )
  }
}

export default App
