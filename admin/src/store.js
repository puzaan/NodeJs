import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userLoginReducer} from './reducer/userReducers'
import { formListReducer } from './reducer/FormDetailsReducer';
const reducer = combineReducers({
userLogin : userLoginReducer,
formList: formListReducer
});

const userInfoFromStore = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
const initialState = {
    userLogin: {
        userInfo : userInfoFromStore,
        formList: formListReducer
    }
};
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(... middleware)
    )

)

export default store;