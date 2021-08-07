import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userLoginReducer} from './reducer/userReducers'
import { formDetailReducer, formListReducer } from './reducer/FormDetailsReducer';
const reducer = combineReducers({
userLogin : userLoginReducer,
formList: formListReducer,
formById: formDetailReducer
});

const userInfoFromStore = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
const usertokenFromStore = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null
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