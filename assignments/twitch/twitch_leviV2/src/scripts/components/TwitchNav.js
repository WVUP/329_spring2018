import React from 'react';

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
                <li onClick={() => this.props.ChangeContent(false)} className="clickable"><a href="#">Top Games</a></li>
                <li onClick={() => this.props.ChangeContent(true)} className="clickable"><a href="#">Top Streamers</a></li>
                <li>
                    <img src="./src/images/userPic.jpg" alt="User Profile" height="30px" width="30px"/>
                    <h5>User Name</h5>
                </li>
            </ul>
        </nav>
        );
    }
}
