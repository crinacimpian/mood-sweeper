import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Status(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Remaining tiles: {props.remainingTiles}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 10
  },
  text: {
    fontSize: 16,
    color: 'blue',
    padding: 5,
    fontStyle: 'bold'
  }
});
