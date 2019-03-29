import React, { Component } from 'react'

//import logo from '../../assets/img/logo.svg'
import '../../assets/css/App.css'

import Routes from '../Routes/Routes'
import SearchForm from "../SearchForm/SearchForm";

class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchForm/>
        <Routes />
      </div>
    )
  }
}

export default App
