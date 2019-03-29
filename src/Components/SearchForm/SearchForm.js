import React, { Component } from 'react'
import Routes from "../Routes/Routes";


class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            search:'',
            data:null
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
    handleSubmit= (e)=>{
        e.preventDefault()
        const that = this
        fetch(this.url())
            .then((response)=>{
                return response.json()

            })
            .then((results)=>{
                that.setState({data:results})
            })
            .catch((error)=>{
                console.log(error.message)
            })
    }
    listSounds= () =>{

        return this.state.data.map((sound, index)=>{
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

    render() {
                        console.log(this.state)
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.search} onChange={this.handleChange}/>
                    <input type="submit" value='recherche'/>

                </form>
                {this.state.data ? this.listSounds():'chargement ...'}
               
            </div>
        )
    }
}
export default SearchForm