import React from 'react';
import {GetTopGames, GetTopSteamers} from '../services/ApiCalls';
import GameList from './GameList';
import StreamWithStreamerList from './StreamWithStreamerList';

export default class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            games:[],
            streams:[]
        }
    }

    componentWillMount(){
        GetTopGames()
        .then(result =>{
            this.setState({
                games: result
            })
        });

        GetTopSteamers()
        .then(result =>{
          this.setState({
            streams:result
          })
        });
    }

    render(){
        //content is being passed in showStreamers

        let games = this.state.games;
        let streams = this.state.streams;
        let Content = "Loading...";
        console.log("Games are"+ games);
        if(games !== null){
            Content = <GameList Games={games}/>;
        }

        if(this.props.ShowStreamers){
          Content = "Loading Streamers...";
          if(streams !== null){
            Content = <StreamWithStreamerList Streams={streams}/>
          }
        }

        return(
            <div className="Content">
                {Content}
            </div>
        );
    }
}


var fakeStreams = [
  {
      "id":"11322",
      "title":"Mydude stream time",
      "viewer_count":32574
  },
  {
      "id":"163542",
      "title":"Mydude stream time",
      "viewer_count":32574
  },
  {
      "id":"63342",
      "title":"90000 kills 42069 wins",
      "viewer_count":32574
  },
  {
      "id":"63442",
      "title":"Got them beets",
      "viewer_count":32574
  },
  {
      "id":"65342",
      "title":"God of Walugia",
      "viewer_count":32574
  }
];
