import React, {Component} from 'react';
import Display from './Display';
import Embed from './Embed';

const api = `https://api.twitch.tv/helix/streams?first=9`

class Content extends Component {
    constructor() {
        super();
        this.reset = this.reset.bind(this);
        this.embed = this.embed.bind(this);
        this.state = {
            data: null,
            loaded: false,
            channel: false
        };
    };

    componentDidMount() {
        if (this.state.channel === false) {
            fetch(api, {
                    method: 'GET',
                    headers: new Headers({
                        'Client-Id': 'eyr8e16uth5qdzch2v55tkuao8m5t9'
                    })
                })
                .then(response => response.json())
                .then(jsondata => this.setState({
                    data: jsondata.data
                }))
                .then(this.setState({
                    loaded: true
                }))
        }
    }

    componentWillMount() {

    }

    reset() {
        this.setState({
            channel: false
        });
    }

    embed(val) {
        this.setState({
            channel: val
        });
    }

    render() {
        console.log("Content rendering")
        if(this.state.loaded){
            var data = this.state.data
            if (this.state.channel === false) {
                console.log("Sending: ")
                console.log(data)
                var view = (<Display data={data} loaded={this.state.loaded} embed={this.embed}/>);
            } else {
                var view = ( <Embed channel={this.state.channel}/>)
            }
            return (
            <div className="content">
                {view}
            </div>);
        }else{
            return(null)
        }
    }

}

export default Content;