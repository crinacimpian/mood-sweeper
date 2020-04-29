import * as ActionTypes from '../actionTypes';

export const BoardReducer = (state = {board:{}}, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_BOARD:
            return {...state, board: action.payload};

        default:
            return state;
    }
};