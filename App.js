import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import GameComponent from './components/GameComponent';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GameComponent />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  }
});