import React from 'react';
// import Banner from './Banner';
import LeftSide from './LeftSide';
import Center from './Center';

export default function TwitchApp(props){
    return (
        <div>
            {/* <Banner /> */}
            <LeftSide/>
            <Center/>
            <div className="container">
            </div>
        </div>
    );
};