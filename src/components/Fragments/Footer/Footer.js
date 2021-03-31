import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Title,
  Text,
  Flex,
  LogoWrapper,
  OutsideLink
} from "./Footer.style";
import StoreKeeper from "../../images/StoreKeeper";
import { FormattedMessage } from "react-intl";

const Footer = ({ order }) => {
  return (
    <Container>
      <Title>Vragen?</Title>
      <Flex>
        <Text>
          <FormattedMessage
            id="Footer.QuestionsTitle"
            defaultMessage="Vragen over je bestelling?"
          />
        </Text>
        <Text>
          <FormattedMessage
            id="Footer.QuestionsTitle"
            defaultMessage="Vragen over je bestelling?"
          />{" "}
          <FormattedMessage
            id="Footer.ContactData"
            defaultMessage="Neem contact op met "
          />{" "}
          {order?.shop_address?.shortname}
          {order?.shop_address?.contact_set?.email} /{" "}
          {order?.shop_address?.contact_set?.phone}
        </Text>
      </Flex>
      <Flex>
        <div>
          <h4>BestelVerzoek is een dienst van:</h4>
          <OutsideLink>www.storekeeper.nl</OutsideLink>
        </div>
        <LogoWrapper>
          <StoreKeeper width={"100%"} />
        </LogoWrapper>
      </Flex>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    order: state.getOrder.data
  };
};

export default connect(mapStateToProps)(Footer);
