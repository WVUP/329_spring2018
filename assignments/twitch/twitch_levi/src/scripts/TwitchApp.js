import React from 'react';
import Banner from './Banner';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import MiddlePane from './MiddlePane';

export default function TwitchApp(props){
    return (
        <div className="container-fluid">
            <LeftPane/>
            <MiddlePane />
            <RightPane/>
        </div>
    );
};