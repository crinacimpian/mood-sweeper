import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Tile from './TileComponent';
import { updateBoard } from '../redux/actions';

const mapStateToProps = state => {
  return {
    board: state.board
  }
}

const Board = (props) => {
  const board = props.board.board;
  const matrix = board.content;
  const width = matrix.length;
  const height = matrix[0].length;

  const _openTile = (tile) => {
    try {
      board.openTile(tile);
    } catch (e) { }
    props.updateBoard(board);
  }

  const Grid = () => {
    let matrixComponent = Array.from({ length: width }, (_, x) => {
      let row = Array.from({ length: height }, (_, y) => {
        return <Tile tile={matrix[x][y]} _openTile={_openTile} reveal={board.isComplete()} />
      });
      return (
        <View style={styles.row}>{row}</View>
      );
    });
    return <View style={styles.container}>{matrixComponent}</View>;
  };
  return (
    <Grid />
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    flex: 1
  },
  row: {
    flexDirection: 'row'
  }
});

export default connect(mapStateToProps, { updateBoard })(Board);