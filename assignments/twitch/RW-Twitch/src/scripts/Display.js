import React, {Component} from 'react';
import StreamRow from "./StreamRow";

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {data: this.props.data, loaded: this.props.loaded, embed: this.props.embed};
    };

    componentWillMount() {

    }

    render() {
        console.log("Display rendering")
        console.log(this.state.data)
        console.log(this.state.loaded)
        if(this.state.data){
            var streams = null
            var streamCards = null
            var data = this.state.data
            if (this.state.loaded) {
                console.log("Locked and Loaded")

                var row = [];
                row[0] = [];
                var rowCount = 0;
                if (streams) {
                    var rows = []
                    streams.map((stream, index) => {
                        if (index % 4 == 0 && index != 0) {
                            rows.push( <StreamRow data={row[rowCount]} embed={this.embed} key={rowCount}/> )
                            rowCount += 1; row[rowCount] = []; row[rowCount].push(stream);
                        }else { 
                            row[rowCount].push(stream);
                        }
                    });
                }
            }
            return(            
            <div className="container-fluid StreamContainer" id="twitch-embed"> {rows} </div> 
            )
        }else{
            return(null)
        }
    }
}

export default Display;