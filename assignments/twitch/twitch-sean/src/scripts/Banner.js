import React, {Component} from 'react';
import { GetUser } from './apiCalls';
import { Link } from 'react-router-dom';

export default class Banner extends Component
{
    constructor(props){
        super(props);
        this.state ={
            following:[],
            name : '',
            logo: ''

        };
    }

    componentWillMount(){
        let user = "hotdogfingers69";
        GetUser(user)
        .then(resp => this.setState({
            name: resp.display_name,
            logo: resp.logo
            
        }).then(console.log(resp)))
      
  
    }

    render()
    {
      
        console.log(this.state.name);

     return(
        <div id="container">
            <ul id="flex-container">
                <li> <img id="twitchLogo" src="twitch-logo-tv-png-7.png" height="40px"/>   </li>
                <li >
                     <Link to="/" >Games</Link>
                 </li>
                <li>
                    <Link to="/streams" >Ninja</Link>
                </li>
                <li>Streamers</li>
                <li><img id="userLogo" src={this.state.logo} height="40px"/>{this.state.name}</li>
            </ul>
        </div>
   
     )
    }
}