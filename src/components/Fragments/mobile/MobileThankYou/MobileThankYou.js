import React from 'react'
import {Initial, Container} from './MobileThankYou.style'
import { MobileHeader } from '../MobileHeader/MobileHeader'
import {MobileOrderProducts} from '../MobileOrderProducts/MobileOrderProducts'
//import OrderAddress from '../../OrderProducts'
import OrderAddress from '../../OrderAddress/OrderAddress'
import {YourShipping} from '../../../spans/YourShipping'
import {MobileFooter} from '../MobileFooter/MobileFooter'
import { connect } from 'react-redux';

const MobileThankYou = (props) => {
  const { name } = props.order.created_by
  const { number } = props.order
  return (
    <Container>
      <Initial >
        <MobileHeader name ={name}/>
        <OrderAddress/> 
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

export default connect(mapStateToProps)(MobileThankYou);