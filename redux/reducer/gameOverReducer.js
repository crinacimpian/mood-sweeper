import * as ActionTypes from '../actionTypes';

export const GameOverReducer = (state = false, action) => {
    switch (action.type) {
        case ActionTypes.GAME_OVER:
            return action.payload;

        default:
            return state;
    }
};