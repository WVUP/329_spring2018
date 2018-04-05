import React, {Component} from 'react';
const api = `https://api.twitch.tv/helix/users?id=`

class StreamCard extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {data: this.props.data};
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
            var thumbURL = "https://static-cdn.jtvnw.net/previews-ttv/live_user_" + this.state.user.login + "-240x135.jpg"
            return(
                <div className="col-md-3 StreamCard">
                    <img className="" src={thumbURL} alt="Thumbnail"/>
                    <div className="">
                        <b className="">{this.state.user.display_name}</b>
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