import React, { Component } from 'react';
import { Grid, Segment, Header, Input, Button } from 'semantic-ui-react'

class TransactionForm extends Component {

  state = {
    ticker: "",
    quantity: ""
  }

  handleChange = (e) => {
    let newState = {...this.state}
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }

  handleClick = (e) => {
    //post call here
  }

  render() {
    return (
      <Grid.Column>
      <Header as='h3' textAlign='center'>
      Cash - ${this.props.user.cash}
      </Header>
        <Input id='ticker' placeholder='Ticker' />
        <br/>
        <Input id='quantity' placeholder='Qty' style={{padding: "10px"}}/>
        <br/>
        <Button>Buy</Button>
      </Grid.Column>
    );
  }

}

export default TransactionForm;
