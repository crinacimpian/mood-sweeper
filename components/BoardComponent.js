import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ModalAlert from 'react-native-modal-alert';
import { connect } from 'react-redux';

import Tile from './TileComponent';
import MoodChoices from './MoodChoicesComponent';
import PosMoodChoice from './PosMoodChoiceComponent';
import { updateBoard, addMood } from '../redux/actions';
import GameLostError from '../common/gamelost-error';

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
  const [moodModal, _showMoodModal] = useState(0);
  const [moodChoice, _setMoodChoice] = useState(0);
  const [currentTile, _setTile] = useState(false);

  const _openTile = (tile) => {
    try {
      _setTile(tile);
      board.openTile(tile);
      props.updateBoard(board);
    } catch (e) {
      if (e instanceof GameLostError) {
        _showMoodModal(1);
      }
    }
  }

  const _addMood = (mood) => {
    props.addMood(mood);
    currentTile.mood = mood;
    props.updateBoard(board);
  }
  const _completedPosMood = (mood) => {
    console.log('_completedPosMood')
    _showMoodModal(0);
    _addMood(mood.mood);
  }

  const _chooseMood = (mood) => {
    _setMoodChoice(mood);
    if (mood.happinessScore > 0) {
      _showMoodModal(2);
    } else {
      _showMoodModal(0);
      _addMood(mood.mood);
    }
  }

  const MoodAlert = () => {
    return <ModalAlert animationType={"slide"} transparent={false}
      visible={moodModal==1} onRequestClose={() => _showMoodModal(0)}>
      <MoodChoices _chooseMood={_chooseMood} />
    </ModalAlert>
  }

  const PosMoodAlert = () => {
    return <ModalAlert animationType={"slide"} transparent={false}
      visible={moodModal==2} onRequestClose={() => _showMoodModal(0)}>
      <PosMoodChoice _completedPosMood={_completedPosMood}  mood={moodChoice}/>
    </ModalAlert>
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
    <View>
      <MoodAlert />
      <PosMoodAlert />
      <Grid />
    </View>
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
  },
  modal: {
    justifyContent: 'center',
    margin: 20,
    backgroundColor: '#fff'
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    backgroundColor: '#0cbdee',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
    padding: 5
  },
  modalText: {
    fontSize: 18,
    margin: 10
  },
});

export default connect(mapStateToProps, { updateBoard, addMood })(Board);