import React, { Component } from 'react';
import {Segment} from 'semantic-ui-react'
class Stock extends Component {

  render() {
    return (
      <Segment vertical textAlign="left">
      {
        this.props.portfolio
        ?
        `${this.props.stock.ticker.toUpperCase()} - ${this.props.stock.shares} Shares`

        :
        `BUY (${this.props.stock.ticker}) - ${this.props.stock.shares} Shares @ ${this.props.stock.price.toFixed(2)}`
      }
      {this.props.portfolio ? <span style={{float: "right"}}>{`$${(this.props.value * this.props.stock.shares).toFixed(2)}`}</span> : null}
      </Segment>
    );
  }

}

export default Stock;
