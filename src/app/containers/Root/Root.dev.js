import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import routes from '../../routes';

import DevTools from '../Common/DevTools';


const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      {routes}
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
