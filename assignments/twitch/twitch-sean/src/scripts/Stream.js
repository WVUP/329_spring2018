import React, {Component} from 'react';
import 'twitch-embed';

export default class Stream extends Component{
    constructor(props){
        super(props);
        this.player = null;
        this.state={
            id: null            
        }
    }

	render() {
		return(
			<div style={{width: '100%', height: '600px'}}>
				<iframe
				  src = "http://player.twitch.tv/?channel=ninja"
				  height="100%"
				  width="100%"
				  frameBorder="0"
				  scrolling="no"
				  allowFullScreen="true">
				</iframe>
			</div>
		  );
	}
}