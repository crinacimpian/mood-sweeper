import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Tile from './TileComponent'
import WarningError from '../common/warning-error';
import GameLostError from '../common/gamelost-error';

export default function BoardComponent(props) {

  const board = props.board;
  const matrix = board.reveal();
  const width = matrix.length;
  const height = matrix[0].length;

  const [isGameOver, endGame] = useState(false);
  const [exploded, reRender] = useState(false);

  const Grid = () => {
    const _openTile = (tile) => {
      try {
        let isExploded = board.openTile(tile);
        alert('Remaining tiles ' + board.flipedTiles + ', total' + board.totalTiles)
        if (board.isComplete()) {
          alert('End game');
          endGame(true);
          return;
        }
        if (isExploded) {
          reRender(!exploded);
        }
      } catch (e) {
        if (e instanceof WarningError) {
          alert("Warning error" + e);
          return;
        }
        if (e instanceof GameLostError) {
          alert("Game over");
          endGame(true);
        }
      }
    }
    let matrixComponent = Array.from({ length: width }, (_, x) => {
      let row = Array.from({ length: height }, (_, y) => {
        return <Tile tile={matrix[x][y]} _openTile={_openTile} reveal={isGameOver} />
      });
      return (
        <View style={{ flex: 1, flexDirection: 'row' }}>{row}</View>
      );
    });
    return <View>{matrixComponent}</View>;
  };
  return (
    <Grid />
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 10
  },
  text: {
    fontSize: 16,
    color: '#1bb',
    padding: 10
  }
});
