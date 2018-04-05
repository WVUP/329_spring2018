import React, {Component} from 'react';
import StreamCard from './StreamCard';

class StreamRow extends Component{
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {data: this.props.data};
    };

    render() {
        return(
            <div className="row StreamRow">
                <StreamCard data={this.props.data[0]} key={this.props.data[0].user_id}/>
                <StreamCard data={this.props.data[1]} key={this.props.data[1].user_id}/>
                <StreamCard data={this.props.data[2]} key={this.props.data[2].user_id}/>
                <StreamCard data={this.props.data[3]} key={this.props.data[3].user_id}/>
            </div>
        )
    }
}

export default StreamRow;