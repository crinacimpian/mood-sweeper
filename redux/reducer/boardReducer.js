import * as ActionTypes from '../actionTypes';

export const BoardReducer = (state = { board: {} }, action) => {
    switch (action.type) {
        case ActionTypes.NEW_BOARD:
            return { ...state, board: action.payload };
        case ActionTypes.UPDATE_BOARD:
            return { ...state, board: action.payload };

        default:
            return state;
    }
};