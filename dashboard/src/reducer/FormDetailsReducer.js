import { FORM_DETAIL_FAIL, FORM_DETAIL_REQUEST, FORM_DETAIL_SUCESS } from "../constant/FormConstants";

export const formListReducer = (state = {lists: []}, action) =>{
    switch(action.type){
        case FORM_DETAIL_REQUEST:
            return {loading: true, lists:[]};
            case FORM_DETAIL_SUCESS:
                return {loading: false, lists:action.payload};
                case FORM_DETAIL_FAIL:
                    return{loading: false, error: action.payload}
                    default:
                        return state;
    }

}