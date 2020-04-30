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
  const height = board.height;
  const width = board.width;

  const _openTile = (tile) => {
    try {
      board.openTile(tile);
    } catch (e) { }
    props.updateBoard(board);
  }

  const Grid = () => {
    let matrixComponent = Array.from({ length: height }, (_, y) => {
      let row = Array.from({ length: width }, (_, x) => {
        return <Tile tile={matrix[y][x]} _openTile={_openTile} reveal={board.isComplete()} />
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
});

export default connect(mapStateToProps, { updateBoard })(Board);