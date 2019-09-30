import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


class LoginForm extends Component {
  state = {
    register: this.props.register,
    name: "",
    email: "",
    password: ""
  }

  toggleRegister = (e) => {
    e.preventDefault()
    let newState = {...this.state, register: !this.state.register}
    this.setState(newState)
  }

  handleChange = (e) => {
    let newState = {...this.state}
    newState[e.target.placeholder] = e.target.value
    this.setState(newState)
  }

  handleClick = (e) => {
    console.log(this.state)
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
              {!this.state.register ? null : <Form.Input fluid  placeholder='name' onChange={this.handleChange}/>}
              <Form.Input fluid  placeholder='email' onChange={this.handleChange}/>
              <Form.Input fluid placeholder='password' onChange={this.handleChange}/>
              <Button color='teal' fluid size='large' onClick={this.handleClick}>
                {!this.state.register ? "Login" : "Create Account"}
              </Button>
            </Segment>
          </Form>
          <Message>
            <a href='#' onClick={this.toggleRegister}>
            {!this.state.register ? "Sign Up" : "Login"}
            </a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LoginForm
