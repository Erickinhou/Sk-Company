import React from "react";
import { connect } from "react-redux";
import { getAddressFromOrder } from "../../../utility/address";
import { Container, Row, AddressWrapper } from "./OrderAddress.style";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { FormattedMessage } from "react-intl";

const OrderAddress = (props) => {
  const address = getAddressFromOrder(props.order, true);
  const {
    street,
    country_iso2,
    streetnumber,
    city,
    zipcode
  } = getAddressFromOrder(props.order, true);
  const { name } = props.order.created_by;

  return (
    <Container>
      <div>
        <FormattedMessage
          id="OrderAddressRow.ShippingAddress"
          defaultMessage="Je verzendadres"
        />
      </div>
      <Row>
        <FiUser />
        <div>{name}</div>
      </Row>
      <Row>
        <HiOutlineLocationMarker />
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
        <BiWorld />
        <div>{country_iso2}</div>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    order: state.getOrder.data
  };
};

export default connect(mapStateToProps)(OrderAddress);
