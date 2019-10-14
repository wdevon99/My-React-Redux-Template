import { createStore } from 'redux';
import combineReducers from '../reducers/index';

export default() => {
    const store = createStore(combineReducers);
    return store;
};
