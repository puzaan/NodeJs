import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCESS } from "../constant/userConstants";

export const userLoginReducer = (state = {}, action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loding: true};
            case USER_LOGIN_SUCESS:
                return{loding: false, userInfo: action.payload}
                case USER_LOGIN_FAIL:
                    return{loding: false, error: action.payload }
                    default:
                        return state;
    }
}