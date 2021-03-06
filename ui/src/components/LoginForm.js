import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import Warning from './Warning';


class LoginForm extends Component {
  state = {
    register: this.props.register,
    name: "",
    email: "",
    password: "",
    warning: false
  }

  activeButton = () => {
    if(this.state.register) {
      return this.state.name === "" || this.state.email === "" || this.state.password === ""
    } else {
      return this.state.email === "" || this.state.password === ""
    }
  }

  inputWarning = () => {
    if(this.props.apiWarning){
      return <Warning message='API call limit reached please wait and try again later' warning={this.props.apiWarning}/>
    }else {
      if(this.state.register) {
        return <Warning message='You can only sign up for an account once with a given e-mail address' warning={this.state.warning}/>
      }
      return <Warning message='Please enter valid email and password' warning={this.state.warning}/>
    }
  }
  // Toggle between Login and Register Pages
  toggleRegister = (e) => {
    e.preventDefault()
    let newState = {...this.state, register: !this.state.register, warning: false}
    this.setState(newState)
  }

  // Update state to store input field values
  handleChange = (e) => {
    let newState = {...this.state}
    newState[e.target.placeholder] = e.target.value
    this.setState(newState)
  }

  // Handle create account and login actions
  handleClick = (e) => {
    if(this.state.register) {
      fetch("https://mighty-hamlet-54458.herokuapp.com/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
      })
      .then(res => res.json())
      .then(user => {
        if(user.name) {
          this.props.loginUser(user)
        } else {
          this.setState({...this.state, name: "", email: "", password: ""})
          if(!this.state.warning){
            this.setState({...this.state, warning: true})
            let i = setInterval(() => {
              this.setState({...this.state, warning: false})
              window.clearInterval(i)
            } , 5000)
          }
        }
      })
    }else {
      fetch("https://mighty-hamlet-54458.herokuapp.com/sessions", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
      .then(res => res.json())
      .then(user => {
        if(user.name) {
          this.props.loginUser(user)
        } else {
          this.setState({...this.state, email: "", password: ""})
          if(!this.state.warning){
            this.setState({...this.state, warning: true})
            let i = setInterval(() => {
              this.setState({...this.state, warning: false})
              window.clearInterval(i)
            } , 3000)
          }
        }
      })
    }
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' style={{color: "#44829e"}} textAlign='center'>
            {!this.state.register ? "Sign In" : "Register"}
          </Header>
          <Form size='large'>
            <Segment>
              {!this.state.register ? null : <Form.Input fluid  placeholder='name' value={this.state.name} onChange={this.handleChange}/>}
              <Form.Input fluid  placeholder='email' warning="email already used" value={this.state.email} onChange={this.handleChange}/>
              <Form.Input fluid placeholder='password' value={this.state.password} onChange={this.handleChange} type='password'/>

              <Button disabled={this.activeButton()} style={{backgroundColor: "#44829e", color: "white"}} fluid size='large' onClick={this.handleClick}>
                {!this.state.register ? "Login" : "Create Account"}
              </Button>
            </Segment>
          </Form>
          <Message>
            <a href='#' onClick={this.toggleRegister}>
            {!this.state.register ? "Sign Up" : "Login"}
            </a>
          </Message>
          {this.inputWarning()}
        </Grid.Column>
      </Grid>
    )
  }
}

export default LoginForm
