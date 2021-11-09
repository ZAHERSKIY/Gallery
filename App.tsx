import React from 'react';
import {Provider} from 'react-redux';
import NavigationStack from './src/Navigation/NavigationStack';
import store from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationStack />
    </Provider>
  );
};

export default App;
