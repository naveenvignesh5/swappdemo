import React from 'react';
import { Provider } from 'react-redux'

// Redux-Store
import Store from './src/config/store';

// Navigator
import AppNavigator from './src/config/routes';

const App = () => (
  <Provider store={Store}>
    <AppNavigator />
  </Provider>
);

export default App;
