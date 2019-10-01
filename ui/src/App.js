import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './components/LoginForm'
import AccountPage from './components/AccountPage'

class App extends Component {
  state = {
    page: "LOGIN",
    user: {cash:1000}
  }

  loginUser = (user) => {
    this.setState({
      ...this.state,
      user: user
    })
    this.setPage("ACCOUNT")
  }
  setPage = (page) => {
    let newState = {...this.state, page: page}
    this.setState(newState)
  }

  renderPage = () => {
    switch (this.state.page) {
      case "LOGIN":
        return <LoginForm loginUser={this.loginUser} register={false} />
      case "ACCOUNT":
        return <AccountPage user={this.state.user}/>
    }
  }

  render() {
    return (
      <div className="App">
      {this.renderPage()}
      </div>
    )
  }
}

export default App;
