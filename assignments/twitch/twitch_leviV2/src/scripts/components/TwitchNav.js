import React from 'react';
import { Link } from 'react-router-dom';

export default class TwitchNav extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
        <nav>
            <ul>
                <li>
                    <img src="./src/images/twitchName.png" alt="Twitch Name" width="92px" height="32px"/>
                </li>
                <li className="clickable">
                    <Link to="/" >Top Games</Link>
                </li>
                <li className="clickable">
                    <Link to="/streams" >Top Streams</Link>
                </li>
                <li>
                    <img src="./src/images/userPic.jpg" alt="User Profile" height="30px" width="30px"/>
                    <h5>User Name</h5>
                </li>
            </ul>
        </nav>
        );
    }
}
