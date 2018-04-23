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
            content = <div className="gamesList">{games.map((game, index) => <Game key={index} game={game}/>)}</div>;
            }
            else if(loading && !fetched)
            {
                content = <p> Loading..... </p>;
            }            
            else
            {
                content = <div/>;
            }
            return <div>
                {content}
                </div>;
        }
    }


class Game extends Component{
    render(){
      const {game} = this.props.game;
      return(
        <div className="games" col-sm-5>
            <div>
                <img src = {game.box.large} id="gboxLarge"/>
            </div>
            <div>
                <h3> {game.name} </h3>
                <h3>Viewers: {game.viewers} </h3>
            </div>
        </div>
            )
      }
  };