import React, { Component } from 'react';
import Warning from './Warning';
import { Grid, Segment, Header, Input, Button } from 'semantic-ui-react'

class TransactionForm extends Component {

  state = {
    ticker: "",
    quantity: "",
    tickerWarning: false,
    decimalWarning: false,
    cashWarning: false
  }

  handleChange = (e) => {
    let newState = {...this.state}
    newState[e.target.id] = e.target.value.toUpperCase()
    this.setState(newState)
  }

  inputWarning = () => {
    if(this.props.apiWarning) {
      return <Warning message='API call limit reached please wait and try again later' warning={this.props.apiWarning}/>
    } else if(this.state.tickerWarning) {
      return <Warning message='Please enter valid ticker' warning={this.state.tickerWarning}/>
    } else if(this.state.decimalWarning){
      return <Warning message='Please enter whole number of shares' warning={this.state.decimalWarning}/>
    } else {
      return <Warning message='You do not have enough cash to make this purchase' warning={this.state.cashWarning}/>
    }
  }

  activeButton = () => {
    return this.state.ticker === "" || this.state.quantity === ""
  }

  handleClick = (e) => {
    // Check that quantity is whole number
    if(this.state.quantity.includes(".")){
      // invalid quantity
      this.setState({...this.state, decimalWarning: true, ticker: "", quantity: ""})
      let i = setInterval(() => {
        this.setState({...this.state, decimalWarning: false})
        window.clearInterval(i)
      } , 3000)
    } else {
      let price // save price of stock
      let openPrice // save days opening price of stock
      fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.state.ticker}&interval=1min&outputsize=full&apikey=3RDVDP5T21BBP1FG`)
        .then(res => res.json())
        .then(res => {
          if(res["Time Series (1min)"]){
            // Save price
            price = parseFloat(res["Time Series (1min)"][res["Meta Data"]["3. Last Refreshed"]]["4. close"])
            openPrice = parseFloat(res["Time Series (1min)"][`${this.props.getDate()} 09:31:00`]["1. open"])
            // Post Transaction
            fetch("http://localhost:3000/transactions", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({
                user: this.props.user,
                ticker: this.state.ticker,
                shares: parseInt(this.state.quantity),
                price: price
              })
            })
            .then(res => res.json())
            .then(res => {
              if(res["invalid"]){
                // not enough cash warning
                this.setState({...this.state, cashWarning: true, ticker: "", quantity: ""})
                let i = setInterval(() => {
                  this.setState({...this.state, cashWarning: false})
                  window.clearInterval(i)
                } , 3000)
              } else {
                // Valid transaction
                this.props.setValue(this.state.ticker, this.state.quantity, price, openPrice)
                this.setState({...this.state, ticker: "", quantity: ""})
                this.props.setUser(res)
              }
            })
          }else if (res["Note"]){
            // API warning
            this.setState({...this.state, ticker: "", quantity: ""})
            this.props.setApiWarning()
          } else {
            // invalid ticker warning
            this.setState({...this.state, tickerWarning: true, ticker: "", quantity: ""})
            let i = setInterval(() => {
              this.setState({...this.state, tickerWarning: false})
              window.clearInterval(i)
            } , 3000)
          }
        })
    }
  }

  render() {
    return (
      <Grid.Column>
      <Header as='h3' textAlign='center'>
      Cash - ${parseFloat(this.props.user.cash).toFixed(2)}
      </Header>
        <Input type="text" id='ticker' placeholder='Ticker' onChange={this.handleChange}
        value={this.state.ticker}
        />
        <br/>
        <Input type="number" id='quantity' placeholder='Qty' style={{padding: "10px"}}  onChange={this.handleChange} value={this.state.quantity}/>
        <br/>
        <Button  disabled={this.activeButton()} style={{backgroundColor: "#44829e", color: "white"}}  onClick={this.handleClick}>Buy</Button>
        {this.inputWarning()}
      </Grid.Column>
    );
  }

}

export default TransactionForm;
