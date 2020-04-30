import { UPDATE_BOARD, NEW_BOARD } from './actionTypes';
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
