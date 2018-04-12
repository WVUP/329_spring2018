import React, {Component} from 'react';

export default class Games extends Component{
    constructor(props){
        super(props);
        console.log(props.listNameFromParent)
        this.state={
            games: [],
            fetched: false,
            loading :false,
            
        };
    }

    componentWillMount(){
        this.setState({
          loading : true
        });
        let header = new Headers({
            'Client-Id' : "aswvsgvoi2cppvyconfiuf0pumt0nq"
        })

        var myInit = {
            method: 'GET',
            headers : header
        }
        fetch('https://api.twitch.tv/kraken/games/top/?limit=20', myInit)
        .then(res=>res.json())
        .then(response=>{
          this.setState({
            games : response.top,
            loading : true,
            fetched : true
          });
        });
      }
    
    componentDidMount(){
        this.setState({
            loading :false

        });
    }

    render()
    {
        const {fetched, loading, games} = this.state;
        console.log(games);
       // let channels = games.channels;
          
     return(
        <div className="row">
            {
                games.map( (game, channels, viewers) => {
                    return <Game game={game.game} viewers={game.viewers}  />;
                })
            }
         </div>     
     )
    }
}

class Game extends Component{
  
        render( )
        {
            const {game, channels, viewers} = this.props;
            console.log(game);
            // console.log(viewers);
            return (            
                <div className="games col-sm-3">                    
                        <div>
                            <img src = {game.box.large} id="gameBox"/> 
                        </div>
                        <div >
                            <h3 > {game.name} </h3> 
                            <h4>Viewers: {viewers}</h4>
                        </div>                    
                </div>
            
            )            
        }
    };