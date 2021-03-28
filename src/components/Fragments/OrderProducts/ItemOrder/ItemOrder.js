import React from "react";
import PropTypes from "prop-types";
import { FiBox, FiTruck } from "react-icons/fi";
import { Container, Start, Middle, End, SvgWrapper } from "./ItemOrder.style";

export const ItemOrder = (props) => {
  const { item, shipment, isMobile } = props;
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
        <End>€{item.value}</End>
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
      </Middle>
      <End>€{item.price}</End>
    </Container>
  );
};

ItemOrder.propTypes = {
  item: PropTypes.object.isRequired,
  shipment: PropTypes.bool,
  isMobile: PropTypes.bool
};
