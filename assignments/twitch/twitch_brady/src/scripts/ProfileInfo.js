import React from 'react';

export default function ProfileInfo(props) {
    return (
        <div className="container-fluid">
         <img src={'./pics/Twitch_profile.png'} className="twitchProfilePic"/>
         <p className="userName">swimmer5000</p>
         <img src={'./pics/OnlineIndicator.png'} className="greenIcon"/>
         <p className="online">Online</p>
        </div>
    );
};