import React from 'react';
import Games from './Games';
import Sidenav from './Sidenav';


export default function TwitchApp(props){

   
    console.log(props.clicked);
    if(props.clicked == true)
    {
        return (
            <div className="row">       
            <div className="col-md-3">
                    <Sidenav />
            </div>        
            <div>
               {/* component showing embedded video here */}
            </div>
        </div>
        )
    }
    else
    {
        return (
            <div className="row">       
                <div className="col-md-3">
                        <Sidenav />
                </div>        
                <div className="col-md-9" id="gamesDiv">   
                    <Games listNameFromParent="Peanuts" />
                </div>
            </div>
        )
    }                    
    
};