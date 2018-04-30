import React, {Component} from 'react';
import { GetTopGames } from './apiCalls';

export default class Games extends Component{
    constructor(props){
        super(props);
        console.log()
        this.state={
            games: []            
        }
    };

    componentWillMount(){
       GetTopGames()
        .then(result => {this.setState({games: result})})
        console.log(this.state.games);
      }
    
    componentDidMount(){
        this.setState({
            loading :false

        });
    }

    render()
    {
        let content = "Loading...";
        if(this.state.games != null)
        {
            content = this.state.games.map((game, index) => <Game key={game.name} Game={game}/> )
        }
        console.log(this.state.games);
      
          
     return(
        <div className="TopGames">
            {content}
         </div>     
     )
    }
}

export function Game(props) {
  const game = props.Game
            return (            
                <div>                    
                    <img src={game.game.box.large} id="gameBox"/> 
                    <h3 className="gameText"> {game.game.name} </h3> 
                    <h4>Viewers: {game.viewers}</h4>                       
                </div>
            )           
    };