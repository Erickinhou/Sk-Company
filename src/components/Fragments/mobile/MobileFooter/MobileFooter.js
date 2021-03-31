import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Container,
  Title,
  Text,
  Flex,
  OutsideLink
} from "./MobileFooter.style";
import StoreKeeper from "../../../images/StoreKeeper";
import { FormattedMessage } from "react-intl";

const MobileFooter = (props) => {
  const { number, order } = props;
  return (
    <Container>
      <Title>
        <Flex>
          <div>Bestelnummer:</div>
          <div>{number}</div>
        </Flex>
      </Title>
      <Text>
        <div>
          <FormattedMessage
            id="Footer.OrderContact"
            defaultMessage="Dit BestelVerzoek is gestuurd door {name}. Deze email is verstuurd om je bestelling af te ronden op jouw eigen verzoek"
            values={{ name: order?.shop_address?.shortname }}
          />
        </div>
        <div>
          <b>
            <FormattedMessage
              id="Footer.QuestionsTitle"
              defaultMessage="Vragen over je bestelling?"
            />
          </b>
          <br />
          <FormattedMessage
            id="Footer.ContactData"
            defaultMessage="Neem contact op met "
          />
          <b>{order?.shop_address?.shortname}</b>
          <br />
          {order?.shop_address?.contact_set?.email} /{" "}
          {order?.shop_address?.contact_set?.phone}
        </div>
      </Text>
      <Title>
        <div>
          <FormattedMessage
            id="Footer.poweredBy"
            defaultMessage="BestelVerzoek is een dienst van:  "
          />

          <StoreKeeper />
        </div>
        <OutsideLink>www.storekeeper.nl</OutsideLink>
      </Title>
    </Container>
  );
};

MobileFooter.propTypes = {
  OrderNumber: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    order: state.getOrder.data
  };
};

export default connect(mapStateToProps)(MobileFooter);
