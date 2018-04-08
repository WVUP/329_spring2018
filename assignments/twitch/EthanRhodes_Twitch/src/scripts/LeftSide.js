import React from 'react';
import {Component} from 'react';


export default class LeftSide extends Component
{
    constructor(props)
    {
        super(props);
        this.state={};
    }

    componentWillMount()
    {
    
    }

    componentDidMount()
    {

    }

    render()
    {
        return(
            <div className="leftside">
                <div className="topleft">
                    <img src="src/images/twitchlogo.png" alt="" id="logo"/>
                    <img src="src/images/twitchicon.png" alt="" id="icon"/>    
                </div>
                <div className="purpbar"></div>
            <div className="purpbar"></div>
            <div className="purpbar"></div>
            <input type="text" placeholder="Search....." className="search" id="getData"/>
            </div>
        )
    }
}