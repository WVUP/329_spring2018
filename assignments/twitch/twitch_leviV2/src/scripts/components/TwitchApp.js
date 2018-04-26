import React from 'react';
import TwitchNav from './TwitchNav';
import LeftSideBar from './LeftSideBar';
import Content from './Content';

export default class TwitchApp extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="PageContainer">
            {/* Navigation */}
           <TwitchNav />
           {/* Left SideBar */}
           <LeftSideBar />
           {/* Main Content */}
           <Content />
        </div>
    );
  }
}
