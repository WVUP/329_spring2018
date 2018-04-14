import React from 'react';
import TwitchLogo from './TwitchLogo';

export default function LeftPanel(props){
    return (
        <div className="container-fluid">
        <div className="leftPanel">
        <div className="grayBox"><TwitchLogo/></div>
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