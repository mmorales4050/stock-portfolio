import React, { Component } from 'react';
import {Segment} from 'semantic-ui-react'
class Stock extends Component {

  setFont = () => {
    if(this.props.value > this.props.openValue) {
      return "green"
    } else if(this.props.value < this.props.openValue) {
      return "red"
    } else {
      return "grey"
    }
  }

  render() {
    return (
      <Segment vertical textAlign="left">
      {
        this.props.portfolio
        ?
        <span>
        <span style={{color: `${this.setFont()}`}}>{this.props.stock.ticker.toUpperCase()}</span> - {this.props.stock.shares} Shares
        </span>
        :
        `BUY (${this.props.stock.ticker}) - ${this.props.stock.shares} Shares @ ${parseFloat(this.props.stock.price).toFixed(2)} each`
      }
      {this.props.portfolio ? <span style={{float: "right", color: `${this.setFont()}`}}>{`$${(this.props.value * this.props.stock.shares).toFixed(2)}`}</span> : null}
      </Segment>
    );
  }

}

export default Stock;
