import React, { Component } from 'react'
import Routes from "../Routes/Routes";
import SearchForm from "../SearchForm/SearchForm.js";


class Sidebar extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <SearchForm setResults={this.props.setResults}/>

            </div>
        )
    }
}
export default Sidebar