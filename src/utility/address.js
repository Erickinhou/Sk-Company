import {
  get, set, unset, cloneDeep,
} from 'lodash';
import React from 'react';
import Country from '../components/spans/Country';

export const REQUIRED_FIELDS = [
  'city',
  'street',
  'streetnumber',
  'zipcode',
  'country_iso2',
];

export const AVAILABLE_FIELDS = [
  'city',
  'street',
  'streetnumber',
  'zipcode',
  'flatnumber',
  'country_iso2',
];

/**
 * Checks if an address has all its required fields
 * @param address
 * @return {boolean}
 */
export function hasRequiredFields(address) {
  let hasFields = true;

  REQUIRED_FIELDS.forEach((field) => {
    if (!address[field]) hasFields = false;
  });

  return hasFields;
}

export function getAddressFromOrder(orderData, getBilling = true) {
  const { shipping_address, billing_address } = orderData;
  const targetAddress = getBilling ? billing_address : shipping_address;

  const preferredField = getBilling ? 'address_billing' : 'contact_address';
  const fallbackField = getBilling ? 'contact_address' : 'address_billing';

  const getFallback = (field) => get(targetAddress, `${fallbackField}.${field}`, '');
  const getPreferred = (field) => get(targetAddress, `${preferredField}.${field}`, getFallback(field));

  return {
    city: getPreferred('city'),
    street: getPreferred('street'),
    streetnumber: getPreferred('streetnumber'),
    zipcode: getPreferred('zipcode'),
    flatnumber: getPreferred('flatnumber'),
    country_iso2: getPreferred('country_iso2'),
  };
}

export function getAddressForUpdate(orderData, updateAddressData, setBilling) {
  const { shipping_address, billing_address } = orderData;
  const targetAddress = cloneDeep(setBilling ? billing_address : shipping_address);

  const targetField = setBilling ? 'address_billing' : 'contact_address';

  const setAddress = (field, value) => set(targetAddress, `${targetField}.${field}`, value);

  AVAILABLE_FIELDS.forEach((field) => {
    if (field in updateAddressData) {
      setAddress(field, updateAddressData[field]);
    }
  });

  /** Fields to get rid off */
  ['address_id', 'address_billing_id', 'parent_id', 'person_id', 'hash', 'id', 'relation_data_id', 'date_created']
    .forEach((field) => unset(targetAddress, field));

  return targetAddress;
}

export function formatAddress(address) {
  if (address) {
    const street = get(address, 'street', '-');
    const streetNumber = get(address, 'streetnumber', '');
    const zipcode = get(address, 'zipcode', '');
    const city = get(address, 'city', '');
    const countryIso2 = get(address, 'country_iso2', '');

    return (
      <span>
        {street}
        {' '}
        {streetNumber}
        ,
        {' '}
        {zipcode}
        ,
        {' '}
        {city}
        ,
        {' '}
        <Country countryIs2={countryIso2} />
      </span>
    );
  }
  return 'No address set yet';
}
