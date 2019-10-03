import React, { Component } from 'react';
import {Message} from 'semantic-ui-react'
class Warning extends Component {

  render() {
    return (
      this.props.warning ? <Message color="yellow" size="small" content={this.props.message}/> : <div style={{height:"44.18px"}}/>
    );
  }

}

export default Warning;
