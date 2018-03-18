import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

export default function TwitchApp(props){
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <Content />
            </div>
        </div>
    );
};