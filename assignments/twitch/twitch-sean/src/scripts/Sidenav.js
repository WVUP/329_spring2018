//import React from 'react';
import React, {Component} from 'react';
import axios from 'axios';
axios.defaults.headers.common['Client-Id'] = "aswvsgvoi2cppvyconfiuf0pumt0nq";


export default class Sidenav extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    componentWillMount(){
        
        axios.get("https://api.twitch.tv/kraken/users/hotdogfingers69")
            .then((resp)=> {
                console.log(resp);
                this.setState({
                    name: resp.data.name,
                    logo: resp.data.logo
                })
            })
            .catch((err)=> {console.log(err)})
    }

    componentDidMount(){

    }

    render()
    {
     return(
        <div className="sidenav">
           <div> 
                <img id="twitchLogo" src="twitch-logo-tv-png-7.png"/>   
                <br/>
            </div>
            <div>
       
                <div class="media">
                    <div class="media-left">
                        <img id="userLogo" class="media-object" src={this.state.logo}/>
                    </div>

                    <div class="media-body">
                    <h1 class="media-heading">{this.state.name}</h1>
                    </div>              
                </div>
            </div>
        </div>
       

     )
    }
}