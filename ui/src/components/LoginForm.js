import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'


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
    if(this.state.register) {
      return this.state.warning ? <Message color="yellow" size="small" content='You can only sign up for an account once with a given e-mail address'/> : <div style={{height:"44.18px"}}/>
    }
    return this.state.warning ? <Message color="yellow" size="small" content='Please enter valid email and password'/> : <div style={{height:"44.18px"}}/>
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
      fetch("http://localhost:3000/users", {
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
      fetch("http://localhost:3000/sessions", {
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
          <Header as='h2' color='teal' textAlign='center'>
            {!this.state.register ? "Sign In" : "Register"}
          </Header>
          <Form size='large'>
            <Segment>
              {!this.state.register ? null : <Form.Input fluid  placeholder='name' value={this.state.name} onChange={this.handleChange}/>}
              <Form.Input fluid  placeholder='email' warning="email already used" value={this.state.email} onChange={this.handleChange}/>
              <Form.Input fluid placeholder='password' value={this.state.password} onChange={this.handleChange} type='password'/>

              <Button disabled={this.activeButton()} color='teal' fluid size='large' onClick={this.handleClick}>
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
