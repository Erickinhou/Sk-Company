import React, {useState, useEffect} from 'react'
import { getAddressFromOrder, getAddressForUpdate } from '../../../../utility/address';
import webApi from '../../../../utility/webApi';
import {Initial, ItemsWraper} from './MobileCreate.style'
import { MobileHeader } from '../MobileHeader/MobileHeader'
import {MobileOrderProducts} from '../MobileOrderProducts/MobileOrderProducts'
import OrderEditAddress from '../../OrderEditAddress/OrderEditAddress'
import OrderPayments from '../../OrderPayments/OrderPayments'
import {YourShipping} from '../../../spans/YourShipping'
import {MobileFooter} from '../MobileFooter/MobileFooter'
import {motion} from 'framer-motion'
import { connect } from 'react-redux';

export const MobileCreate = (props) => {
  const { order, dispatch} = props;
  const { number } = order;

  const [isBilling, setIsBilling] = useState(true)
  const [showItems, SetShowItems] = useState(true)
  const [name, setName] = useState('')

  const ToogleIsBilling = ()=>{
    setIsBilling(!isBilling);
  }
  const hideItems = ()=>{
    SetShowItems(!showItems);
    console.log(showItems);
  }

  const borderVariance = {
    white: {
      backgroundColor: '#fff'
    },
    tranparent: {
      backgroundColor: 'transparent',
    }
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
    <motion.div animate={showItems ? 'transparent' : 'white'} variants={borderVariance}>
      <Initial >
        <MobileHeader name ={name}/>
        <OrderEditAddress isMobile ={true} ToogleIsBilling={ToogleIsBilling} isBilling={isBilling}/>
        <OrderPayments/>
        <YourShipping hideItems={hideItems} showItems={showItems}/>
      </Initial>
      <MobileOrderProducts showItems={showItems}/>
      <MobileFooter number = {number}/>
    </motion.div>
  )
}

const mapStateToProps = (state) => ({
  order: state.getOrder.data,
});

export default connect(mapStateToProps)(MobileCreate);
