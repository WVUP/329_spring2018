import React from 'react';
import BoxArtParser from '../services/BoxArtParser';

export default class StreamerWithGameList extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
        <div>
            {this.props.Streamers.map((streamer, index) => <StreamerWithGame key={index} streamer={streamer} />) }
        </div>
        );
    }
} 

export function StreamerWithGame(props){
    const streamer = props.streamer;
    return(
        <div>
            <img src={streamer.Pic} alt={streamer.Name}  height="30px" width="30px"/>
            <h5>{streamer.Name}</h5>
            <h6>{streamer.Game}</h6>
        </div>
    );
}