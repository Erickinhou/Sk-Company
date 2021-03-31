import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Container, DownArrow } from "./Create.style";
import OrderEditAddress from "../OrderEditAddress/OrderEditAddress";
import OrderPayments from "../OrderPayments/OrderPayments";
import {
  getAddressFromOrder,
  getAddressForUpdate
} from "../../../utility/address";
import webApi from "../../../utility/webApi";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

const Create = (props) => {
  const [isBilling, setIsBilling] = useState(true);
  const [name, setName] = useState(false);
  const { order, dispatch, isMobile } = props;

  const ToogleIsBilling = () => {
    setIsBilling(!isBilling);
  };

  useEffect(() => {
    const fromAddress = getAddressFromOrder(order, !isBilling);
    const toAddress = getAddressForUpdate(order, fromAddress, isBilling);
    const target = isBilling ? "billing_address" : "shipping_address";
    dispatch(
      webApi.actions.updateAddress(
        { target },
        {
          body: JSON.stringify(toAddress)
        }
      )
    ).then((order) => setName(order.created_by.name));
  }, []);
  return (
    <Container isMobile={isMobile}>
      {name ? (
        <h1>
          {" "}
          <FormattedMessage id="Create.hey" defaultMessage="Hallo" />
          {` ${name}`},{" "}
        </h1>
      ) : (
        <Loader />
      )}
      <h2>
        <FormattedMessage
          id="Create.CompleteOrder"
          defaultMessage="Quickly complete your Order Request!"
        />
      </h2>
      <Row className="justify-content-center">
        <DownArrow />
      </Row>

      <OrderEditAddress
        ToogleIsBilling={ToogleIsBilling}
        isBilling={isBilling}
      />
      <OrderPayments />
    </Container>
  );
};

Create.propTypes = {
  isMobile: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    hasOrder: !!state.getOrder.sync,
    order: state.getOrder.data
  };
};

export default connect(mapStateToProps)(Create);
