import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { enrollReducer } from './reducers/enrollReducers';




const reducer = combineReducers({
    enrollList : enrollReducer
});

const initialState ={};

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(... middleware)
    )

)
export default store;