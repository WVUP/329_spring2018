import React from 'react';
import BoxArtParser from '../services/BoxArtParser';

export default class StreamerWithGameList extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
        <div>
            {this.props.Streamers.map((streamer, index) => <StreamerWithGame key={index} streamer={streamer} />) }
        </div>
        );
    }
}

export function StreamerWithGame(props){
    const streamer = props.streamer;
    return(
        <div>
            <img src={streamer.Pic} alt={streamer.Name}  height="30px" width="30px"/>
            <h5>{streamer.Name}</h5>
            <h6>{streamer.Game}</h6>
        </div>
    );
}

//Adds in the Show more or Show Less Functionality
export class ExpandableStreamerWithGameList extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
      this.state = {
          Display: this.props.Show
      };
    }

    showMore(){
        console.log("Hey I was clicked yes");
        this.setState((prevState, props) =>{
            return {
                Display: prevState.Display + props.Show
            }
        });
    }

    showLess(){
        this.setState((prevState, props) =>{
            return {
                Display: prevState.Display - props.Show
            }
        });
    }


    render(){

        let ToShow = this.props.Streamers;
        console.log('ToShow is' + ToShow);
        ToShow = ToShow.slice(0, this.state.Display);
        let More;
        let Less;


        if(this.state.Display < this.props.Streamers.length){
            More = <h6 className="ShowMore" onClick={() => this.showMore()}>Show More</h6>
        }

        if(this.state.Display > this.props.Show){
            Less = <h6 className="ShowLess" onClick={() => this.showLess()}>Show Less</h6>;
        }

        return(
            <div>
                <StreamerWithGameList Streamers={ToShow}/>
                <div className = "MoreOrLessContainer">
                    {Less}{More}
                </div>
            </div>
        );
    }
}
