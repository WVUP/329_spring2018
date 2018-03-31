import React, {Component} from 'react';
const api = `https://api.twitch.tv/helix/streams?first=20`
let loaded = false

class StreamCard extends Component {
    constructor(props) {
        super(props);
        this.state = {data: this.props};
    };

    render() {
        console.log(this.state.data)
        return(
        <li>
            <strong className="title">{this.state.data.data.title}</strong>
        </li>
        )
    }
}

export default StreamCard;