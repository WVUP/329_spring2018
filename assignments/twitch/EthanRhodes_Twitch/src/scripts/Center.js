import React from 'react';
import {Component} from 'react';
import axios from 'axios';
axios.defaults.headers.common['Client-Id'] = "5hclx4xrr4qpx18lvaoc9gsxh4xkcg";


export default class Center extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            games: [],
            fetched: false,
            loading: false,
        };
    }

    componentWillMount()
    {
        axios.get("https://api.twitch.tv/kraken/games/top/?limit=20")
        .then(response => {
            console.log(response.data);
            this.setState({
                games: response.data.top,
                fetched: true, 
                loading: true
            })
        })
        .catch((err)=> {console.log(err)})
    }

    render()
    {
        const {games, fetched, loading} = this.state;
        console.log(games);
        let content ;
        if(fetched)
        {
            content = <div className="gamesList">{games.map((game, index, viewers) => <Game key={index} game={game} viewers={game.viewers}/>)}</div>;
        }
        else if(loading && !fetched)
        {
            content = <p> Loading..... </p>;
        }            
        else
        {
            content = <div/>;
        }
        if(this.props.SearchGames != null && this.props.SearchGames.length > 0)
        {
            console.log(this.props.SearchGames);
            content = <div className="gamesList">{this.props.SearchGames.map((game, index, viewers) => <Game key={index} game={game} viewers={game.popularity}/>)}</div>;
        }
        return <div className>
            {content}
            </div>;
        }
    }


class Game extends Component{
    render(){
        console.log(this.props.game);
      const {game, viewers} = this.props.game;
      return(
        <div className="games" col-sm-3>
            <div>
                <img src = {game.box.large} id="gboxLarge"/>
            </div>
            <div>
                <h3> {game.name} </h3>
                <h3>Viewers: {viewers} </h3>
            </div>
        </div>
            )
      }
  };