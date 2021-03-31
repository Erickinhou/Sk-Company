import React from "react";
import PropTypes from "prop-types";
import { FiBox, FiTruck } from "react-icons/fi";
import { Container, Start, Middle, End, SvgWrapper } from "./ItemOrder.style";

export const ItemOrder = (props) => {
  const { item, shipment, isMobile } = props;
  const formatCurrency = (money) =>
    money.toLocaleString(undefined, { style: "currency", currency: "EUR" });

  if (shipment) {
    return (
      <Container isMobile={isMobile}>
        <Start>
          <SvgWrapper>
            <FiTruck size={20} />
          </SvgWrapper>
        </Start>
        <Middle alignment={isMobile ? "center" : "flex-start"}>
          <div>{item.city} Nederland</div>
        </Middle>
        <End>{formatCurrency(item.value)}</End>
      </Container>
    );
  }

  return (
    <Container isMobile={isMobile}>
      <Start>
        <div>{item.quantity}</div>
      </Start>
      <Middle alignment={isMobile ? "center" : "flex-start"}>
        <div>{item.name}</div>
        {item.description && <div className="description"></div>}
      </Middle>
      <End>{formatCurrency(item.price)}</End>
    </Container>
  );
};

ItemOrder.propTypes = {
  item: PropTypes.object.isRequired,
  shipment: PropTypes.bool,
  isMobile: PropTypes.bool
};
