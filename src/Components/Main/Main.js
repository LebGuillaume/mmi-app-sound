import React, { Component } from 'react'

import '../../assets/css/App.css'

import Routes from '../Routes/Routes'
import Sidebar from "../sidebar/Sidebar.js";

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      data:null
    }


  }
  setResults(results){

  }


  render() {
    return (
      <div className="main">
        <Sidebar/>
      </div>
    )
  }
}

export default Main
