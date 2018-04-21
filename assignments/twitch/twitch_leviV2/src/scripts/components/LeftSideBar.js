import React from 'react';
import StreamerWithGameList from './StreamerWithGameList';
import { ExpandableStreamerWithGameList } from './StreamerWithGameList';
import TitleWithBreak from './TitleWithBreak';

const FollowToShow = 5;
const OnlineToShow = 3;
const RecommendedToShow = 4;

export default class LeftSideBar extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        search: ''
      };
    }

    textEntered(event){
        console.log("Search term is" + event.target.value);
          this.setState({
            search: event.target.value
          });
    }

    handleSubmit(e){
        e.preventDefault();
    }

    sortDataWithTerm(searchTerm, data){
      if(searchTerm == ''){
        return data;
      }
      var filtered = data.filter(datum =>
          datum.Name.toUpperCase().includes(searchTerm.toUpperCase())
          || datum.Game.toUpperCase().includes(searchTerm.toUpperCase())
      );
      return filtered;
    }

    render(){
        let term = this.state.search;
        let streamers = this.sortDataWithTerm(term, FollowedChannels);
        console.log('Data outside is' + streamers)

        return(
            <div className="LeftSideBar">
                <div className="UserContentContainer">
                    <TitleWithBreak title="Followed Channels"/>
                    <ExpandableStreamerWithGameList Streamers={streamers} Show={FollowToShow}/>
                    <TitleWithBreak title="Online Friends"/>
                    <ExpandableStreamerWithGameList Streamers={streamers} Show={OnlineToShow}/>
                    <TitleWithBreak title="Recommended Channels"/>
                    <ExpandableStreamerWithGameList Streamers={streamers} Show={RecommendedToShow}/>
                </div>
                <div className="LeftPaneFormBox">
                    <form action="" onSubmit={(event) => this.handleSubmit(event)}>
                      <div className="form-group has-feedback" style={{margin: 'auto'}}>
                        <input type="text" className="form-control" onChange={(event) => this.textEntered(event)}/>
                        <i className="glyphicon glyphicon-search form-control-feedback"></i>
                      </div>
                    </form>
                </div>
            </div>
        );
    }
}


var FollowedChannels = [
    {
        "Name":"Brownman",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Quantum of Solace"
    },
    {
        "Name":"Ninja",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Fortnight"
    },
    {
        "Name":"Bob Ross",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Painting Bushes"
    },
    {
        "Name":"Bob Ross",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Painting Bushes"
    },
    {
        "Name":"Bob Ross",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Painting Bushes"
    },
    {
        "Name":"Bob Ross",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Painting Bushes"
    },
    {
        "Name":"Brownman",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Quantum of Solace"
    },
    {
        "Name":"Ninja",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Fortnight"
    },
    {
        "Name":"Bob Ross",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Painting Bushes"
    },
    {
        "Name":"Bob Ross",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Painting Bushes"
    },
    {
        "Name":"Bob Ross",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Painting Bushes"
    },
    {
        "Name":"Bob Ross",
        "Pic":"./src/images/userPic.jpg",
        "Game":"Painting Bushes"
    },
];
