import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import { newBoard } from '../redux/actions';
import Board from './BoardComponent';
import Status from './StatusComponent';
import Controls from './ControlsComponent';

const Game = ({ newBoard }) => {

  newBoard();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mood Sweeper <Icon name="smile-o" size={25} color="blue" /></Text>
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
  },
  text: {
    fontSize: 30,
    color: 'black',
    padding: 5,
    fontStyle: 'normal'
  }
});

export default connect(null, { newBoard })(Game);