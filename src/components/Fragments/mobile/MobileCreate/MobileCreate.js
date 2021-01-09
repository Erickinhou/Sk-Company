import React from 'react'
import {Initial, Container} from './MobileCreate.style'
import { MobileHeader } from '../MobileHeader/MobileHeader'
import {MobileOrderProducts} from '../MobileOrderProducts/MobileOrderProducts'
import OrderEditAddress from '../../../OrderEditAddress'
import OrderPayments from '../../../OrderPayments'
import {YourShipping} from '../../../spans/YourShipping'
import {MobileFooter} from '../MobileFooter/MobileFooter'
import { connect } from 'react-redux';

export const MobileCreate = (props) => {
  const { name } = props.order.created_by
  const { number } = props.order
  return (
    <Container>
      <Initial >
        <MobileHeader name ={name}/>
        <OrderEditAddress isMobile ={true}/>
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
