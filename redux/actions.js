import { UPDATE_BOARD, NEW_BOARD, ADD_MOOD, RESET_MOODS } from './actionTypes';
import BoardGenerator from '../common/board-generator';

export const newBoard = (width, height) => {
    const board = BoardGenerator.generate(width, height);
    return ({
        type: NEW_BOARD,
        payload: board
    })
};

export const updateBoard = (board) => ({
    type: UPDATE_BOARD,
    payload: board
});

export const addMood = (mood) => ({
    type: ADD_MOOD,
    payload: mood
});

export const resetMoods = () => ({
    type: RESET_MOODS,
    payload: {}
});
