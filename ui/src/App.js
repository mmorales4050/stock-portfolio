import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './components/LoginForm'
import AccountPage from './components/AccountPage'

class App extends Component {
  state = {
    page: "ACCOUNT",
    user: {
      name: "Sam Smith",
      email: "samsmith@gmail.com",
      cash: 5000.00,
      password: "123",
      stocks: [
        {
          ticker: "msft",
          shares: 2
        }
      ],
      transactions: [
        {
          ticker: "WMD",
          shares: 2,
          price: 10.12
        },
        {
          ticker: "MMM",
          shares: 3,
          price: 11.22
        }
      ]
    }
  }

//   state = {
//     page: "LOGIN",
//     user: {}
// }

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
