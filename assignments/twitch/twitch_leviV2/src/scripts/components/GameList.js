import React from 'react';
import BoxArtParser from '../services/BoxArtParser';

export default class GameList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let Content;
        if(this.props.Games != undefined)
            Content = this.props.Games.map((game, index) => <GameCard key={game.name} Game={game}/>);

        return(
            <div className="GameContainer">
                {Content}
            </div>
        );
    }
} 


export function GameCard(props){
    const Game = props.Game;

    return(
        <div>
            <img src={BoxArtParser(Game.box_art_url, 200, 250)} alt={Game.name}/>
            <h5 className="hideText">{Game.name}</h5>
            <h6 className="hideText">{Game.id} viewers</h6>
        </div>
    );
}