import React, { Component } from 'react'
import Routes from "../Routes/Routes";
import SearchForm from "../SearchForm/SearchForm.js";


class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <SearchForm/>
            </div>
        )
    }
}
export default Sidebar