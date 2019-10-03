import React, { Component } from 'react';
import { Grid, Segment, Header, Input, Button } from 'semantic-ui-react'

class TransactionForm extends Component {

  state = {
    ticker: "",
    quantity: ""
  }

  handleChange = (e) => {
    let newState = {...this.state}
    newState[e.target.id] = e.target.value.toUpperCase()
    this.setState(newState)
  }

  handleClick = (e) => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.state.ticker}&interval=1min&outputsize=compact&apikey=3RDVDP5T21BBP1FG`)
      .then(res => res.json())
      .then(res => {
        if(res["Time Series (1min)"]){
          // Post Transaction
          fetch("http://localhost:3000/transactions", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
              user: this.props.user,
              ticker: this.state.ticker,
              shares: parseInt(this.state.quantity),
              price: parseFloat(res["Time Series (1min)"][res["Meta Data"]["3. Last Refreshed"]]["4. close"])
            })
          })
          .then(res => res.json())
          .then(res => {
            this.props.setUser(res)
          })
        }else {
          console.log("Invalid Ticker")
        }
      })
  }

  render() {
    return (
      <Grid.Column>
      <Header as='h3' textAlign='center'>
      Cash - ${this.props.user.cash}
      </Header>
        <Input type="text" id='ticker' placeholder='Ticker' onChange={this.handleChange}
        value={this.state.ticker}
        />
        <br/>
        <Input type="number" id='quantity' placeholder='Qty' style={{padding: "10px"}} onChange={this.handleChange}/>
        <br/>
        <Button onClick={this.handleClick}>Buy</Button>
      </Grid.Column>
    );
  }

}

export default TransactionForm;
