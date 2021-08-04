import { FORM_DETAIL_FAIL, FORM_DETAIL_REQUEST, FORM_DETAIL_SUCESS } from "../constant/FormDetailConstants";


export const formListReducer = (state = {lists: []}, action) =>{
    switch(action.type){
        case FORM_DETAIL_REQUEST:
            return {loding: true, lists:[]};
            case FORM_DETAIL_SUCESS:
                return {loding: false, lists:action.payload};
                case FORM_DETAIL_FAIL:
                    return{loding: false, error: action.payload}
                    default:
                        return state;
    }

}