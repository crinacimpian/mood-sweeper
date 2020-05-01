import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { BoardReducer } from './reducer/boardReducer';
import { MoodReducer } from './reducer/moodReducer';

const config = {
    key: 'root',
    storage,
    debug: true
  }

export const ConfigureStore = () => {
    // storage.removeItem('persist:root');
    const store = createStore(
        persistCombineReducers(config, {
            board: BoardReducer,
            moods: MoodReducer
        }),
        applyMiddleware(thunk, logger)
    );

    const persistor = persistStore(store)

    return { persistor, store };
}



