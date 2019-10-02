import React, { Component } from 'react';
import Stock from './Stock';
import { Grid, Header, Segment} from 'semantic-ui-react'

class StockList extends Component {
  state = {
    value: 0
  }

  componentDidMount() {
    // Fetch total value of portfolio
  }

  render() {
    return (
      <Grid.Column>
      <Header as='h3' content={this.props.portfolio ? `Portfolio ($${this.state.value})` : 'Transactions'} textAlign='center' />
      {
        this.props.user.stocks.map((stock) => {
          return <Stock stock={stock}/>
        })
      }
      </Grid.Column>
    );
  }

}

export default StockList;
