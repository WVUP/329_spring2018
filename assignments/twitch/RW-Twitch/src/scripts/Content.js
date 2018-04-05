import React, {Component} from 'react';
import StreamRow from './StreamRow';
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
            var row = [];
            row[0] = [];
            var rowCount = 0;
            if(streams){
                var rows = []
                streams.map((stream, index) => {
                    console.log("Row Count: " + (rowCount+1))
                    console.log("Index: " + index)
                    console.log(stream)
                    
                    if(index % 4 == 0 && index != 0){
                        rows.push(<StreamRow data={row[rowCount]} key={rowCount} />)
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