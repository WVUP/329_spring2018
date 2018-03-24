import React from 'react';


export default function LeftPane(props){
    return (
        <div className="container">
            <div className="leftpane">
                <SiteImagesBox/>
                <UserBox/>
                <UserContent/>
            </div>
        </div>
    );
}

const SiteImagesBox = (props)=>{
    return (
        <div id="twitchLogo" >
            <img className="img-responsive" src="./src/images/twitchName.png" alt="Twitch Logo"/>
        </div>
    );
}


const UserBox = (props)=>{
    return(
        <div id="userBox" className="media">
            <div className="media-left">
                <img id="userPic" className="media-object" src="./src/images/userPic.jpg" alt=""/>
            </div>
            <div id="userName" className="media-body">
                <h2 className="media-heading">User Name</h2>
                <p><span className="glyphicon glyphicon-stop" style={{color:'lightgreen'}}></span> Online</p>
            </div>
        </div>
    );
}



const FollowedChannelBox = (props) =>{
    return(
        <div className="textAlign">
            <a href="#userFollowers" data-toggle='collapse'><span className="glyphicon glyphicon-chevron-down"></span></a>
            <div id="userFollowers" className="collapse">
                <div className="media">
                    <div className="media-left">
                        <img className="media-object" src="./src/images/userPic.jpg" alt="Streamer Picture"/>
                    </div>
                    <div id="userName" className="media-body">
                        <h2 className="media-heading">User Name</h2>
                        <p><span className="glyphicon glyphicon-stop" style={{color:'lightgreen'}}></span> Online</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const SearchBox = (props)=>{
    return(
         <div id="searchBox">
            <div className="form-inline">
                <label></label>
                <input className="form-control" type="search"></input>
                <button className="btn btn-primary"><span className="glyphicon glyphicon-search" style={{color:'white'}}></span></button>
            </div>
        </div>
    );
}

const UserContent = (props) =>{
    return (
         <div id="userContent">
            <FollowedChannelBox/>
            <SearchBox/>
        </div>
    );
}