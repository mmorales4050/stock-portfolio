import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = {
    register: false
  }

  componentDidMount() {
    fetch("http://localhost:3000/sessions", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email: "sam11@gmail.com",
        password: "123"
      })
    })
    .then(res => res.json())
    .then(res => console.log(res))
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
