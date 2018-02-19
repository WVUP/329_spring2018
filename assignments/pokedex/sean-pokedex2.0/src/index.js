import {render} from 'react-dom';
import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

class PokeApp extends Component{
  render(){
    return <div className="pokeapp">
      <h1> The Kanto PokeDex! </h1>
      <input type="text" placeholder="Search" id="filter_pokemon"/>

<ul id="poke-list">

</ul>
      <PokemonList/>
    </div>;
  }
}
/*
class SearchPokemon extends Component{
  ul = document.getElementById("poke-list");
  
  
  pokes = document.getElementById("pokemon--species--list");

  //var render_lists = function(lists)
  {
    var li = "";
    for(index in lists)
    {
      li += "<li>" + lists[index] + "</li>";
    }
    ul.innerHTML = li;
  }
  render_lists(pokes);

  

  input = document.getElementById('filter-pokemon');
  var filterPokes = function(event)
  {
    keyword = input.value.toLowerCase();
    filtered_Pokemon = pokes.filter(function(poke)
    {
         poke = poke.toLowerCase();
         return poke.indexOf(keyword) > -1;
     });
     render_lists(filtered_Pokemon);
  }

  input.addEventListener('keyup', filterPokes);
}
*/
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
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(res=>res.json())
    .then(response=>{
      this.setState({
        species : response.results,
        loading : true,
        fetched : true
      });
    });
  }

  render(){
    const {fetched, loading, species} = this.state;
    let content ;
    if(fetched){
      content = <div className="pokemon--species--list">{species.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)}</div>;
    }else if(loading && !fetched){
        content = <p> Loading ...</p>;
    }
    else{
      content = <div/>;
    }
    return  <div>
      {content}
    </div>;
  }
}

render(<PokeApp/>,document.getElementById('app'))