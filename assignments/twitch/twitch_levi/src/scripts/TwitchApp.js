import React from 'react';
import Banner from './Banner';
import LeftPane from './LeftPane';

export default function TwitchApp(props){
    return (
        <div>
            <div className="container">
                <LeftPane/>
            </div>
        </div>
    );
};