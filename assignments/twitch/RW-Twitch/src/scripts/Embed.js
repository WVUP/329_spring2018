import React, {Component} from 'react';

class Embed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channel: this.props.channel
        };
    };

    render() {
        const {match: { params} } = this.props;

        const { channel } = params;

        var url = "http://player.twitch.tv/?channel=" + channel;
        console.log(url);

        return (
            <iframe 
                src= {url}
                height = "720"
                width = "1280"
                scrolling = "no"
                allowFullScreen = "true">
            </iframe>
        )
    }

}

export default Embed;