import React, {Component} from 'react';
import StreamRow from './StreamRow';
const api = `https://api.twitch.tv/helix/streams?first=9`

class Content extends Component {
    constructor(){
        super();
        this.reset = this.reset.bind(this);
        this.embed = this.embed.bind(this);
        this.state = {data: null, loaded: false, channel: false};
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

    reset() {
        this.setState({channel: false});
    }

    embed(val) {
        this.setState({channel: val});
        console.log("WE HIT EMBED")
    }

    render() {
        var streams = null
        var streamCards = null
        if(this.state.loaded)
        {
            var streams = this.state.data;
            var row = [];
            row[0] = [];
            var rowCount = 0;
            if(streams){
                var rows = []
                streams.map((stream, index) => {                    
                    if(index % 4 == 0 && index != 0){
                        rows.push(<StreamRow data={row[rowCount]} embed={this.embed} key={rowCount} />)
                        rowCount += 1;
                        row[rowCount] = [];
                        row[rowCount].push(stream);
                        
                    }else{
                        row[rowCount].push(stream);
                    }
                });
            }
        }

        
        return (
            <div className="content">
                <div className="container-fluid StreamContainer">{rows}</div>
            </div>
        );
    }
}

export default Content;