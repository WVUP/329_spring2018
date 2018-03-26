import React from 'react';
import Banner from './Banner';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

export default function TwitchApp(props){
    return (
        <div className="container-fluid">
            <LeftPane/>
            <RightPane/>
        </div>
    );
};