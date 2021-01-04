import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { Container, Jumbotron } from 'react-bootstrap'
import OrderAddressRow from './OrderAddressRow'
import OrderDetails from './OrderDetails'
import OrderSummary from './OrderSummary'
import OrderPayments from './OrderPayments'
import OrderCompleteButton from './buttons/OrderCompleteButton'
import { getAddressFromOrder, getAddressForUpdate } from '../utility/address';
import webApi from '../utility/webApi';
import Loader from '../components/Loader'
import { connect } from 'react-redux'

class Create extends Component {
  state = {
    isBilling: true,
    readOnly: true,
    name: ''
  }
  
  hideFullOrder () {
    this.setState({ showFullOrder: false })
  }

  setName(name){
    this.setState({name})
  }

  useDifferentAddress(){
    this.setState({readOnly: !this.state.readOnly })
  }

  componentWillMount() {
    const { order, dispatch } = this.props;
    this.setName(order.created_by.name);  
    /* const { isBilling } = this.state;
    const fromAddress = getAddressFromOrder(order, !isBilling);
    const toAddress = getAddressForUpdate(order, fromAddress, isBilling);
    const target = isBilling ? 'billing_address' : 'shipping_address';
    console.log('toAddress -->',toAddress);
    console.log('fromAddress -->',fromAddress);
    dispatch(webApi.actions.updateAddress({ target }, {
      body: JSON.stringify(toAddress),
    })).then((order)=> this.setName(order.created_by.name)); */
  } 

  
  render () {
    const { order } = this.props
    const { isBilling, name, readOnly } = this.state;
    console.log('order',order);
    console.log('isBilling', isBilling);
    return (
      <div>
        <Container className='pt-4'>
          {name ? (<h1> {`Hey ${name}`} </h1>) : (<Loader/>)}
          <p>
          Rond snel je BestelVerzoek af!
          </p>
    
          <Jumbotron className='p-4'>
            <OrderAddressRow isBilling={isBilling} readOnly={readOnly}/>
            {/* <hr className='d-sm-none'/>
            <OrderAddressRow isBilling={true}/> */}
            <input type="checkbox" defaultChecked={this.state.readOnly} onChange={()=>this.useDifferentAddress()} /> Factuur adres anders dan bezargadres
          </Jumbotron>
    
          {/* <Jumbotron className='p-4'>
            { showFullOrder ?
              <OrderDetails hideFullOrder={() => this.hideFullOrder()}/> :
              <OrderSummary showFullOrder={() => this.showFullOrder()}/>}
          </Jumbotron> */}
    
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