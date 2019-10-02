import React, { Component } from 'react';
import { Grid, Header, Segment} from 'semantic-ui-react'

class StockList extends Component {

  render() {
    return (
      <Grid.Column>
      <Header as='h3' content='Portfolio' textAlign='center' />
        <Segment>Content</Segment>
      </Grid.Column>
    );
  }

}

export default StockList;
