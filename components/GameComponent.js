import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import BoardGenerator from '../common/board-generator';
import { updateBoard } from '../redux/actions';
import Board from './BoardComponent';
import Status from './StatusComponent';

const Game = ({updateBoard}) => {
  const board = BoardGenerator.generate(4, 5, 2);
  updateBoard(board);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mood Sweeper <Icon name="smile-o" size={25} color="blue" /></Text>
      <Board/>
      <Status remainingTiles={board.flipedTiles} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 10
  },
  text: {
    fontSize: 30,
    color: 'blue',
    padding: 5,
    fontStyle: 'bold'
  }
});

export default connect(null, {updateBoard})(Game);