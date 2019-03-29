import React from "react"



class AudioPlayer extends React.Component {

    constructor(props, context) {
        /* Notes / Infos
         * Pour le moment le player fonctionne avec un fichier statique : music
         * Une fois connecté à votre API, vous devrez mettre à jour la source dans le state "src" grâce à la valeur récupérée dans le props
         * Ce composant est appelé depuis le composant Footer
         * N'oubliez pas d'utiliser console.log() pour vous aider et debuguer
         */
        super(props, context)
        this.state = {
            player: null,
            src: props.audioPlayerSrc ? props.audioPlayerSrc  : null
        }
        this.play = this.play.bind(this)
        this.updateVolume = this.updateVolume.bind(this)
        this.onEnded = this.onEnded.bind(this)
        this.updateTime = this.updateTime.bind(this)

    }

    componentWillReceiveProps() {
        console.log(this.props)
        this.setState({
            player: document.querySelector('#player'),
            progressBar: document.querySelector('#progress-bar'),
            btnPlay: '►'
        }, () => {

            this.state.player.src = this.props.audioPlayerSrc
            this.play()
        })
    }

    componentDidMount() {
        this.setState({
            player: document.querySelector('#player'),
            progressBar: document.querySelector('#progress-bar'),
            btnPlay: '►'
        }, () => {

            this.state.player.src = this.state.src
            this.play()
        })
    }

    play(){
        if (this.state.player.src) {
            if (this.state.player.paused || this.state.player.ended) {
                // Change the button to a pause button
                this.setState({ btnPlay : '❚❚' })
                this.state.player.play()
            }
            else {
                // Change the button to a play button
                this.setState({ btnPlay : '►' })
                this.state.player.pause()
            }
        }
    }

    updateVolume(event) {
        this.state.player.volume = event.target.value
    }

    updateTime() {
        // const duration = this.state.player.duration
        // const currentTime = this.state.player.currentTime

        // this.state.progressBar.value = Math.ceil( (currentTime / duration) * 100 )
    }

    onEnded() {
        this.state.player.pause()
        this.state.player.load()
        this.state.player.play()
    }

    render(){

        return(
            <div>
                <audio id="player" onTimeUpdate={this.updateTime} onEnded={this.onEnded} >
                    Your browser does not support the audio format.
                </audio>
                <div id="player-controls" className="player-controls">
                    <button id='btnPlay' title='play' accessKey="P" onClick={this.play}>{this.state.btnPlay}</button>
                    <progress id='progress-bar' min='0' max='100' value='0'>0% played</progress>
                    <input onChange={this.updateVolume} type="range" min="0" max="1" step="0.01" />
                </div>
            </div>
        )
    }
}

export default AudioPlayer