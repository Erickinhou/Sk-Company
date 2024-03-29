import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { ArrowDown, Container } from "./YourCredentials.style";

const YourCredentials = (props) => {
  const { hideAddressPayment, showOrderAddressPayment } = props;
  const arrowVariants = {
    down: {
      rotate: 0
    },
    up: {
      rotate: 180
    }
  };
  const handleClick = (e) => {
    hideAddressPayment();
  };

  return (
    <Container>
      <h2>
        <FormattedMessage
          id="YourCredentials.Title"
          defaultMessage="Your details"
        />
      </h2>
      <motion.div
        animate={showOrderAddressPayment ? "down" : "up"}
        variants={arrowVariants}
        onClick={handleClick}
      >
        <ArrowDown />
      </motion.div>
    </Container>
  );
};

YourCredentials.propTypes = {
  hideAddressPayment: PropTypes.func,
  showOrderAddressPayment: PropTypes.bool
};

export { YourCredentials };
