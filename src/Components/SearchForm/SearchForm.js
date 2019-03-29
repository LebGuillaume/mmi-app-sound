import React, { Component } from 'react'
import Routes from "../Routes/Routes";


class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            search:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('la recherche est ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.search} onChange={this.handleChange}/>
                    <input type="submit" value='recherche'/>

                </form>
               
            </div>
        )
    }
}
export default SearchForm