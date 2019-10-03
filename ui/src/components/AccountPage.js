import React, { Component } from 'react';
import TransactionForm from './TransactionForm'
import StockList from './StockList'
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Menu, Loader} from 'semantic-ui-react'

class AccountPage extends Component {

  state = {
    portfolio: true,
    updateValues: false,
    values: {},
    total: 0.0,
    loading: true
  }

  componentDidMount() {
    this.getValues()
  }

  getDate = () => {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
  }

  getValues = () => {
    if(this.props.user.stocks.length === 0){
      this.setState({...this.state, loading: false})
    }
    // Fetch total value of portfolio
    // Fetch current stock values
    this.props.user.stocks.forEach((stock, i) => {
      fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock.ticker}&interval=1min&outputsize=full&apikey=3RDVDP5T21BBP1FG`)
        .then(res => res.json())
        .then(res => {
          if(res["Note"]){
            this.props.setApiWarningLogin()
          } else {
            let values = {...this.state.values}
            // Set Latest Price
            values[stock.ticker] = parseFloat(res["Time Series (1min)"][res["Meta Data"]["3. Last Refreshed"]]["4. close"])
            // Set Days opening price
            values[`${stock.ticker}-open`] = parseFloat(res["Time Series (1min)"][`${this.getDate()} 09:31:00`]["1. open"])
            this.setState({...this.state, values: values, total: this.state.total + (values[stock.ticker] * stock.shares)})
          }
        })
        // Loading finished
        .then( r => {
          if(i === (this.props.user.stocks.length - 1)){
            this.setState({...this.state, loading: false})
          }
        })
    })
  }

  setValue = (ticker, shares, price, openPrice) => {
      let values = {...this.state.values}
      values[ticker] = price
      values[`${ticker}-open`] = openPrice
      this.setState({...this.state, values: values, total: this.state.total + (price * shares)})
  }

  handleClick = (e) => {
    if(e.target.id === "portfolio") {
      this.setState({...this.state, portfolio: true})
    } else {
      this.setState({...this.state, portfolio: false})
    }
  }

  render() {
    return (
        <div>
        <Container>
          <Menu style={{border: "0px solid black", boxShadow: "0px 0px 0px black"}}>
            <Menu.Menu position="right">
            <Menu.Item id="portfolio" name="Portfolio" onClick={this.handleClick}></Menu.Item>
            <Menu.Item name="Transactions" onClick={this.handleClick}></Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
          <Header as='h3' content='' textAlign='center' />
              {
                this.state.loading ? <Loader active/>:
                <Grid container columns={2} divided relaxed stackable>
                <StockList values={this.state.values}  portfolio={this.state.portfolio} user={this.props.user} total={this.state.total}/>
                {
                  this.state.portfolio
                  ?
                  <TransactionForm user={this.props.user} setUser={this.props.setUser} setValue={this.setValue} getDate={this.getDate} apiWarning={this.props.apiWarning} setApiWarning={this.props.setApiWarning}/>
                  :
                  null
                }

              </Grid>
            }
            </div>
    );
  }

}

export default AccountPage;
