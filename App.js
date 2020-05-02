import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Header } from 'react-native-elements';

import Main from './components/MainComponent';

const { persistor, store } = ConfigureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});