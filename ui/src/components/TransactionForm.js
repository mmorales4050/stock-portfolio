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

  formatDate = () => {
    let date = new Date(new Date() - (60000 * 10)).toString().split(" ")[4]

    date = date.split("").reverse()
    date[0] = "0"
    date[1] = "0"

    return date.reverse().join("")
  }

  handleClick = (e) => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${"MSFT"}&interval=1min&outputsize=compact&apikey=3RDVDP5T21BBP1FG`)
      .then(res => res.json())
      .then(res => {
        if(res["Time Series (1min)"]){
          console.log(res["Time Series (1min)"])
          console.log(this.formatDate())
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
        <Input id='ticker' placeholder='Ticker' onChange={this.handleChange}/>
        <br/>
        <Input id='quantity' placeholder='Qty' style={{padding: "10px"}} onChange={this.handleChange}/>
        <br/>
        <Button onClick={this.handleClick}>Buy</Button>
      </Grid.Column>
    );
  }

}

export default TransactionForm;
