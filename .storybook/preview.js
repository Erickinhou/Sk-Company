import React from 'react'
import { Provider } from 'react-redux';
import { RawIntlProvider } from 'react-intl';
import Store from '../src/store';
import { getIntl } from '../src/utility/translations';
import "bootstrap/dist/css/bootstrap.min.css";
import centered from "@storybook/addon-centered/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Storys) => (
    <Provider store={Store}>
      <RawIntlProvider value={getIntl()}>
          <Storys />
      </RawIntlProvider>
    </Provider>
  ),
];