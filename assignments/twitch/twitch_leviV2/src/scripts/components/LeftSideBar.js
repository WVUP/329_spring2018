import React from 'react';
import StreamerWithGameList from './StreamerWithGameList';
import TitleWithBreak from './TitleWithBreak';

export default class LeftSideBar extends React.Component{
    
    render(){
        return(
            <div className="LeftSideBar">
                <TitleWithBreak title="Followed Channels"/>
                <StreamerWithGameList Streamers={FollowedChannels}/>
                <TitleWithBreak title="Online Friends"/>
                <StreamerWithGameList Streamers={FollowedChannels}/>
                <TitleWithBreak title="Recommended Channels"/>
                <StreamerWithGameList Streamers={FollowedChannels}/>
            </div>
        );
    }
}


var FollowedChannels = [
    {
        "Name":"Brownman",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Quantum of Solace"
    },
    {
        "Name":"Ninja",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Fortnight"
    },
    {
        "Name":"Bob Ross",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Painting Bushes"
    },
];