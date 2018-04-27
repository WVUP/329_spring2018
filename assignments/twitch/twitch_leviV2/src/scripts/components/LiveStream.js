import React from 'react';

const playerSource = "http://player.twitch.tv/?channel=";

export default function LiveStream(props){

    let channelSource = `http://player.twitch.tv/?channel=${props.match.params.channel}`;

    return(
      <div style={{width: '100%', height: '100%'}}>
          <iframe
            src = {channelSource}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            allowFullScreen="true">
          </iframe>
      </div>
    );
}
