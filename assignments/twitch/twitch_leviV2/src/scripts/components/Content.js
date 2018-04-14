import React from 'react';
import {GetTopGames} from '../services/ApiCalls';
import GameList from './GameList';

export default class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            games:[]
        }
    }

    componentWillMount(){
        
        GetTopGames()
        .then(result =>{
            this.setState({
                games: result
            })
        })
    }

    render(){
        let games = this.state.games;
        let Content = "Loading...";
        console.log("Games are"+ games);
        if(games !== null){
            Content = <GameList Games={games}/>;
        }

        return(
            <div className="Content">
                {Content}                
            </div>
        );
    }
}
