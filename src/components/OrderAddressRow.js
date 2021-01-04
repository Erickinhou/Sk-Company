import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
import { getAddressFromOrder, formatAddress, getAddressForUpdate } from '../utility/address';
import OrderAddressEditModal from './modals/OrderAddressEditModal'
import webApi from '../utility/webApi';
import CopyOrderAddressButton from './buttons/CopyOrderAddressButton';

class OrderAddressRow extends Component {
  
  render() {
    const { order, isBilling, readOnly } = this.props;
    const address = getAddressFromOrder(order, isBilling);
    return (
      <>
      <Row>
        <Col className="flex-middle" md={12}>
          <div>
            <OrderAddressEditModal isBilling={isBilling} address={address} readOnly={readOnly} />
          </div>
        </Col>
      </Row>
      {/* <Row>
        <Col className="flex-middle" md={12}>
          {hasAddress ? '' : <CopyOrderAddressButton isBilling={isBilling} />}
        </Col>
      </Row> */}
      </>
    );
  }
}

OrderAddressRow.propTypes = {
  order: PropTypes.object.isRequired,
  isBilling: PropTypes.bool,
  readOnly: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  order: state.getOrder.data,
});

export default connect(mapStateToProps)(OrderAddressRow);
