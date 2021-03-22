import React from "react";
import Loader from "../Loader/Loader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Total } from "./OrderProducts.style";
import { ItemOrder } from "./ItemOrder/ItemOrder";
import { getAddressFromOrder } from "../../../utility/address";

const OrderProducts = ({ order, isLoading, isMobile }) => {
  const { order_items: items, order_taxes: taxes, value_wt, value } = order;
  const { city } = getAddressFromOrder(order, true); //isBilling to true
  //percent
  console.log("is props", isLoading);
  const getPercent = () => ((value / value_wt) * 100 * -1 + 100).toFixed(2);
  if (isLoading) return <Loader />;
  return (
    <Container isMobile={isMobile}>
      <div className="scroll-x">
        {items.map((item, index) => (
          <ItemOrder
            key={index}
            isMobile={isMobile}
            item={item}
            shipment={false}
          />
        ))}
        {taxes.map((tax, index) => (
          <ItemOrder
            key={index}
            isMobile={isMobile}
            item={{ ...tax, city }}
            shipment={true}
          />
        ))}
      </div>
      <Total bold>
        <div>Totaal(Incl.BTW)</div>
        <div>€{value_wt}</div>
      </Total>
      <Total>
        <div>BTW({getPercent()}%)</div>
        <div>€{value}</div>
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
