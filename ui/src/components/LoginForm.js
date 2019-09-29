import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


class LoginForm extends Component {




  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            {this.props.signIn ? "Sign In" : "Register"}
          </Header>
          <Form size='large'>
            <Segment>
              {this.props.signIn ? null : <Form.Input fluid  placeholder='name'/>}
              <Form.Input fluid  placeholder='email'/>
              <Form.Input fluid placeholder='password'/>
              <Button color='teal' fluid size='large'>
                {this.props.signIn ? "Login" : "Create Account"}
              </Button>
            </Segment>
          </Form>
          <Message>
            <a href='#' onClick={this.props.toggleSignIn}>
            {this.props.signIn ? "Sign Up" : "Login"}
            </a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LoginForm
