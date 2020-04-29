import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import GameLostError from '../common/gamelost-error';
import Tile from './TileComponent';

const mapStateToProps = state => {
  return {
    board: state.board
  }
}

const Board = (props) => {
  const board = props.board.board;
  const matrix = board.reveal();
  const width = matrix.length;
  const height = matrix[0].length;

  const [isGameOver, endGame] = useState(false);
  const [exploded, reRender] = useState(false);

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
      if (e instanceof GameLostError) {
        endGame(true);
      }
    }
  }

  const Grid = () => {
    let matrixComponent = Array.from({ length: width }, (_, x) => {
      let row = Array.from({ length: height }, (_, y) => {
        return <Tile tile={matrix[x][y]} _openTile={_openTile} reveal={isGameOver} />
      });
      return (
        <View style={styles.row}>{row}</View>
      );
    });
    return <View>{matrixComponent}</View>;
  };
  return (
    <Grid />
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default connect(mapStateToProps)(Board);