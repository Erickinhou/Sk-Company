import React, { Fragment } from "react";
import Loader from "../Loader/Loader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Total } from "./OrderProducts.style";
import { ItemOrder } from "./ItemOrder/ItemOrder";
import { getAddressFromOrder } from "../../../utility/address";

const OrderProducts = ({ order, isLoading, isMobile }) => {
  const { order_items: items, order_taxes: taxes, value_wt, value } = order;
  const { city } = getAddressFromOrder(order, true); //isBilling to true
  const formatPercent = (number) => `${(number * 100).toFixed(2)}%`;

  console.log("taxes -->", taxes);
  console.log("items -->", items);
  if (isLoading) return <Loader />;
  return (
    <Container isMobile={isMobile}>
      <div className="scroll-x">
        {items?.map((item, index) => (
          <Fragment key={index}>
            {item.is_shipping ? (
              <ItemOrder
                isMobile={isMobile}
                item={{ ...item, city }}
                shipment={true}
              />
            ) : (
              <ItemOrder isMobile={isMobile} item={item} shipment={false} />
            )}
          </Fragment>
        ))}
      </div>
      <Total bold>
        <div className="mr-3">Totaal(Incl.BTW)</div>
        <div>€{value_wt}</div>
      </Total>
      <Total>
        <div className="d-flex flex-column">
          {taxes?.map((tax, index) => (
            <Fragment key={index}>
              <div className="d-flex mb-2">
                <div className="mr-3">BTW({formatPercent(tax?.tax)})</div>
                <div>€{tax?.value}</div>
              </div>
            </Fragment>
          ))}
        </div>
      </Total>
    </Container>
  );
};

OrderProducts.propTypes = {
  isMobile: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    order: state.getOrder.data
  };
};
export default connect(mapStateToProps)(OrderProducts);
