import React, { Component } from "react";
import Square from './Square';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function NestedGrid() {
    const classes = useStyles();
  
    function FormRow() {
        return (
        <React.Fragment>
            <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
            </Grid>
        </React.Fragment>
        );
    }
    return(
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

const songs = [
    {
        "key": "Q",
        "song": "funk-beat",
        "url": "https://docs.google.com/uc?export=download&id=1CCU9yBgY_eHLcTLsx8zS49FCqc0GnopS"
        
    },
    {
        "key": "W",
        "song": "Stompy-slosh",
        "url": "https://docs.google.com/uc?export=download&id=1emuWUvyXjGtA1ZSXeoXYGXBluskMcaeg"
    },
    {
        "key": "E",
        "song": "Break-beat",
        "url": "https://docs.google.com/uc?export=download&id=14UkC3EeO2q4k1u5YtcpCXVz47_0C7rYl"
    },
    {
        "key": "A",
        "song": "Guitar-slide",
        "url": "https://docs.google.com/uc?export=download&id=1elG2Qkvc_tDGpi-9aC46ihUTT7i4h9VV"
    },
    {
        "key": "S",
        "song": "Heavy-funk",
        "url": "https://docs.google.com/uc?export=download&id=1wBQ-sGNRwoGJ1ZSwr6dqz3fkJ36YMxmS"
    },
    {
        "key": "D",
        "song": "Organ-synth",
        "url": "https://docs.google.com/uc?export=download&id=1XnZ-9tZNb6ecYrWp8ZgNaR3ewyTc-clU"
    },
    {
        "key": "Z",
        "song": "Groove",
        "url": "https://docs.google.com/uc?export=download&id=111iZ3QXA1j6XPGlp9G5FX5Yt5YNYnneR"
    },
    {
        "key": "X",
        "song": "Maze-politics",
        "url": "https://docs.google.com/uc?export=download&id=1oflT2yhvFUdOiQN-x83s-Wmo34wWx1D6"
    },
    {
        "key": "C",
        "song": "Groove-tanggu",
        "url": "https://docs.google.com/uc?export=download&id=1Q_jGs6WEzhZjV3aio05RZ5M6wxRI8V-k"
    }
];


class Pad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: [],
            active: false
        }
        this.mark = this.mark.bind(this);
        this.playStopAll = this.playStopAll.bind(this);
        this.playAll = this.playAll.bind(this);
        this.stopAll = this.stopAll.bind(this);
    }

    mark(name,states){
        if (!states) {
            console.log("First true- ", this.state.on, name, states);
            this.setState(prevState => ({
                on: [...prevState.on, name]
            }), console.log("Second true- ", this.state.on))
        }
        else {
            console.log("First false - ", this.state.on, name, states); 
            const index = this.state.on.indexOf(name);
            if(index > -1){ this.state.on.splice(index); }
            console.log("Second false - ", this.state.on, name, states);
    }} 

    playStopAll(){
        if (this.state.active) {
            this.setState({active: false},this.stopAll);
        } else {
            this.setState({active: true},this.playAll);
        }
    }

    playAll() {
        if (!this.state.active){
            this.setState({active: true});
            this.state.on.map(song => (document.getElementById(song).play()));
            console.log(this.state.on);
        }
    }

    stopAll() {
        if (this.state.active){
            this.setState({active: false});
            this.state.on.map(song => (document.getElementById(song).pause()));
            console.log(this.state.on);
        }
    }

    render() {
        return (
            <div style={{backgroundColor:"yellow", height:"100%"}}>
                <h1>9 Pads Loop Machine!</h1>
                <div>
                    <Button onClick={this.playAll} variant="contained" color="primary" style={{display:'inline-block', marginLeft:'30px'}}>Play</Button>
                    <Button onClick={this.stopAll} variant="contained" color="secondary" style={{display:'inline-block', marginLeft:'30px'}}>Stop</Button>
                </div>
                <Grid container>
                {songs.map(song => (
                    <Grid item xs={6} sm={3}>
                        <Square key={song.key} song={song.url} onClick={this.mark} name={song.key} id={song.song}/>
                    </Grid>
                ))}
                
                </Grid>
            </div>
        )
    }
}
export default Pad;
/*
{songs.map(song => (
    <Square key={song.key} song={song.url} onClick={this.mark} name={song.key} id={song.song}/>
))}
*/