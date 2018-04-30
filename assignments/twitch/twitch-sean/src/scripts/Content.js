import React from 'react';
import Games from './Games';
import Stream from './Stream';
import { Route } from 'react-router-dom';


export default class Content extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Content">
                 <Route exact path="/" component={Games}/>
                 <Route path="/streams" component={Stream}/>
            </div>
        );
    }
}
