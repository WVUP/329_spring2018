import React, {Component} from 'react';
import StreamCard from './StreamCard';

class StreamRow extends Component{
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {data: this.props.data, embed: this.props.embed};
    };

    render() {
        var data = this.state.data;
        var cards = [];
        data.map((dat, index) => {
            cards.push(<StreamCard data={dat} embed={this.state.embed} key={index} />);
        });
        
        return(
            <div className="row StreamRow">
                {cards}
            </div>
        )
    }
}

export default StreamRow;