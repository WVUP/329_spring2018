import React from 'react';
import StreamerWithGameList from './StreamerWithGameList';
import { ExpandableStreamerWithGameList } from './StreamerWithGameList';
import TitleWithBreak from './TitleWithBreak';

const FollowToShow = 5;
const OnlineToShow = 3;
const RecommendedToShow = 4;

export default class LeftSideBar extends React.Component{
    
    render(){
        return(
            <div className="LeftSideBar">
                <div>
                    <TitleWithBreak title="Followed Channels"/>
                    <ExpandableStreamerWithGameList Streamers={FollowedChannels} Show={FollowToShow}/>
                    <TitleWithBreak title="Online Friends"/>
                    <ExpandableStreamerWithGameList Streamers={FollowedChannels} Show={OnlineToShow}/>
                    <TitleWithBreak title="Recommended Channels"/>
                    <ExpandableStreamerWithGameList Streamers={FollowedChannels} Show={RecommendedToShow}/>
                </div>
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
    {
        "Name":"Bob Ross",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Painting Bushes"
    },
    {
        "Name":"Bob Ross",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Painting Bushes"
    },
    {
        "Name":"Bob Ross",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Painting Bushes"
    },
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
    {
        "Name":"Bob Ross",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Painting Bushes"
    },
    {
        "Name":"Bob Ross",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Painting Bushes"
    },
    {
        "Name":"Bob Ross",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Painting Bushes"
    },
];