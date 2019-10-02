import React, { Component } from 'react';
import TransactionForm from './TransactionForm'
import StockList from './StockList'
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Menu} from 'semantic-ui-react'

class AccountPage extends Component {

  state = {
    portfolio: true
  }

  handleClick = (e) => {
    if(e.target.id === "portfolio") {
      this.setState({...this.state, portfolio: true})
    } else {
      this.setState({...this.state, portfolio: false})
    }
  }

  render() {
    return (
      <div>
    <Container>
      <Menu>
        <Menu.Menu stackable position="right">
        <Menu.Item id="portfolio" name="Portfolio" onClick={this.handleClick}></Menu.Item>
        <Menu.Item name="Transactions" onClick={this.handleClick}></Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
      <Header as='h3' content='' textAlign='center' />
          <Grid container columns={2} divided relaxed stackable>
            <StockList portfolio={this.state.portfolio} user={this.props.user}/>
            {
              this.state.portfolio
              ?
              <TransactionForm user={this.props.user}/>
              :
              null
            }

          </Grid>
      </div>
    );
  }

}

export default AccountPage;
