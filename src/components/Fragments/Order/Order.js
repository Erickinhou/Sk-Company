import React from 'react'
import { connect } from 'react-redux'
import { Container, Main } from './Order.style'
import PropTypes from 'prop-types'
import Header from './Header/Header'
import OrderProducts from './OrderProducts/OrderProducts'
import OrderAddress from '../OrderAddress/OrderAddress'
import { Footer } from '../Footer/Footer'

const Order = (props)=>{
  return (
    <Container>
      <Main rounded = {props.rounded}>
        <Header/>
          {props.address && <OrderAddress/>}
        <OrderProducts/>
          {props.address && <OrderAddress/>}
      </Main>
      {props.rounded && <Footer/>}
    </Container>
  )
}
Order.propTypes = {
  address: PropTypes.bool,
  rounded: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    order: state.getOrder.data,
  }
}
export default connect(mapStateToProps)(Order)