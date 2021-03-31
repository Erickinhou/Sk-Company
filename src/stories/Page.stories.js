import React from 'react';

import { Page } from './Page';
import order from '../mock/data/order.json'
import OrderAddress from '../components/Fragments/OrderAddress/OrderAddress';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: OrderAddress,
};

const Template = (args) => 
  <OrderAddress {...order}/>


export const Default = Template.bind({});
Default.args = {
  order,
  story: true
};


