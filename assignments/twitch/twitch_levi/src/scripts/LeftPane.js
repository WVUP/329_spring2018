import React from 'react';


export default function LeftPane(props){
    return (
        <div className="container">
            <div className="leftpane">
                <SiteImagesBox/>
            </div>
        </div>
    );
}

const SiteImagesBox = (props)=>{
    return (
        <div id="twitchLogo">
            <img src="./src/images/twitch.png" alt="Twitch Logo"/>
        </div>
    );
}