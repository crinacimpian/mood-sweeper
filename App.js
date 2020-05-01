import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Header } from 'react-native-elements';

import Game from './components/GameComponent';

const { persistor, store } = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}>
        <SafeAreaProvider>
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Mood Sweeper', style: { color: '#fff', fontWeight: 'bold' } }}
            rightComponent={{ icon: 'spa', color: '#fff', icontType: 'material-community' }}
            />
          <SafeAreaView style={styles.container}>
            <Game />
          </SafeAreaView >
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
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