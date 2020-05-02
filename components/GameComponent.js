import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { newBoard, resetMoods, setGameOver } from '../redux/actions';
import Banner from './BannerComponent';
import Board from './BoardComponent';
import Status from './StatusComponent';
import Controls from './ControlsComponent';

const Game = ({ newBoard }) => {

  newBoard();
  resetMoods();

  return (
    <SafeAreaView style={styles.container}>
      <Banner/>
      <Board />
      <Status />
      <Controls />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
  }
});

export default connect(null, { newBoard, resetMoods, setGameOver })(Game);