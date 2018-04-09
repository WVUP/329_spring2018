import React, {Component} from 'react';
import axios from 'axios';
axios.defaults.headers.common['Client-Id'] = "aswvsgvoi2cppvyconfiuf0pumt0nq";

export default class Followers extends Component{
    constructor(props){
        super(props);
        this.state={
            following:[]
        };
    }

    componentWillMount(){

        axios.get("https://api.twitch.tv/kraken/users/hotdogfingers69/follows/channels")
        .then(response=> {
        console.log(response);
        var newAry = response.data.follows;
        this.setState({
            following : [following,  response.data.follows]  
          })                      
        })
        .catch((err)=> {console.log(err)})

        console.log(this.state.following.length);      
    }

    
    render()
    {
        const { following } = this.state;

     return(      
            
            <div>
            {
                following.map((follows, index) =>
                {
                    return <Following follows={follows.channel} />;
                })
            }
         </div>
          
     )
    }
}

class Following extends Component
{
    render()
    {
        const {follows, id} = this.props;
        <div className="following col-sm-3">
            <h2>{follows.channel.display_name} WHAAAT</h2>
        </div>
        console.log(follows.channel.display_name + "is a user in Following");
    }
}