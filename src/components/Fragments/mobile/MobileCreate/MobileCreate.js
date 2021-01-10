import React, {useState, useEffect} from 'react'
import { getAddressFromOrder, getAddressForUpdate } from '../../../../utility/address';
import webApi from '../../../../utility/webApi';
import {Initial, Container} from './MobileCreate.style'
import { MobileHeader } from '../MobileHeader/MobileHeader'
import {MobileOrderProducts} from '../MobileOrderProducts/MobileOrderProducts'
import OrderEditAddress from '../../OrderEditAddress/OrderEditAddress'
import OrderPayments from '../../OrderPayments/OrderPayments'
import {YourShipping} from '../../../spans/YourShipping'
import {MobileFooter} from '../MobileFooter/MobileFooter'
import { connect } from 'react-redux';

export const MobileCreate = (props) => {
  const { order, dispatch} = props;
  const { number } = order;

  const [isBilling, setIsBilling] = useState(true)
  const [name, setName] = useState('')

  const ToogleIsBilling = ()=>{
    setIsBilling(!isBilling);
  }


  useEffect(()=>{
    const fromAddress = getAddressFromOrder(order, !isBilling);
    const toAddress = getAddressForUpdate(order, fromAddress, isBilling);
    const target = isBilling ? 'billing_address' : 'shipping_address';
    dispatch(webApi.actions.updateAddress({ target }, {
      body: JSON.stringify(toAddress),
    })).then((order)=> setName(order.created_by.name)); 
  }, [])

  return (
    <Container>
      <Initial >
        <MobileHeader name ={name}/>
        <OrderEditAddress isMobile ={true} ToogleIsBilling={ToogleIsBilling} isBilling={isBilling}/>
        <OrderPayments/>
        <YourShipping/>
      </Initial>
      <MobileOrderProducts/>
      <MobileFooter number = {number}/>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  order: state.getOrder.data,
});

export default connect(mapStateToProps)(MobileCreate);
