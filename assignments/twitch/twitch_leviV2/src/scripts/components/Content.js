import React from 'react';
import GameList from './GameList';
import StreamWithStreamerList from './StreamWithStreamerList';
import { Route } from 'react-router-dom';
import LiveStream from './LiveStream';

export default class Content extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Content">
                <Route exact path="/" component={GameList}/>
                <Route path="/streams" component={StreamWithStreamerList}/>
                <Route path="/livestream/:channel" component={LiveStream}/>
            </div>
        );
    }
}


var fakeStreams = [
  {
      "id":"11322",
      "title":"Mydude stream time",
      "viewer_count":32574
  },
  {
      "id":"163542",
      "title":"Mydude stream time",
      "viewer_count":32574
  },
  {
      "id":"63342",
      "title":"90000 kills 42069 wins",
      "viewer_count":32574
  },
  {
      "id":"63442",
      "title":"Got them beets",
      "viewer_count":32574
  },
  {
      "id":"65342",
      "title":"God of Walugia",
      "viewer_count":32574
  }
];
