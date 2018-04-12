import React, {Component} from 'react';
import axios from 'axios';
import TwitchApp from './TwitchApp';
axios.defaults.headers.common['Client-Id'] = "aswvsgvoi2cppvyconfiuf0pumt0nq";


export default class Sidenav extends Component{
    constructor(props){
        super(props);
        this.state={
            following:[]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){
        
        axios.get("https://api.twitch.tv/kraken/users/hotdogfingers69")
            .then((resp)=> {
                // console.log(resp);
                this.setState({
                    name: resp.data.name,
                    logo: resp.data.logo
                })
            })
            .catch((err)=> {console.log(err)})

             axios.get("https://api.twitch.tv/kraken/users/hotdogfingers69/follows/channels")
                .then(response=> {
                console.log(response.data.follows);
                this.setState({
                    following : response.data.follows
                  })   
                           
            })
            .catch((err)=> {console.log(err)})


            console.log(this.state.following.length);  
            console.log(this.state.following);
           
            
    }

    handleClick()
    {
        console.log("button was clicked");
        <TwitchApp   clicked={true}/>
    }


    render()
    {
        const { following } = this.state;
        console.log(following);
        

     return(
        <div className="sidenav">
            <div className="top">
                <div> 
                    <img id="twitchLogo" src="twitch-logo-tv-png-7.png"/>   
                    <br/>
                </div>
                <div>        
                    <div className="media">
                        <div className="media-left">
                            <img id="userLogo" className="media-object" src={this.state.logo}/>
                        </div>
                        <div className="media-body">
                            <h2 className="media-heading">{this.state.name}</h2>
                        </div>              
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="row">
                <h1>Following:</h1>
                 {
                   
                    following.map((user, index) =>
                    {
                        return <Following user={user.channel} />;
                    })
                }
         
                </div>
            </div> 
            <div className="searchBar">        
                <span>
                    <input type="text" id="searchField" name="search" placeholder="Search Channels">
                    </input>
                </span>
                <span>
                    <button type="button input" onClick={this.handleClick} id="submitButton" class="button">
                        Submit
                    </button>
                </span>                
            </div>
        </div>
   
     )
    }
}
class Following extends Component
{
    render( )
    {
        const {user, id} = this.props;
        console.log(user + "asdfasdf");
        return(
        <div className="users col-sm-10">
            <h2> <a href={user.url}>{user.display_name} </a> </h2>
        </div> )
      //  console.log(user.channel.display_name + "is a user in Following");
    }
};