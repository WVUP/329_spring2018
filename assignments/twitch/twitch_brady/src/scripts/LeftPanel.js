import React from 'react';
import TwitchLogo from './TwitchLogo';
import ProfileInfo from './ProfileInfo';
import Search from './Search';

export default function LeftPanel(props){
    return (
        <div className="container-fluid">
        <div className="leftPanel">
        <div className="grayBox"><TwitchLogo/><ProfileInfo/></div>
        <div><Search/></div>
        </div>
        </div>
    );
};

//export default function TopBox(props){
  //  return (
    //    <div className="container-fluid">
      //  <div className="grayBox">
        //Hello
        //</div>
        //</div>
    //);
//};