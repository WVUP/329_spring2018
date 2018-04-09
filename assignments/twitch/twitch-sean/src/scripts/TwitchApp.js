import React from 'react';
import Games from './Games';
import Sidenav from './Sidenav';


export default function TwitchApp(props){
    return (
        // col-md-8
        <div className="row">       
            <div className="col-md-11" id="gamesDiv">   
                <Games listNameFromParent="Peanuts" />
            </div>
            <div className="col-md-2">
                <Sidenav />
            </div>         
        </div>
    );
};