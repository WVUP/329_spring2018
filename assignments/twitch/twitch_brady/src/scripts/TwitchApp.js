import React from 'react';
import Banner from './Banner';
import LeftPanel from './LeftPanel';
import MainPanel from './MainPanel';

export default function TwitchApp(props){
    return (
        <div>
          <div className="col-xs-3"><LeftPanel/></div>
          <div className="col-xs-9"><MainPanel/></div>   
        </div>
    );
};

//export default function Banner(props) {
  //  return (
    //    <div>
      //      <ul>
        //        <li>Game 1</li>
          //      <li>Game 2</li>
            //    <li>Game 3</li>
              //  <li>Game 4</li>
                //<li>Game 5</li>
            //</ul>
        //</div>
    //);
//};
//
  //          