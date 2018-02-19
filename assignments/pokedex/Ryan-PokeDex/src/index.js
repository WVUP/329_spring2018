import {render} from 'react-dom';
import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

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

class SearchBar extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {search: ''};
  }

  handleChange(e) {
    this.setState({search: e.target.value});
  }

  render() {
    const search = this.state.search;
    return (
      <fieldset>
        <input value={search}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}


class PokemonList extends Component{
  constructor(props){
    super(props);
    this.state = {
      species : []
    };
  }

  render(){
    
    const species = this.props.species;
    let content ;
    while(!this.props.fetched){
    }
    content = <div className="pokemon--species--list">{species.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)}</div>;
    console.log(species)
    return  <div>
      {content}
    </div>;
  }
}


class PokeApp extends Component{
  constructor(props) {
    super(props);
    this.state = {search: '', species: [],species_sorted: [],loading: false, fetched: false};
  }

  handleInput(search){
    let filtered = this.state.species.filter(this.checkFilter);
    this.setState({species_sorted: filtered});
  }

  checkFilter(pokemon){
    if(pokemon.name.includes(this.state.search)){
      return true;
    }
    else{
      return false;
    }
  }

  componentWillMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(res=>res.json())
    .then(response=>{
      this.setState({
        species : response.results,
        species_sorted: response.results,
        loading : true,
        fetched : true
      });
    });
  }

  render(){
    const search = this.state.search
    const species_sorted = this.state.species_sorted

    if(this.state.fetched == true){
    return <div className="pokeapp">
      <h1> The Kanto PokeDex! </h1>
      <SearchBar/>
      <PokemonList species={this.state.species_sorted}/>
    </div>;
    }
    else{
      return <p>Loading...</p>
    }
  }
}

render(<PokeApp/>,document.getElementById('app'))