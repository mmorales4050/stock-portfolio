import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = {
    register: false
  }

  toggleRegister = (e) => {
    e.preventDefault()
    this.setState({register: !this.state.register})
  }

  render() {
    return (
      <div className="App">
      <LoginForm register={this.state.register} toggleRegister={this.toggleRegister} />
      </div>
    )
  }
}

export default App;
