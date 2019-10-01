import React, { Component } from 'react';
import { Grid, Segment, Header, Input, Button } from 'semantic-ui-react'

class TransactionForm extends Component {

  render() {
    return (
      <Grid.Column>
      <Header as='h3' textAlign='center'>
      Cash - ${this.props.user.cash}
      </Header>
        <Input placeholder='Ticker' />
        <br/>
        <Input placeholder='Qty' style={{padding: "10px"}}/>
        <br/>
        <Button>Buy</Button>
      </Grid.Column>
    );
  }

}

export default TransactionForm;
