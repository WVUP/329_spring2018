import React, {Component} from 'react';
import StreamCard from './StreamCard';
const api = `https://api.twitch.tv/helix/streams?first=20`

class Content extends Component {
    constructor(){
        super();
        this.state = {data: null, loaded: false};
    };

    componentDidMount() {
        fetch(api, 
            {
                method: 'GET',
                headers: new Headers({
                    'Client-Id':'eyr8e16uth5qdzch2v55tkuao8m5t9'
                })
            })
        .then(response => response.json())
        .then(jsondata => this.setState({data: jsondata.data}))
        .then(this.setState({loaded: true}))
    }

    componentWillMount() {

    }

    render() {
        var streams = null
        var streamCards = null
        if(this.state.loaded)
        {
            console.log('Data:')
            console.log(this.state.data)
            var streams = this.state.data;
            if(streams){
                var streamCards = streams.map((stream) =>
                <StreamCard data={stream} key={stream.user_id}/>
                );
            }
        }

        
        return (
            <div className="content">
                <div className="container-fluid"><div className="row">{streamCards}</div></div>
            </div>
        );
    }
}

export default Content;