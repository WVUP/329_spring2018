import React from 'react';
import TwitchNav from './TwitchNav';
import LeftSideBar from './LeftSideBar';
import Content from './Content';

export default class TwitchApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showStreamers : false
    }
    this.setShowStreamers = this.setShowStreamers.bind(this);
  }

  setShowStreamers(show){
    this.setState({
        showStreamers: show
    });
  }


  render(){
    return (
        <div className="PageContainer">
            {/* Navigation */}
           <TwitchNav ChangeContent={this.setShowStreamers}/>
           {/* Left SideBar */}
           <LeftSideBar/>
           {/* Main Content */}
           <Content ShowStreamers={this.state.showStreamers} />
        </div>
    );
  }
}
