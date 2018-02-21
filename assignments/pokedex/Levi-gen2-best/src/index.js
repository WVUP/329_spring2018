import {render} from 'react-dom';
import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import { isNull } from 'util';


//The Pokemon component will show an individual Pokemon monster
// It shows an image of the Pokemon and
// shows the name of it as well.
class Pokemon extends Component{
  render(){
    const {pokemon,id} = this.props;
    return <div className="pokemon--species">
            <div className="pokemon--species--container">
              <div className="pokemon--species--sprite">
                <img src={`/public/sprites/${id}.png`} />
              </div>
              <div className="pokemon--species--name"> {pokemon.name} </div>
            </div>
          </div>;
    }
}


//The PokemonList component shows nothing when it mounts for the first time. 
//But right before it mounts on to the DOM, it makes an 
//API call to fetch the first 151 Pokemon from the API and 
//then displays them using the Pokemon Component

class PokemonList extends Component{
  constructor(props){
    super(props);
    this.state = {
      species : [],
      fetched : false,
      loading : false,
    };
  }
  componentWillMount(){
    this.setState({
      loading : true
    });
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(res => res.json())
    .then(response => {
      this.setState({
        species : response.results,
        loading : true,
        fetched : true,
      });
    });
  }

  filterOutPokemon(find)
  {
    let pokemans = this.state.species;
    console.log(pokemans);
    let filterMans = pokemans.filter(pokemans =>{
      console.log(pokemans.pokemon.name);
      return pokemans.pokemon.name.contains(find);
    });

    this.setState({
      species: filterMans
    })
  }

  render(){
    const {fetched, loading, species} = this.state;
    let content;
    let inputEle = document.getElementById(42);

    if(inputEle != null)
    {
      let target = inputEle.target;
      //console.log(value);
      console.log("Hello world");
      if(target != null)
      {
        console.log("Hello world");
        filterOutPokemon(target.value);
      }
    }
    
    if(fetched){
      content = <div className="pokemon--species--list">{species.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)}</div>;
    }else if(loading && !fetched){
        content = <p> Loading ...</p>;
    }
    else{
      content = <div/>;
    }
    return  <div>
      <div>
        <FindPokemon/>
      </div>
      <div>
         {content}
      </div>
    </div>;
  }
}

// Used for Form Input => https://reactjs.org/docs/forms.html
class FindPokemon extends Component{
  constructor(props){
    super(props);
    this.state = {
      find: ""
    }

    this.captureInput = this.captureInput.bind(this);
  }

  captureInput(input){
    console.log(input.target.value);
    this.setState({
      find: input.target.value,
    });
  }
  
  render(){

    let find = this.state.find;
    let finder = <input type="text" id={42} value={this.state.find} onChange={this.captureInput}/>
    let form = (<div>
      <form onSubmit={(e) => e.preventDefault()}> 
        {finder}
      </form>
    </div>);

    return form;
  }
}

//This is the root component
class PokeApp extends Component{
  render(){
    return <div className="pokeapp">
      <h1> The Kanto PokeDex! </h1>
      <PokemonList/>
    </div>;
  }
}

render(<PokeApp/>,document.getElementById('app'))