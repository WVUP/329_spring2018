import React from 'react';
// import Banner from './Banner';
import LeftSide from './LeftSide';
import Center from './Center';
import axios from 'axios';
axios.defaults.headers.common['Client-Id'] = "5hclx4xrr4qpx18lvaoc9gsxh4xkcg";
axios.defaults.headers.common['Accept'] = "application/vnd.twitchtv.v5+json";


export default class TwitchApp extends React.Component {
    
    constructor()
    {
        super();
        this.state = {
            search : []
        }
        this.search = this.search.bind(this);

    }

    search(searchTerm)
    {
        axios.get("https://api.twitch.tv/kraken/search/games?query=" + searchTerm)
        .then((resp)=> {
            console.log(resp.data.games);
            this.setState({
                search : resp.data.games
            })
        })
        .catch((err)=> {console.log(err)})
    }

    render ()
    {
        return(
        <div>
            {/* <Banner /> */}
            <LeftSide Search = {this.search}/>
            <Center SearchGames = {this.state.search}/>
            <div className="container">
            </div>
        </div>
    );
    }

};