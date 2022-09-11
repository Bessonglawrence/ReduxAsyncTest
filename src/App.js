/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation from './Nav/Navigation';
import { Provider } from 'react-redux';
import store from './redux/store';
import TabNavigation from './Nav/TabNavigation';

const App = () => {

  return (
    <Provider store={store}>
        <TabNavigation />
    </Provider>
  );
};


export default App;
