import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Col, Row, Spinner, Alert } from "react-bootstrap";
import {
  Container,
  ReactControl,
  ReactCheck,
  ReactForm,
  ReactGroup,
  WorldIcon,
  LocationIcon,
  CountryOption
} from "./OrderEditAddress.style";
import { useForm } from "react-hook-form";

import { SubmitButton } from "../../buttons/SubmitButton";
import {
  getAddressForUpdate,
  getAddressFromOrder
} from "../../../utility/address";
import webApi from "../../../utility/webApi";
import { getTranslatedCountries } from "../../../utility/country";
import appConfig from "../../../utility/appConfig";
import { getIntl } from "../../../utility/translations";

const OrderAddressEditModal = (props) => {
  const intl = getIntl();

  const submitButtonRef = useRef(null);
  const [error, setError] = useState(false);
  const [addressChanged, setAddressChanged] = useState(false);
  const [loaded, setloaded] = useState(true);

  const {
    isBilling,
    ToogleIsBilling,
    isLoading,
    setIsLoading,
    order,
    dispatch,
    isMobile
  } = props;

  const address = getAddressFromOrder(order, isBilling);
  // Set default country_iso2
  if (!address.country_iso2) {
    address.country_iso2 = appConfig.get("initialData.company_country_iso2");
  }

  // Setup form
  const { handleSubmit, register, errors, reset } = useForm({
    defaultValues: address
  });

  // Get options for country select
  const countryOptions = getTranslatedCountries(intl).map((country) => (
    <CountryOption key={country.iso2} value={country.iso2}>
      {country.name}
    </CountryOption>
  ));

  const updateAddress = (newAddress) => {
    const target = isBilling ? "billing_address" : "shipping_address";
    return dispatch(
      webApi.actions.updateAddress(
        { target },
        {
          body: JSON.stringify(newAddress)
        }
      )
    );
  };

  const onSubmit = async (updatedAddress) => {
    // Reset error
    setError(false);
    try {
      // Update address
      setloaded(false);
      const newAddress = getAddressForUpdate(order, updatedAddress, isBilling);
      setAddressChanged(false);
      console.log(setIsLoading);
      await updateAddress(newAddress);
      // Resets internal form cache
      reset(updatedAddress);
      setloaded(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const renderFormGroupError = (message) => (
    <div className="invalid-feedback" style={{ display: "block" }}>
      {message}
    </div>
  );

  const showError = () => (
    <Alert variant="danger">
      <FormattedMessage
        id="Error.UpdateAddress"
        defaultMessage="An error occurred while updating your address"
      />
      : {error}
    </Alert>
  );
  return loaded ? (
    <Container>
      {!isMobile && <h2>Jouw gegevens</h2>}

      {error ? showError() : ""}

      <ReactForm onSubmit={handleSubmit(onSubmit)}>
        <h4>Verzendadres</h4>
        <ReactGroup>
          <Row className="d-flex align-items-center">
            <LocationIcon />
            <Col>
              <ReactControl
                disabled={!isBilling}
                onClick={() => setAddressChanged(true)}
                type="text"
                placeholder="zipcode"
                name="zipcode"
                ref={register({
                  required: intl.formatMessage({
                    id: "Error.Required",
                    defaultMessage: "Required"
                  }),
                  pattern: {
                    value: /\w+/,
                    message: intl.formatMessage({
                      id: "Error.Required",
                      defaultMessage: "Required"
                    })
                  }
                })}
              />
              {errors.zipcode && renderFormGroupError(errors.zipcode.message)}
            </Col>
            <Col>
              <ReactControl
                disabled={!isBilling}
                onClick={() => setAddressChanged(true)}
                type="text"
                placeholder={intl.formatMessage({
                  id: "Address.HouseNumber",
                  defaultMessage: "House number"
                })}
                name="streetnumber"
                ref={register({
                  required: intl.formatMessage({
                    id: "Error.Required",
                    defaultMessage: "Required"
                  }),
                  pattern: {
                    value: /^\d+$/,
                    message: intl.formatMessage({
                      id: "Address.InvalidHouseNumber",
                      defaultMessage: "Invalid house number"
                    })
                  }
                })}
              />
              {errors.streetnumber &&
                renderFormGroupError(errors.streetnumber.message)}
            </Col>
          </Row>
        </ReactGroup>
        <ReactGroup>
          <Row>
            <Col>
              <ReactControl
                disabled={!isBilling}
                onClick={() => setAddressChanged(true)}
                type="text"
                placeholder={intl.formatMessage({
                  id: "Address.Street",
                  defaultMessage: "Street"
                })}
                name="street"
                ref={register({
                  required: intl.formatMessage({
                    id: "Error.Required",
                    defaultMessage: "Required"
                  }),
                  pattern: {
                    value: /\w+/,
                    message: intl.formatMessage({
                      id: "Error.Required",
                      defaultMessage: "Required"
                    })
                  }
                })}
              />
              {errors.street && renderFormGroupError(errors.street.message)}
            </Col>
            <Col>
              <ReactControl
                disabled={!isBilling}
                onClick={() => setAddressChanged(true)}
                type="text"
                placeholder={intl.formatMessage({
                  id: "Address.City",
                  defaultMessage: "City"
                })}
                name="city"
                ref={register({
                  required: intl.formatMessage({
                    id: "Error.Required",
                    defaultMessage: "Required"
                  }),
                  pattern: {
                    value: /\w+/,
                    message: intl.formatMessage({
                      id: "Error.Required",
                      defaultMessage: "Required"
                    })
                  }
                })}
              />
              {errors.city && renderFormGroupError(errors.city.message)}
            </Col>
          </Row>
        </ReactGroup>
        <ReactGroup>
          <Row className="d-flex align-items-center">
            <WorldIcon />
            <Col>
              <ReactControl
                disabled={!isBilling}
                onClick={() => setAddressChanged(true)}
                as="select"
                name="country_iso2"
                ref={register()}
              >
                {countryOptions}
              </ReactControl>
            </Col>
          </Row>
        </ReactGroup>
        &nbsp;
        <Row>
          <Col md="auto">
            <button
              style={{ opacity: 0, top: "-100vh", position: "absolute" }}
              type="submit"
              ref={submitButtonRef}
            >
              Submit Button
            </button>
            {addressChanged ? (
              <div
                onClick={() =>
                  submitButtonRef && submitButtonRef.current.click()
                }
              >
                <SubmitButton variant="success">
                  {isLoading ? (
                    <Spinner animation="grow" size="sm" />
                  ) : (
                    <FormattedMessage
                      id="OrderAddressEditModal.Update"
                      defaultMessage="Update address"
                    />
                  )}
                </SubmitButton>
              </div>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </ReactForm>
    </Container>
  ) : (
    <div className="w-100 d-flex justify-content-center">
      <Spinner animation="grow" size="sm" />
    </div>
  );
};

OrderAddressEditModal.propTypes = {
  isBilling: PropTypes.bool,
  isMobile: PropTypes.bool,
  ToogleIsBilling: PropTypes.func
};

const mapStateToProps = (state) => ({
  order: state.getOrder.data,
  isLoading: state.updateAddress.loading
});

export default connect(mapStateToProps)(OrderAddressEditModal);
