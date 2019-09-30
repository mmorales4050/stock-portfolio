import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import LoginForm from './components/LoginForm'
import AccountPage from './components/AccountPage'

class App extends Component {
  state = {
    page: "LOGIN",
    name: "",
    email: "",
    password: "",
    cash: 0
  }

  // componentDidMount() {
  //   fetch("http://localhost:3000/sessions", {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify({
  //       email: "sam11@gmail.com",
  //       password: "123"
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  // }

  setPage = (page) => {
    let newState = {...this.state, page: page}
    this.setState(newState)
  }

  renderPage = () => {
    switch (this.state.page) {
      case "LOGIN":
        return <LoginForm register={false} />
      case "ACCOUNT":
        return <AccountPage />
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
