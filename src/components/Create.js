import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { Container, Jumbotron } from 'react-bootstrap'
import OrderAddressRow from './OrderAddressRow'
import OrderDetails from './OrderDetails'
import OrderSummary from './OrderSummary'
import OrderPayments from './OrderPayments'
import OrderCompleteButton from './buttons/OrderCompleteButton'
import { connect } from 'react-redux'

class Create extends Component {
  state = {
    showFullOrder: false
  }
  
  hideFullOrder () {
    this.setState({ showFullOrder: false })
  }
  
  showFullOrder () {
    this.setState({ showFullOrder: true })
  }
  
  render () {
    const { order } = this.props
    return (
      <div>
        <Container className='pt-4'>
          <h1>
            <FormattedMessage
              id='Main.OrderNumber'
              defaultMessage='Your order #{number}'
              values={{ number: order.number }}/>
          </h1>
    
          <p>
            <FormattedMessage
              id='Main.Description'
              defaultMessage='Please complete the details below to complete your order.'/>
          </p>
    
          <Jumbotron className='p-4'>
            <OrderAddressRow isBilling={false}/>
            <hr className='d-sm-none'/>
            <OrderAddressRow isBilling={true}/>
          </Jumbotron>
    
          <Jumbotron className='p-4'>
            {this.state.showFullOrder ?
              <OrderDetails hideFullOrder={() => this.hideFullOrder()}/> :
              <OrderSummary showFullOrder={() => this.showFullOrder()}/>}
          </Jumbotron>
    
          <Jumbotron className='p-4'>
            <OrderPayments/>
      
            <div className='d-flow-root'>
              <div className='float-right'>
                <OrderCompleteButton className='btn-block'/>
              </div>
            </div>
          </Jumbotron>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hasOrder: !!state.getOrder.sync,
    order: state.getOrder.data,
  }
}

export default connect(mapStateToProps)(Create)