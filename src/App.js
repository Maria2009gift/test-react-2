
import './App.css';
import React, {Component} from 'react';
import PocemonInfo  from './components/PocemonInfo/PocemonInfo';
import PocemonForm from './components/PocemonForm/PocemonForm';

class App extends Component {

  state = {
    pokemonName: ""
  }

  getPokemonName = (name) => {
    this.setState({pokemonName: name})
  }

  render(){
    console.log(this.state.pokemonName);
    
    return (
      <>
        <PocemonForm getName={this.getPokemonName}/>
        <PocemonInfo pokemonName={this.state.pokemonName}/>
      </>
    )
  }
}

export default App;
