import React, { Component } from 'react';
import './App.css';

//Used for Requesting in Header
const ClientID = "<Client ID here>";

//Ghetto way of doing it
function boxArtParser(boxArtUrl, size){
    let tokens = boxArtUrl.split("{width}");
    let newUrl = tokens[0] + 200 + tokens[1];
    tokens = newUrl.split('{height}');
    newUrl = tokens[0] + size + tokens[1];
    console.log(newUrl);
    return newUrl;
}


const Game = (props) =>{
  return <div style={{display:'inline-block'}}>
    <img src= {boxArtParser(props.box_art_url, 250)} alt="Not here"/>
      <div>{props.name}</div>
        
      
      <div>
        # {props.id}
      </div>
    
  </div>
};

const GameList = (props) =>{
  return <div>
    {props.Games.map(game => <Game {...game}/>)}
  </div>
};

class App extends Component {
  state = {
    data: []
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
    return (
      <div >
        <GameList Games={this.state.data}/>
      </div>
    );
  }
}



export default App;
