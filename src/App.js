/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TabNavigation from './Nav/TabNavigation';
//import { MainNavigation } from './Nav/StackNavigation';

const App = () => {

  return (
    <Provider store={store}>
        <TabNavigation />
    </Provider>
  );
};


export default App;
