import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Jumbotron } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import appConfig from '../utility/appConfig';

class ThankYou extends Component {
  render() {
    const { order } = this.props;
    return (
      <div>
        <Container className="pt-4">
          <h1>
            <FormattedMessage
              id="ThankYou.Header"
              defaultMessage="Thank you for completing your order!"
            />
          </h1>
          <Jumbotron className="p-4">
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
                values={{ storename: appConfig.get('initialData.company_name') }}
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
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.getOrder.data,
});

export default connect(mapStateToProps)(ThankYou);
