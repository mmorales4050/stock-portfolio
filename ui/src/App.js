import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = {
    signIn: true
  }

  toggleSignIn = (e) => {
    e.preventDefault()
    this.setState({singIn: !this.state.singIn})
  }

  renderLogin = () => {
    if(this.state.signIn) {
      return <LoginForm singIn={true} toggleSignIn={this.toggleSignIn}/>
    }else {
      return <LoginForm singIn={false} toggleSignIn={this.toggleSignIn}/>
    }
  }

  render() {
    return (
      <div className="App">
      {this.renderLogin()}
      </div>
    );
  }
}

export default App;
