import React, { Component } from "react";
import { connect } from "react-redux";
import { Row } from "react-bootstrap";
import { Container, DownArrow, Main } from "./ThankYou.style";
import { FormattedMessage } from "react-intl";
import appConfig from "../../../utility/appConfig";
import Footer from "../Footer/Footer";

class ThankYou extends Component {
  render() {
    const { order } = this.props;
    const name = order.created_by.name;
    return (
      <Container>
        <Main>
          <div>
            <h1> {`Hey ${name}`}, </h1>
            <h2>Bedankt voor je bestelling</h2>
            <Row className="justify-content-center">
              <DownArrow />
            </Row>
          </div>

          <h1>
            <FormattedMessage
              id="ThankYou.Header"
              defaultMessage="Thank you for completing your order!"
            />
          </h1>
          <div>
            <p>
              <FormattedMessage
                id="ThankYou.Total"
                defaultMessage="Your payment of € {total} is received."
                values={{ total: order.value_wt.toFixed(2) }}
              />
            </p>
            <p>
              <FormattedMessage
                id="ThankYou.ProcessingOrder"
                defaultMessage="Your order will now be processed by {storename}."
                values={{
                  storename: appConfig.get("initialData.company_name")
                }}
              />
            </p>
            <p>
              <FormattedMessage
                id="ThankYou.Email"
                defaultMessage="When the order is shipped out, you'll receive an email."
              />
            </p>

            <p>
              <FormattedMessage
                id="ThankYou.OrderId"
                defaultMessage="Your order ID is:	#{number}"
                values={{ number: order.number }}
              />
            </p>
          </div>
        </Main>
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.getOrder.data
});

export default connect(mapStateToProps)(ThankYou);
