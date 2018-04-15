import React from 'react';
import StreamerWithGameList from './StreamerWithGameList';
import { ExpandableStreamerWithGameList } from './StreamerWithGameList';
import TitleWithBreak from './TitleWithBreak';

const FollowToShow = 5;
const OnlineToShow = 3;
const RecommendedToShow = 4;

export default class LeftSideBar extends React.Component{
    

    textEntered(data){
        console.log(data);
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <div className="LeftSideBar">
                <div className="UserContentContainer">
                    <TitleWithBreak title="Followed Channels"/>
                    <ExpandableStreamerWithGameList Streamers={FollowedChannels} Show={FollowToShow}/>
                    <TitleWithBreak title="Online Friends"/>
                    <ExpandableStreamerWithGameList Streamers={FollowedChannels} Show={OnlineToShow}/>
                    <TitleWithBreak title="Recommended Channels"/>
                    <ExpandableStreamerWithGameList Streamers={FollowedChannels} Show={RecommendedToShow}/>
                </div>
                <div className="LeftPaneFormBox">
                    <form action=""  onSubmit={(event) => this.handleSubmit(event)}>
                        <input type="text" onChange={(event, data) => this.textEntered(event, data)}/>
                    </form>
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