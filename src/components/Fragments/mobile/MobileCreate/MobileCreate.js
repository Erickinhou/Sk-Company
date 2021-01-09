import React from 'react'
import {Initial, Container} from './MobileCreate.style'
import { MobileHeader } from '../MobileHeader/MobileHeader'
import OrderEditAddress from '../../../OrderEditAddress'
import OrderPayments from '../../../OrderPayments'
import {YourShipping} from '../../../spans/YourShipping'
import { connect } from 'react-redux';

export const MobileCreate = (props) => {
  const { name } = props.order.created_by
  return (
    <Container>
      <Initial>
        <MobileHeader name ={name}/>
        <OrderEditAddress isMobile ={true}/>
        <OrderPayments/>
        <YourShipping/>
      </Initial>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  order: state.getOrder.data,
});

export default connect(mapStateToProps)(MobileCreate);
