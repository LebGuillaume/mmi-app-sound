import React, { Component } from 'react'

import '../../assets/css/App.css'

import Routes from '../Routes/Routes'
import Main from "../Main/Main";
import Footer from "../Footer/Footer"

import AudioPlayer from '../AudioPlayer/AudioPlayer.js'
import Sidebar from '../sidebar/Sidebar'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      audioPlayerSrc:null
    }


  }

setAudioPlayerSrc =(newSrc)=>{
    this.setState({audioPlayerSrc:newSrc})
}
  
  render() {
    console.log(this.state.audioPlayerSrc+"appppp")
    return (
      <div className="App">

      <Main setAudioPlayerSrc={this.setAudioPlayerSrc}/>

        <Footer className='footer' audioPlayerSrc={this.state.audioPlayerSrc}/>

        <Routes />
      </div>
    )
  }
}

export default App
