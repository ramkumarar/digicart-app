import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root';
import configureStore from './store/configureStore';
import { AppContainer } from 'react-hot-loader';
import { overrideComponentTypeChecker } from 'react-toolbox';

const store = configureStore();

const rootEl = document.getElementById('app');


const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root store={store} />
    </AppContainer>,
    rootEl
  );
};

if (process.env.NODE_ENV !== 'production') {
  overrideComponentTypeChecker((classType, reactElement) => (
    reactElement && (
      reactElement.type === classType
      || reactElement.type.name === classType.displayName
    )
  ));
  if (module.hot) {
    module.hot.accept('./containers/DemoApp', render);
  }
}

render();


