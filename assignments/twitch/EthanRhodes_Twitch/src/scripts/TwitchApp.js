import React from 'react';
// import Banner from './Banner';
import LeftSide from './LeftSide';

export default function TwitchApp(props){
    return (
        <div>
            {/* <Banner /> */}
            <LeftSide/>
            <div className="container">
                <p>Starter twitch app</p>
            </div>
        </div>
    );
};