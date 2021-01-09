import React from 'react'
import { connect } from 'react-redux'
import { getAddressFromOrder } from '../../../utility/address'
import { Container, Row, AddressWrapper } from './OrderAddress.style'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FiPhone, FiUser} from 'react-icons/fi'

const OrderAddress = (props) => {
  const {street, streetnumber, city, zipcode} = getAddressFromOrder(props.order, true);
  const { name } = props.order.created_by
  return (
    <Container>
      <div>Verzendadres</div>
      <Row>
        <FiUser/>
        <div>
          {name}
        </div>
      </Row>
      <Row>
        <HiOutlineLocationMarker/>
        <AddressWrapper>
          <div>
            {street}
            {streetnumber}
          </div>
          <div>
            {city}
            {zipcode}
          </div>  
        </AddressWrapper>
      </Row>
      <Row>
        <FiPhone/>
        <div>
        +316 123 456 78
        </div>
      </Row>
    </Container>  
  )
}

const mapStateToProps = (state) => {
  return {
    order: state.getOrder.data,
  }
}

export default connect(mapStateToProps)(OrderAddress)

