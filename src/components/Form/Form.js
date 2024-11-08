import React, {Component} from 'react';

class Form extends Component {
    state = {
        name: "",
        tel: "",
        speaker: "student",
        license: true

      }

      handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.name)
        event.currentTarget.reset()
      }
    
      handleImputChange = (event) => {
        this.setState({[event.currentTarget.name]: event.currentTarget.value})
      }

      handleNameChange = (event) => {
        event.preventDefault()
        console.log(this.state);
            
          event.currentTarget.reset()
      }

      handleRadioChange = (event) => {
        this.setState({[event.currentTarget.name]: event.currentTarget.value})
      }

      handleCheckBox = () => {
        this.setState((prevState)=> {
          return({license: !prevState.license})
        })
      }
    
      render(){
    
        return (
          <>
            <form>
                <label>Ім'я
                  <input type="text" name='name' value={this.name} onChange={this.handleImputChange}/>
                </label>

                <label>Телефон
                  <input type="tel" name='tel' value={this.tel} onChange={this.handleImputChange}/>
                </label>

                <hr/>
                <button type='submit' onSubmit={this.handleNameChange}>Відправити</button>
                <hr/>
                
                <label>Студент
                  <input type="radio" name='student' value={this.tel} checked={this.state.speaker === "student"} onChange={this.handleRadioChange}/>
                </label>

                <label>Викладач
                  <input type="radio" name='teacher' value={this.tel} checked={this.state.speaker === "teacher"} onChange={this.handleRadioChange}/>
                </label>

                <hr/>

                <label>Погоджуюсь на участь в конфкренції
                  <input type='checkbox' name='license' checked={this.state.license} onChange={this.handleCheckBox}/>
                </label>
            </form>
          </>
        )
      }
}

export default Form
