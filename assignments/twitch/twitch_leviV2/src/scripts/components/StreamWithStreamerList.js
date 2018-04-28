import React from 'react';
import BoxArtParser from '../services/BoxArtParser';
import { GetTopSteamers, GetUser } from '../services/ApiCalls';
import { Link } from 'react-router-dom';

export class StreamWithStreamer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      channelName:''
    }
  }

  componentWillMount(){
      GetUser(this.props.Stream.user_id)
      .then(data =>{
        console.log(data);
        this.setState({
          channelName: data[0].login
        })
      });

  }

  render(){
    const stream = this.props.Stream;
    const channelName = this.state.channelName;
    let thumbnail = BoxArtParser(stream.thumbnail_url, 320, 180);
    return (
      <div >
        <Link to={`/livestream/${channelName}`}>
            <img src={thumbnail} alt="Stream Image"></img>
            <h5>{stream.title}</h5>
            <h6>{stream.viewer_count} viewers on {stream.user_id}</h6>
        </Link>
      </div>
    );
  }
}

export default class StreamWithStreamerList extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      streams:[]
    }
  }

  componentWillMount(){
    GetTopSteamers()
    .then(result =>{
      this.setState({
        streams:result
      })
    });
  }

  render(){
    let Content = this.state.streams.map((stream, index) =>
      <StreamWithStreamer key={stream.id} Stream={stream}/>);

    return(
      <div className="StreamContainer">
        {Content}
      </div>
    );
  }
}
