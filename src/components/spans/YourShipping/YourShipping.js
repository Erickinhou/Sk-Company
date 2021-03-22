import React from "react";
import PropTypes from "prop-types";
import { Container, ArrowDown } from "./YourShipping.style";
import { motion } from "framer-motion";

export const YourShipping = (props) => {
  const { hideOrderProducts, showOrderProducts } = props;
  const arrowVariants = {
    down: {
      rotate: 0
    },
    up: {
      rotate: 180
    }
  };
  const handleClick = (e) => {
    hideOrderProducts();
    return;
  };

  return (
    <Container>
      <h2>Jouw bestelling</h2>
      <motion.div
        animate={showOrderProducts ? "down" : "up"}
        variants={arrowVariants}
        onClick={handleClick}
      >
        <ArrowDown />
      </motion.div>
    </Container>
  );
};

YourShipping.propTypes = {
  hideItems: PropTypes.func,
  showOrderAddressPayment: PropTypes.bool
};
