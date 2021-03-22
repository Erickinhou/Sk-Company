import React, { useState } from "react";
import { motion } from "framer-motion";
import { Initial, Container } from "./MobileThankYou.style";
import { MobileHeader } from "../MobileHeader/MobileHeader";
import { MobileOrderProducts } from "../MobileOrderProducts/MobileOrderProducts";
import OrderAddress from "../../OrderAddress/OrderAddress";
import { YourShipping } from "../../../spans/YourShipping/YourShipping";
import { MobileFooter } from "../MobileFooter/MobileFooter";
import { connect } from "react-redux";

const MobileThankYou = (props) => {
  const { name } = props.order.created_by;
  const { number } = props.order;
  const [showItems, SetShowItems] = useState(true);
  const hideItems = () => {
    SetShowItems(!showItems);
    console.log(showItems);
  };
  const borderVariance = {
    white: {
      backgroundColor: "#fff"
    },
    tranparent: {
      backgroundColor: "transparent"
    }
  };

  return (
    <motion.div
      animate={showItems ? "transparent" : "white"}
      variants={borderVariance}
    >
      <Initial>
        <MobileHeader name={name} />
        <OrderAddress />
        <YourShipping hideItems={hideItems} showItems={showItems} />
      </Initial>
      <MobileOrderProducts showItems={showItems} />
      <MobileFooter number={number} />
    </motion.div>
  );
};

const mapStateToProps = (state) => ({
  order: state.getOrder.data
});

export default connect(mapStateToProps)(MobileThankYou);
