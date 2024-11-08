
import React, {Component} from 'react';

class PocemonInfo extends Component {

    state = {
        pokemon: null,
        error: null,
        loading: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemonName !== this.props.pokemonName) { 
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
            .then(res => res.json())
            .then(pokemon => {
                this.setState({pokemon: pokemon})
            })

        }
    }

    render () {
        return (
            <div>
                {this.state.pokemon && <><h2>{this.state.pokemon.name}</h2>
                <img src={this.state.pokemon.sprites.other['official-artwork'].front_default} alt="" style={{ width: '150px' }} /></>}
               
            </div>
        )
    }
}

export default PocemonInfo;










