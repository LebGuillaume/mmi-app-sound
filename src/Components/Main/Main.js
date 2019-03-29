import React, { Component } from 'react'

import '../../assets/css/App.css'

import Routes from '../Routes/Routes'
import Sidebar from "../sidebar/Sidebar.js";

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      data:null,
      results:null
    }


  }
  listSounds= () =>{

    return this.state.results.results.map((sound, index)=>{
      console.log(sound)
      return(
          <>
            <h3>
              {sound.title.rendered}
            </h3>
            <img src={sound.featured_image_src} alt=""/>
            <hr/>
          </>
      )
    })
  }
  setResults =(results)=>{
    this.setState({results:results})

  }


  render() {

    return (
      <div className="Main">
        <Sidebar setResults={this.setResults}/>

        {this.state.results ? this.listSounds():'cherchez vos titre préférez ...'}
      </div>
    )
  }
}

export default Main
