/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import Navigation from './src/navigation';
import store from './src/store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Navigation />
    </ReduxProvider>
  );
};

export default App;
