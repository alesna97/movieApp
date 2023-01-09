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
import {Provider as PaperProvider} from 'react-native-paper';
import theme from './src/theme';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
