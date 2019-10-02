import React, { Component } from 'react';
import TransactionForm from './TransactionForm'
import StockList from './StockList'
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Menu} from 'semantic-ui-react'

class AccountPage extends Component {

  state = {
    portfolio: true
  }
  render() {
    return (
      <div>
    <Container>
      <Menu>
        <Menu.Menu stackable position="right">
        <Menu.Item name="Portfolio"></Menu.Item>
        <Menu.Item name="Transactions"></Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
      <Header as='h3' content='' textAlign='center' />
          <Grid container columns={2} divided relaxed stackable>
            <StockList portfolio={this.state.portfolio} user={this.props.user}/>
            <TransactionForm user={this.props.user}/>
          </Grid>
      </div>
    );
  }

}

export default AccountPage;
