import {combineReducers, createStore} from 'redux'
import dataReducer from './dataReducer';
import valueReducer from './inputValue-reducer'
import loaderReducer from './loaderReducer';

let reducers = combineReducers({
    value: valueReducer,
    loader : loaderReducer,
    data : dataReducer,
})

let store = createStore(reducers);

export default store;