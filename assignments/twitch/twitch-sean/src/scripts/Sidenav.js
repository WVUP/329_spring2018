import React, {Component} from 'react';
import { GetFollowers } from './apiCalls';


export default class Sidenav extends Component{
    constructor(props){
        super(props);
        this.state={
            following:[]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){        
      
            let user = "hotdogfingers69";
            GetFollowers(user)
            .then(resp => this.setState({
                following: resp.follows,
               
                
            }))
            
            console.log(this.state.following.length);  
            console.log(this.state.following);
           
            
    }

    handleClick()
    {
        console.log("button was clicked");
    }


    render()
    {
        const { following } = this.state;
       
     return(
        <div className="sidenav">
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
       
        return(
        <div className="users col-sm-10">
            <h2> <a href={user.url}>{user.display_name} </a> </h2>
        </div> )
  
    }
};