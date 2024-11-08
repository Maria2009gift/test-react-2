
import React, {Component} from 'react';

class PocemonForm extends Component {


    takeValue = (event) => {
        event.preventDefault()
        this.props.getName(event.currentTarget.elements.pokemonName.value)
        event.currentTarget.reset()
    }

    render () {
        return (
            <form onSubmit={this.takeValue}>
                <input type="text" name="pokemonName" />
                <button type="submit">Знайти покемона</button>
            </form>
        )
    }
}

export default PocemonForm;