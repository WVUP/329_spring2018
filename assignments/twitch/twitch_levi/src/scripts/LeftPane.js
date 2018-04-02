import React from 'react';


export default function LeftPane(props){
    return (
        <div className="container">
            <div className="leftpane">
                <SiteImagesBox/>
                <UserBox/>
                <UserContent/>
            </div>
        </div>
    );
}

const SiteImagesBox = (props)=>{
    return (
        <div id="twitchLogo" >
            <img className="img-responsive" src="./src/images/twitchName.png" alt="Twitch Logo"/>
        </div>
    );
}


const UserBox = (props)=>{
    return(
        <div className="media userBox">
            <div className="media-left">
                <img className="media-object userPic" src="./src/images/userPic.jpg" alt=""/>
            </div>
            <div className="media-body">
                <h2 className="media-heading">User Name</h2>
                <p><span className="glyphicon glyphicon-stop" style={{color:'lightgreen'}}></span> Online</p>
            </div>
        </div>
    );
}

class FollowedChannelBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }

    changeShow(){
        this.setState({
            show: !this.state.show
        })
    }

    render(){

        let content;

        if(this.state.show)
        {
            content = (
                <div style={{color:'white', padding:'15% 0% 0 0'}}>
                    <HeadingWithUserList title="Followed Channels"/>
                </div>
               
            );
        }

        return(
            <div className="textAlign">
                {content}
                <a href="#userFollowers" onClick={() => this.changeShow()}><span className="glyphicon glyphicon-chevron-down"></span></a>
            </div>
        );
    }
}

const userData = [
    {
        "UserName":"Bob Ross",
        "ProfilePic":"./src/images/userPic.jpg",
        "Game":"Mario Paint"
    },
    {
        "UserName":"BrownMan",
        "ProfilePic":"./src/images/userPic.jpg",
        "Game":"Far Cry 5"
    },
    {
        "UserName":"Ice Poisedon",
        "ProfilePic":"./src/images/userPic.jpg",
        "Game":"Gettin Banned"
    }
]


class HeadingWithUserList extends React.Component{

    render(){
        return (
            <div>
                <h2 className='text-centered'>{this.props.title} </h2>
                <UserList users={userData}/>
            </div>
        );
    }
}

class UserList extends React.Component{

    render()
    {
        const users = this.props.users;
        console.log(users);

        let content = <div>{users.map((user,index) => <UserWithProfilePic key={index + 1} user={user}/>)}</div>; 
    
        return (
            <div>
                {content}
            </div>
        );
    }
}

function UserWithProfilePic(props) {
    
    const user = props.user;

    return (
         <div className="media userBox">
            <div className="media-left">
                <img className="media-object userPic" src={user.ProfilePic} alt="User Picture"/>
            </div>
            <div className="media-body">
                <h2 className="media-heading text-left">{user.UserName}</h2>
                <p className='text-left'>{user.Game}</p>
            </div>
        </div>
    );
}


const SearchBox = (props) =>{
    return(
         <div id="searchBox">
             <form className="form-inline">
                <div className="input-group" style={{width:'100%'}}>
                    <input className="searchField form-control" style={{height:'50px'}} type="search"></input>
                    <div className="input-group-btn">
                        <button className="btn btn-primary" style={{width:'100%', height:'50px'}}><i className="glyphicon glyphicon-search" style={{color:'white'}}></i></button>
                    </div>
                </div>
            </form>
        </div>
    );
}

const UserContent = (props) =>{
    return (
         <div id="userContent">
            <FollowedChannelBox/>
            <SearchBox/>
        </div>
    );
}