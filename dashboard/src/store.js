import {createStore, combineReducers, applyMiddleware} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {formListReducer} from './reducer/FormDetailsReducer'
const reducer = combineReducers({

    formList: formListReducer
});
const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

);
export default store;