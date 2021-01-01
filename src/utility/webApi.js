import reduxApi from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';
import appConfig from './appConfig';

const options = {
  headers: {
    'X-API-KEY': appConfig.get('api.apiKey', {}),
  },
};

const ReduxApi = reduxApi({

  getOrder: {
    url: 'api/order',
    options,
    reducer(state, action) {
      switch (action.type) {
        case '@@redux-api@updateAddress_success':
          return {
            ...state,
            data: action.data,
          };
        default:
          return state;
      }
    },
  },

  orderPdf: {
    url: 'api/orderPdf',
    options,
  },

  listOrderPayments: {
    url: 'api/orderPayments',
    options,
  },

  syncPayment: {
    url: 'api/syncPayment',
    options: {
      ...options,
      method: 'post',
    },
  },

  updateAddress: {
    url: 'api/order/:target',
    options: {
      ...options,
      method: 'post',
    },
  },

  payOrder: {
    url: 'api/orderPayment',
    options: {
      ...options,
      method: 'post',
    },
  },

});

// Make the mirage wrapper work
const mirageFetch = (path, options) => fetch(path, options);
ReduxApi
  .use('fetch', adapterFetch(mirageFetch));

export default ReduxApi;
