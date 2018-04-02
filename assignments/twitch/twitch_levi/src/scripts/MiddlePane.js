import React, { Component } from 'react';
import RightPane from './RightPane';

//Used for Requesting in Header
const ClientID = "<ClientID>";

//Ghetto way of doing it
function boxArtParser(boxArtUrl, width, height){
    let tokens = boxArtUrl.split("{width}");
    let newUrl = tokens[0] + width + tokens[1];
    tokens = newUrl.split('{height}');
    newUrl = tokens[0] + height + tokens[1];
    console.log(newUrl);
    return newUrl;
}


const Game = (props) =>{
  return (
    <div className="game col-md-3">
        <div className='media-top'>
            <img className='media-object' src= {boxArtParser(props.box_art_url, 200, 250)} alt="Game Picture"/>
        </div>
        <div className='media-body'>
            <h4 className='media-heading'>{props.name}</h4>
            {/* <p>
                # {props.id}
            </p> */}
        </div>
    </div>
  );
}

const GameList = (props) =>{
    return <div className="row">
        {props.Games.map(game => <Game key={game.name} {...game}/>)}
    </div>
};
  
class MiddlePane extends Component {
constructor(props){
    super(props);
    this.state = {
        data: []
    }
}

componentWillMount(){
    let myInit = {
    method: 'GET',
    headers: new Headers({
        "Client-ID": ClientID
    })
    };

    fetch("https://api.twitch.tv/helix/games/top", myInit)
    .then(res => res.json())
    .then(response =>{
    this.setState({
        data: response.data
    })
    })
    console.log(this.state.data);
}

render() {
    let content;

    if(this.data !== null){
        content = <GameList Games={this.state.data}/>
    }

    return (
    <div id='middlePane'>
        {content}
    </div>
    );
}
}

export default MiddlePane;