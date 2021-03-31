import React from "react";
import { Container, Logo } from "./MobileHeader.style";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
export const MobileHeader = (props) => {
  const { name } = props;
  return (
    <Container>
      <Logo />
      <h1>
        {" "}
        <FormattedMessage id="Create.hey" defaultMessage="Hallo" /> {` ${name}`}
        ,{" "}
      </h1>
      <h3>
        <FormattedMessage
          id="Create.CompleteOrder"
          defaultMessage="Quickly complete your Order Request!"
        />
      </h3>
    </Container>
  );
};

MobileHeader.propTypes = {
  name: PropTypes.string.isRequired
};
