import React, { Component } from "react";
import * as Tone from 'tone';
class Square extends Component {
    constructor (props){
        super(props);
        this.state = { playing : false };
        this.playSound = this.playSound.bind(this);
    };

    playSound() {
        if (this.state.playing){
            this.props.onClick(this.props.name, true);
            this.setState({playing: false});
        }
        else {
            this.props.onClick(this.props.name, false);
            this.setState({playing: true});
        }
    };

    render(){
        return(
        <div onClick={this.playSound} style={{display:'inline-block', width:"120px",height:"100px", backgroundColor:"red", marginTop:'10px',marginLeft:'30px', marginBottom:'10px'}}>
            <audio loop className="clip" id={this.props.name} src={this.props.song}/>
            <p style={{paddingLeft:'15%'}}>{this.props.id}</p>
            <p style={{paddingLeft:'35%'}}>{this.state.playing ? "ON" : "OFF"}</p>
        </div>
    );
    }
}
export default Square;