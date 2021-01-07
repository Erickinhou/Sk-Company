import React, { Component } from 'react'
import {Row } from 'react-bootstrap'
import {Container, Footer, DownArrow} from './Create.style'
import OrderEditAddress from './OrderEditAddress'
import OrderPayments from './OrderPayments'
import Total from './Total'
import OrderCompleteButton from './buttons/OrderCompleteButton'
import { getAddressFromOrder, getAddressForUpdate } from '../utility/address';
import webApi from '../utility/webApi';
import Loader from '../components/Loader'
import { connect } from 'react-redux'

class Create extends Component {
  state = {
    isBilling: true,
    name: false
  }
  
  hideFullOrder () {
    this.setState({ showFullOrder: false })
  }

  setName(name){
    this.setState({name})
  }


  componentWillMount() {
    const { order, dispatch } = this.props;
    const { isBilling } = this.state;
    const fromAddress = getAddressFromOrder(order, !isBilling);
    const toAddress = getAddressForUpdate(order, fromAddress, isBilling);
    const target = isBilling ? 'billing_address' : 'shipping_address';
    console.log('toAddress -->',toAddress);
    console.log('fromAddress -->',fromAddress); 
    dispatch(webApi.actions.updateAddress({ target }, {
      body: JSON.stringify(toAddress),
    })).then((order)=> this.setName(order.created_by.name)); 
  } 

  
  render () {
    const { order } = this.props
    const { isBilling, name } = this.state;
    console.log('order',order);
    return (
      <div>
        <Container>
          {name ? (<h1> {`Hey ${name}`}, </h1>) : (<Loader/>)}
          <h2>
          Rond snel je BestelVerzoek af!
          </h2>
          <Row className="justify-content-center">
            <DownArrow/>
          </Row>
         
          <OrderEditAddress isBilling={isBilling}/>
          
    
          {/* <Jumbotron className='p-4'>
            { showFullOrder ?
              <OrderDetails hideFullOrder={() => this.hideFullOrder()}/> :
              <OrderSummary showFullOrder={() => this.showFullOrder()}/>}
          </Jumbotron> */}
            <Footer>
              <OrderPayments/>
              <Total />
              <div className='d-flow-root'>
                <div className='float-right'>
                  <OrderCompleteButton className='btn-block'/>
                </div>
              </div>
            </Footer>
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