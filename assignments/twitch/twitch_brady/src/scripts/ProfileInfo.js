import React from 'react';

export default function ProfileInfo(props) {
    return (
        <div>
            <img src={'./pics/Twitch_profile.png'} className="twitchProfilePic"/>
            <p className="userName">swimmer5000</p>
            <p className="greenIcon">■</p>
            <p className="online">Online</p>
        </div>
    );
};