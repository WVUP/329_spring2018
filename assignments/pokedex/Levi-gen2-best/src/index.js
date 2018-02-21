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
    parsePokedexId(pokemon)

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

/**
 * In the works for parseing urls
 * @param {} pokemonJson 
 */
function parsePokedexId(pokemonJson)
{
    console.log(pokemonJson);
    let id = pokemonJson.url;
    console.log(id);
}

//The PokemonList component shows nothing when it mounts for the first time. 
//But right before it mounts on to the DOM, it makes an 
//API call to fetch the first 151 Pokemon from the API and 
//then displays them using the Pokemon Component

class PokemonList extends Component{

  render(){
    const species = this.props.species;
    
    
    let content = <div className="pokemon--species--list">{species.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)}</div>;

    return  <div>
      {content}
    </div>;
  }
}

// Used for Form Input => https://reactjs.org/docs/forms.html
class FindPokemon extends Component{
  constructor(props){
    super(props);
    this.state = {
      find: "",
      retrievedPokemans: [],
      filteredPokemans: [],
      fetched : false,
      loading : false,
      filter: false,
    }

    this.captureInput = this.captureInput.bind(this);
  }

  componentWillMount(){
    this.setState({
      loading : true
    });
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(res=>res.json())
    .then(response=>{
      this.setState({
        retrievedPokemans : response.results,
        loading : true,
        fetched : true
      });
    });
  }

  captureInput(input){
    console.log(input.target.value);

    if(input.target.value)
    {
      this.setState({
        find: input.target.value,
        filter: true,
      });

      this.filterOutPokemon(this.state.find);
      return;
    }
    
    this.setState({
      find: "",
      filter: false,
      filteredPokemans:[]
    });
    

    
  }

  filterOutPokemon(find)
  {
    let pokemans = this.state.retrievedPokemans;
    console.log(pokemans);
    let filterMans = pokemans.filter(pokemans =>{
      //console.log(pokemans.name); 
      let name = pokemans.name;
      return String(name).includes(find);
    });
    console.log(filterMans);
    this.setState({
      filteredPokemans: filterMans,
      filter: true,
    })
  }
  
  render(){

    let find = this.state.find;
    const retrievedPokemans = this.state.retrievedPokemans;
    const filteredPokemans = this.state.filteredPokemans;
    const {fetched, loading, filter} = this.state;
    let content;

    //retrievedPokemans.forEach(e => console.log(e));

    let finder = <input type="text" id={42} value={this.state.find} onChange={this.captureInput}/>
    let form = (
    <div>
      <form onSubmit={(e) => e.preventDefault()}> 
        {finder}
      </form>
    </div>);



    if(filter)
    {
      content = <PokemonList species={filteredPokemans} />;
    }
    else if(fetched){
      content = <PokemonList species={retrievedPokemans} />;
    }else if(loading && !fetched){
      content = <p> Loading ...</p>;
    }
    else{
      content = <div/>;
    }
    return  <div>
      <div>
        {form}
      </div>
      <div>
        {content}
      </div>
    </div>;

  }
}

//This is the root component
class PokeApp extends Component{
  render(){
    return <div className="pokeapp">
      <h1> The Kanto PokeDex! </h1>
      <FindPokemon/>
    </div>;
  }
}

render(<PokeApp/>,document.getElementById('app'))