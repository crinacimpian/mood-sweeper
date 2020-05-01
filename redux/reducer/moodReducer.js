import * as ActionTypes from '../actionTypes';

export const MoodReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_MOOD:
            return state.concat(action.payload);
        case ActionTypes.RESET_MOODS:
            return [];
        default:
            return state;
    }
};