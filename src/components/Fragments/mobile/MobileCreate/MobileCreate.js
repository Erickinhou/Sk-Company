import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
import {
  getAddressFromOrder,
  getAddressForUpdate
} from "../../../../utility/address";
import webApi from "../../../../utility/webApi";
import { Initial, Middle, AnimationWrapper } from "./MobileCreate.style";
import { MobileHeader } from "../MobileHeader/MobileHeader";
import OrderProducts from "../../OrderProducts/OrderProducts";
import OrderEditAddress from "../../OrderEditAddress/OrderEditAddress";
import OrderPayments from "../../OrderPayments/OrderPayments";
import { YourShipping } from "../../../spans/YourShipping/YourShipping";
import { YourCredentials } from "../../../spans/YourCredentials/YourCredentials";
import MobileFooter from "../MobileFooter/MobileFooter";

export const MobileCreate = (props) => {
  const { order, dispatch } = props;
  const { number } = order;

  const [isBilling, setIsBilling] = useState(true);
  const [showOrderProducts, setShowOrderProducts] = useState(true);
  const [showOrderAddressPayment, setShowOrderAddressPayment] = useState(true);
  const [name, setName] = useState("");

  const ToogleIsBilling = () => {
    setIsBilling(!isBilling);
  };
  const hideOrderProducts = () => {
    setShowOrderProducts(!showOrderProducts);
  };
  const hideAddressPayment = () => {
    setShowOrderAddressPayment(!showOrderAddressPayment);
  };

  const showVariance = {
    show: {
      opacity: 1,
      y: 0
    },
    hidden: {
      opacity: 0,
      y: "-100%"
    }
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
    <div>
      <Initial>
        <MobileHeader name={name} />
        <YourShipping
          hideOrderProducts={hideOrderProducts}
          showOrderProducts={showOrderProducts}
        />
        <AnimationWrapper>
          <AnimatePresence>
            {showOrderProducts && (
              <motion.div
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={showVariance}
              >
                <OrderProducts />
              </motion.div>
            )}
          </AnimatePresence>
        </AnimationWrapper>
      </Initial>
      <YourCredentials
        hideAddressPayment={hideAddressPayment}
        showOrderAddressPayment={showOrderAddressPayment}
      />
      <AnimationWrapper>
        <AnimatePresence>
          {showOrderAddressPayment && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={showVariance}
            >
              <Middle>
                <OrderEditAddress
                  isMobile={true}
                  ToogleIsBilling={ToogleIsBilling}
                  isBilling={isBilling}
                />
                <OrderPayments />
              </Middle>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimationWrapper>
      <MobileFooter number={number} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.getOrder.data
});

export default connect(mapStateToProps)(MobileCreate);
