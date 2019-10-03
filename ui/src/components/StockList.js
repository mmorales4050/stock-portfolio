import React, { Component } from 'react';
import Stock from './Stock';
import { Grid, Header, Segment} from 'semantic-ui-react'

class StockList extends Component {
  state = {
    total: 0.0
  }

  render() {
    return (
      <Grid.Column>
      <Header as='h3' content={this.props.portfolio ? `Portfolio ($${this.props.total.toFixed(2)})` : 'Transactions'} textAlign='center' />
      {
        this.props.portfolio
        ?
        this.props.user.stocks.map((stock) => {
          return <Stock stock={stock} portfolio={this.props.portfolio} value={this.props.values[stock.ticker]}/>
        })
        :
        this.props.user.transactions.map((stock) => {
          return <Stock stock={stock} portfolio={this.props.portfolio} value={this.props.values[stock.ticker]}/>
        })
      }
      </Grid.Column>
    );
  }

}

export default StockList;
