import React, {Component} from 'react';

export default class Games extends Component{
    constructor(props){
        super(props);

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
        fetch('https://api.twitch.tv/kraken/games/top', myInit)
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

    }

    render()
    {
        const {fetched, loading, games} = this.state;
        console.log('games');
        console.log(games);
        // let content = [];
        // if(fetched)
        // {
        // for(game in games){
        //     content.push(<div>
        //         <h1>{game.name}</h1>
        //         <img src= {game.box.large}/>
        //     </div>)
        // }
        // }
        // else if(loading && !fetched){
        //     content = <p> Loading ...</p>;
        // }
          
     return(
         <div>
            {
                games.map( (game, index) => {
                    return <Game game={game.game}  />;
                })
            }
            {/* {content} */}
         </div>     
     )
    }
}

class Game extends Component{
  
        render( )
        {
            const {game, id} = this.props;
            console.log(game);
            return (
             <div className="games col-sm-3">
                <p>
                    <img src = {game.box.large} id="gameBox"/> 
                    <h1> {game.name} </h1> 
                </p>
            </div>
            )            
        }
    };