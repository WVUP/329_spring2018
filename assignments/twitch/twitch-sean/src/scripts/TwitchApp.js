import React from 'react';
import Games from './Games';
import Sidenav from './Sidenav';
import Banner from './Banner';
import Stream from './Stream';
import Content from './Content';


export default function TwitchApp(props){
    
        return (

        <div>
            <div>
                <Banner />
            </div>
            <div className="row">       
                <div className="col-md-3">
                    <Sidenav />
                </div>
                <div className="col-md-9">
                    <Content />
                </div>
            </div>
        </div>
        )
};