import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';

import {
  Button, Col, Form, Row, Spinner, Alert,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { getAddressForUpdate } from '../../utility/address';
import webApi from '../../utility/webApi';
import { getTranslatedCountries } from '../../utility/country';
import SetChangeAddressText from '../spans/SetChangeAddressText';
import appConfig from '../../utility/appConfig';
import { getIntl } from '../../utility/translations';


const OrderAddressEditModal = (props) => {
  const intl = getIntl();

  const [error, setError] = useState(false);

  const {
    isBilling, isLoading, address, order, dispatch, readOnly
  } = props;
  useEffect(()=>console.log(readOnly),readOnly );

  // Set default country_iso2
  if (!address.country_iso2) {
    address.country_iso2 = appConfig.get('initialData.company_country_iso2');
  }

  // Setup form
  const {
    handleSubmit, register, errors, reset,
  } = useForm({
    defaultValues: address,
  });

  // Get options for country select
  const countryOptions = getTranslatedCountries(intl).map((country) => (
    <option key={country.iso2} value={country.iso2}>{country.name}</option>
  ));

  const updateAddress = (newAddress) => {
    const target = isBilling ? 'billing_address' : 'shipping_address';
    return dispatch(webApi.actions.updateAddress({ target }, {
      body: JSON.stringify(newAddress),
    }));
  };

  const onSubmit = async (updatedAddress) => {
    // Reset error
    setError(false);

    try {
      // Update address
      const newAddress = getAddressForUpdate(order, updatedAddress, isBilling);
      await updateAddress(newAddress);
      // Resets internal form cache
      reset(updatedAddress);
    } catch (err) {
      setError(err.message);
    }
  };

  const renderFormGroupError = (message) => (
    <div className="invalid-feedback" style={{ display: 'block' }}>
      {message}
    </div>
  );

  const showError = () => (
    <Alert variant="danger">
      <FormattedMessage id="Error.UpdateAddress" defaultMessage="An error occurred while updating your address" />
      :
      {' '}
      {error}
    </Alert>
  );

  return (
    <>
      <h2 className="modal-header-text">
        Jouw gegevens
      </h2>

      {error ? showError() : ''}

      <Form onSubmit={handleSubmit(onSubmit)}>

        <Form.Group>
          <Form.Label>
            <FormattedMessage id="Address.PostalCode" defaultMessage="Postal code" />
          </Form.Label>
          <Form.Control
            disabled = {readOnly}
            type="text"
            placeholder={intl.formatMessage({ id: 'Address.PostalCode', defaultMessage: 'Postal code' })}
            name="zipcode"
            ref={register({
              required: intl.formatMessage({ id: 'Error.Required', defaultMessage: 'Required' }),
              pattern: {
                value: /\w+/,
                message: intl.formatMessage({ id: 'Error.Required', defaultMessage: 'Required' }),
              },
            })}
          />
          {errors.zipcode && renderFormGroupError(errors.zipcode.message)}
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <FormattedMessage
              id="OrderAddressEditModal.HouseNumberStreetFlatNumber"
              defaultMessage="House number, street and flat number"
            />
          </Form.Label>
          <Row>
            <Col>
              <Form.Control
                disabled = {readOnly}
                type="text"
                placeholder={intl.formatMessage({ id: 'Address.HouseNumber', defaultMessage: 'House number' })}
                name="streetnumber"
                ref={register({
                  required: intl.formatMessage({ id: 'Error.Required', defaultMessage: 'Required' }),
                  pattern: {
                    value: /^\d+$/,
                    message: intl.formatMessage({ id: 'Address.InvalidHouseNumber', defaultMessage: 'Invalid house number' }),
                  },
                })}
              />
              {errors.streetnumber && renderFormGroupError(errors.streetnumber.message)}
            </Col>
            <Col>
              <Form.Control
                disabled = {readOnly}
                type="text"
                placeholder={intl.formatMessage({ id: 'Address.Street', defaultMessage: 'Street' })}
                name="street"
                ref={register({
                  required: intl.formatMessage({ id: 'Error.Required', defaultMessage: 'Required' }),
                  pattern: {
                    value: /\w+/,
                    message: intl.formatMessage({ id: 'Error.Required', defaultMessage: 'Required' }),
                  },
                })}
              />
              {errors.street && renderFormGroupError(errors.street.message)}
            </Col>
            <Col>
              <Form.Control
                disabled = {readOnly}
                type="text"
                placeholder={intl.formatMessage({ id: 'Address.FlatNumber', defaultMessage: 'Flat number' })}
                name="flatnumber"
                ref={register()}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <FormattedMessage id="Address.City" defaultMessage="City" />
          </Form.Label>
          <Form.Control
            disabled = {readOnly}
            type="text"
            placeholder={intl.formatMessage({ id: 'Address.City', defaultMessage: 'City' })}
            name="city"
            ref={register({
              required: intl.formatMessage({ id: 'Error.Required', defaultMessage: 'Required' }),
              pattern: {
                value: /\w+/,
                message: intl.formatMessage({ id: 'Error.Required', defaultMessage: 'Required' }),
              },
            })}
          />
          {errors.city && renderFormGroupError(errors.city.message)}
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <FormattedMessage id="Address.Country" defaultMessage="Country" />
          </Form.Label>
          <Form.Control
            disabled = {readOnly}
            as="select"
            name="country_iso2"
            ref={register()}
          >
            {countryOptions}
          </Form.Control>
        </Form.Group>
        
        
        <Button disabled = {readOnly} type="submit" variant="success">
          {isLoading
            ? <Spinner animation="grow" size="sm" />
            : <FormattedMessage id="OrderAddressEditModal.Update" defaultMessage="Update address" />}
        </Button>
        &nbsp;
      </Form>
    </>
  );
};

OrderAddressEditModal.propTypes = {
  isBilling: PropTypes.bool,
  readOnly: PropTypes.bool,
  address: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  order: state.getOrder.data,
  isLoading: state.updateAddress.loading,
});

export default connect(mapStateToProps)(OrderAddressEditModal);
