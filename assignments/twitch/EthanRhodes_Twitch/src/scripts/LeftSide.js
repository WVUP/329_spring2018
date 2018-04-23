import React from 'react';
import {Component} from 'react';
import axios from 'axios';
axios.defaults.headers.common['Client-Id'] = "5hclx4xrr4qpx18lvaoc9gsxh4xkcg";


export default class LeftSide extends Component
{
    constructor(props)
    {
        super(props);
        this.state={};
    }

    componentWillMount()
    {
        axios.get("https://api.twitch.tv/kraken/users/Shawism")
        .then((resp)=> {
            console.log(resp);
            this.setState({
                name: resp.data.name,
                logo: resp.data.logo
            })
        })
        .catch((err)=> {console.log(err)})
    }

    render()
    {
        return(
            <div className="leftside">
                <div className="topleft">
                    <img src="src/images/twitchlogo.png" alt="" id="logo"/>
                    <img src="src/images/twitchicon.png" alt="" id="icon"/>
                    <div className="propic">
                        <img src={this.state.logo}/>
                    </div>    
                </div>
                <div className="purpbar"></div>
            <div className="purpbar"></div>
            <div className="purpbar"></div>
            <input type="text" placeholder="Search....." className="search" id="getData"/>
            </div>
        )
    }
}