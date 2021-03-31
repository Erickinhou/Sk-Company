import React from "react";
import { Container, Details, DownArrow, Logo } from "./OrderHeader.style";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

const Header = (props) => {
  return (
    <Container>
      <div>
        <Logo />
        <h2>
          <FormattedMessage
            id="OrderHeader.Title"
            defaultMessage="Jouw bestelling"
          />
        </h2>
        <DownArrow />
      </div>
      <div>
        <Details>
          <h4>
            <FormattedMessage id="OrderHeader.Order" defaultMessage="Order" />
          </h4>
          <h4>{props.order.number}</h4>
        </Details>
        <Details>
          <h4>
            <FormattedMessage
              id="OrderHeader.Name"
              defaultMessage="Jouw contact"
            />
          </h4>
          <h4>{props.order.created_by.name}</h4>
        </Details>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    order: state.getOrder.data
  };
};
export default connect(mapStateToProps)(Header);
