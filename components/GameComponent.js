import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import BoardComponent from './BoardComponent';
import BoardGenerator from '../common/board-generator';

export default function GameComponent() {
  const board = BoardGenerator.generate(4, 5, 2);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mood Sweeper <Icon name="smile-o" size={25} color="blue" /></Text>
      <BoardComponent board={board}/>
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
