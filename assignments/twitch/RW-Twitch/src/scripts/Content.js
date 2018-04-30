import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                    data: jsondata.data, loaded: true
                }));
        }
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
                var view = (
                    <Router>
                        <div>
                            <Route path="/" render={() => <Display data={data} loaded={this.state.loaded} embed={this.embed}/>}/>
                            <Route path="/:channel" render={(props) => <Embed {...props}/>}/>
                        </div>
                    </Router>
                )
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