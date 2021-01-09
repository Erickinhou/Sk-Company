import React from 'react'
import { connect } from 'react-redux'
import { Container } from './Order.style'
import Header from './Header/Header'
import OrderProducts from './OrderProducts/OrderProducts'
import OrderAddress from './OrderAddress/OrderAddress'

const Order = (props)=>{
  return (
    <Container>
      <Header/>
      <OrderAddress/>
      <OrderProducts/>
    </Container>

  )
}

const mapStateToProps = (state) => {
  return {
    order: state.getOrder.data,
  }
}
export default connect(mapStateToProps)(Order)