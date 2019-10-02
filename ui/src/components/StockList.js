import React, { Component } from 'react';
import Stock from './Stock';
import { Grid, Header, Segment} from 'semantic-ui-react'

class StockList extends Component {
  state = {
    value: 0,
    values: {}
  }

  componentDidMount() {
    // Fetch total value of portfolio
    this.props.user.stocks.forEach((stock) => {
      fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock.ticker}&interval=1min&outputsize=compact&apikey=3RDVDP5T21BBP1FG`)
        .then(res => res.json())
        .then(res => {
          let values = {...this.state.values}
          values[stock.ticker] = parseFloat(res["Time Series (1min)"][res["Meta Data"]["3. Last Refreshed"]]["4. close"])
          this.setState({...this.state, values: values})
        })
    })

  }

  render() {
    return (
      <Grid.Column>
      <Header as='h3' content={this.props.portfolio ? `Portfolio ($${this.state.value})` : 'Transactions'} textAlign='center' />
      {
        this.props.user.stocks.map((stock) => {
          return <Stock stock={stock} portfolio={this.props.portfolio} value={this.state.values[stock.ticker]}/>
        })
      }
      </Grid.Column>
    );
  }

}

export default StockList;
