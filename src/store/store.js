import {createStore} from 'redux';
import rootReducer from './reducers/index';

export const store = createStore(rootReducer);
// store.subscribe(()=>{console.log(store.getState())});