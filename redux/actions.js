import {UPDATE_BOARD} from './actionTypes';

export const updateBoard = (board) => ({
    type: UPDATE_BOARD,
    payload: board
});
