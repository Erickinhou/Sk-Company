import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert, Col, Spinner, Row } from "react-bootstrap";
import { Container, ImagePayment, Footer } from "./OrderPayments.style";
import Total from "../Total/Total";
import OrderCompleteButton from "../../buttons/OrderCompleteButton";
import { isEmpty } from "lodash";
import { FormattedMessage } from "react-intl";
import webApi from "../../../utility/webApi";
import { updatePaymentId } from "../../../actions/paymentActions";

class OrderPayments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  async componentDidMount() {
    try {
      const { dispatch } = this.props;
      await dispatch(webApi.actions.listOrderPayments());
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  render() {
    const { payments, paymentId, dispatch, isLoading } = this.props;
    const { error } = this.state;

    if (error) {
      return (
        <Alert variant="danger">
          <FormattedMessage
            id="Error.PaymentLoading"
            defaultMessage="An error occurred while loading your payment methods"
          />
          : {error}
        </Alert>
      );
    }

    if (isLoading) return <Spinner animation="grow" />;
    if (isEmpty(payments))
      return (
        <FormattedMessage
          id="OrderPayment.MissingPayments"
          defaultMessage="No payment methods available."
        />
      );

    const paymentsEl = payments.map((payment) => {
      const borderClassName = payment.id === paymentId ? true : false;
      const mainImage = `https://static.pay.nl/payment_profiles/100x100/${payment.eid}.png`;
      return (
        <Col
          key={payment.id}
          title={payment.title}
          onClick={() => dispatch(updatePaymentId(payment.id))}
          sm={4}
          xs={6}
          className="p-2"
        >
          <div className={`bg-white flex-center `}>
            <ImagePayment
              imageUrl={mainImage}
              imageUrlFallback={payment.image_url}
              alt={payment.title}
              border={borderClassName}
            />
          </div>
        </Col>
      );
    });

    return (
      <>
        <Footer>
          <Container>
            <p>Betaling</p>
            <Row className="scroll-x">{paymentsEl}</Row>
          </Container>
          <Total />
          <div className="d-flow-root float-center">
            <OrderCompleteButton className="btn-block" />
          </div>
        </Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  payments: state.listOrderPayments.data.data,
  isLoading: state.listOrderPayments.loading,
  paymentId: state.payment.paymentId
});

export default connect(mapStateToProps)(OrderPayments);
