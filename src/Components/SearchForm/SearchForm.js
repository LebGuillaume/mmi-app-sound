import React, { Component } from 'react'
import Routes from "../Routes/Routes";


class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            search:'',
            results:null
        }


    }

    handleChange=(event)=> {
        this.setState({search: event.target.value});
    }
   url =()=>{
       let url=''
       if(this.state.search  !== ''){
           url='https://mmi-sound-app-leaschwalm.c9users.io/wp-json/wp/v2/sound/?search='+this.state.search
           return url
       }
       else{
           url='https://mmi-sound-app-leaschwalm.c9users.io/wp-json/wp/v2/sound/'
           return url
       }
   }
    handleSubmit=(e)=>{
        e.preventDefault()
        const that = this

            console.log(this.url())
        fetch(this.url())
            .then((response)=>{
                return response.json()

            })

            .then((results)=>{

                that.setState({results:results})
                that.props.setResults( {results:results})


                //that.props.setResults(that.state.data)

            })
            .catch((error)=>{
                console.log(error.message)
            })
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

//Questions : UTF 8 ? Taille de la thumbnail ? 