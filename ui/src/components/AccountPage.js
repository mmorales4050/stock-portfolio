import React, { Component } from 'react';
import TransactionForm from './TransactionForm'
import StockList from './StockList'
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Menu} from 'semantic-ui-react'

class AccountPage extends Component {

  state = {
    portfolio: true,
    updateValues: false,
    values: {},
    total: 0.0
  }

  componentDidMount() {
    this.getValues()
  }

  getValues = () => {
    // Fetch total value of portfolio
    // Fetch current stock values
    this.props.user.stocks.forEach((stock) => {
      fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock.ticker}&interval=1min&outputsize=compact&apikey=3RDVDP5T21BBP1FG`)
        .then(res => res.json())
        .then(res => {
          let values = {...this.state.values}
          values[stock.ticker] = parseFloat(res["Time Series (1min)"][res["Meta Data"]["3. Last Refreshed"]]["4. close"])
          this.setState({...this.state, values: values, total: this.state.total + (values[stock.ticker] * stock.shares)})
        })
    })
  }

  setValue = (ticker, shares, price) => {
      let values = {...this.state.values}
      values[ticker] = price
      this.setState({...this.state, values: values, total: this.state.total + (values[ticker] * shares)})
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
            <StockList values={this.state.values}  portfolio={this.state.portfolio} user={this.props.user} total={this.state.total}/>
            {
              this.state.portfolio
              ?
              <TransactionForm user={this.props.user} setUser={this.props.setUser} setValue={this.setValue}/>
              :
              null
            }

          </Grid>
      </div>
    );
  }

}

export default AccountPage;
