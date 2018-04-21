import React from 'react';
import BoxArtParser from '../services/BoxArtParser';

export function StreamWithStreamer(props){
  const stream = props.Stream;
  let thumbnail = BoxArtParser(stream.thumbnail_url, 300, 200);
  return (
    <div>
      {/* Did have a div here, leaving it out for now */}
        <img src={thumbnail} alt="Stream Image"></img>

      <h5>{stream.title}</h5>
      <h6>{stream.viewer_count} viewers on {stream.user_id}</h6>
    </div>
  );
}

export default function StreamWithStreamerList(props){

  let Content = props.Streams.map((stream, index) =>
    <StreamWithStreamer key={stream.id} Stream={stream}/>);

  return(
    <div className="GameContainer">
      {Content}
    </div>
  );
}
