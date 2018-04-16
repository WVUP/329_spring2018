import React, {Component} from 'react';
const api = `https://api.twitch.tv/helix/users?id=`

class StreamCard extends Component {
    constructor(props) {
        super(props);
        this.state = {data: this.props.data, embed: this.props.embed};
    };

    componentWillMount() {
        fetch(api+this.state.data.user_id, 
            {
                method: 'GET',
                headers: new Headers({
                    'Client-Id':'eyr8e16uth5qdzch2v55tkuao8m5t9'
                })
            })
        .then(response => response.json())
        .then(jsondata => this.setState({user: jsondata.data[0]}))
    }

    render() {
        if(this.state.user)
        {
            console.log(this.state.user)
            var thumbURL = "https://static-cdn.jtvnw.net/previews-ttv/live_user_" + this.state.user.login + "-290x185.jpg"
            return(
                <div className="StreamCard col-md-3" onClick={() => this.state.embed(this.state.user.display_name)}>
                    <img className="" src={thumbURL} alt="Thumbnail"/>
                    <div className="">
                        <br/>
                        <b className="">{this.state.user.display_name}</b>
                        <br/>
                        <p className="c">{this.state.data.title}</p>
                    </div>
                </div>
            )
        }
        else{
            return(null)
        }
    }
}

export default StreamCard;