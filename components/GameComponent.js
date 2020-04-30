import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { newBoard } from '../redux/actions';
import Banner from './BannerComponent';
import Board from './BoardComponent';
import Status from './StatusComponent';
import Controls from './ControlsComponent';

const Game = ({ newBoard }) => {

  newBoard();

  return (
    <View style={styles.container}>
      <Banner/>
      <Board />
      <Status />
      <Controls />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
    flexDirection: 'column'
  }
});

export default connect(null, { newBoard })(Game);