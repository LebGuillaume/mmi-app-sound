import React, { Component } from 'react'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
class Footer extends Component {
    constructor(props){
        super(props);


    }

    render() {
        console.log(this.props.audioPlayerSrc)
        return (
            <div className="footer">

               <AudioPlayer audioPlayerSrc={this.props.audioPlayerSrc}/>
            </div>
        )
    }
}

export default Footer