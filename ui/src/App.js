import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './components/LoginForm'
import AccountPage from './components/AccountPage'

class App extends Component {

  state = {
    page: "LOGIN",
    user: {},
    apiWarning: false
}

  loginUser = (user) => {
    this.setState({
      ...this.state,
      user: user
    })
    this.setPage("ACCOUNT")
  }

  setUser = (user) => {
    this.setState({
      ...this.state,
      user: user
    })
  }

  setApiWarningLogin = () => {
    this.setState({...this.state, apiWarning: true})
    let i = setInterval(() => {
      this.setState({...this.state, apiWarning: false})
      window.clearInterval(i)
    } , 5000)
    this.setPage("LOGIN")
  }

  setApiWarning = () => {
    this.setState({...this.state, apiWarning: true})
    let i = setInterval(() => {
      this.setState({...this.state, apiWarning: false})
      window.clearInterval(i)
    } , 5000)
  }

  setPage = (page) => {
    let newState = {...this.state, page: page}
    this.setState(newState)
  }

  renderPage = () => {
    switch (this.state.page) {
      case "LOGIN":
        return <LoginForm loginUser={this.loginUser} register={false} apiWarning={this.state.apiWarning}/>
      case "ACCOUNT":
        return <AccountPage user={this.state.user} setUser={this.setUser} apiWarning={this.state.apiWarning} setApiWarning={this.setApiWarning} setApiWarningLogin={this.setApiWarningLogin}/>
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
