import axios from "axios";
import {
    FORM_DETAIL_FAIL,
    FORM_DETAIL_ID_FAIL,
    FORM_DETAIL_ID_REQUEST,
    FORM_DETAIL_ID_SUCESS,
    FORM_DETAIL_REQUEST,
    FORM_DETAIL_SUCESS,
} from "../constant/FormDetailConstants";

export const formLists = () => async (dispatch) => {
    try {
        dispatch({ type: FORM_DETAIL_REQUEST });
        const { data } = await axios.get("http://localhost:5000/api/form/show");

        dispatch({
            type: FORM_DETAIL_SUCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FORM_DETAIL_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const formDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: FORM_DETAIL_ID_REQUEST });
        const { data } = await axios.get(
            `http://localhost:5000/api/form/showBy/${id}`
        );
        dispatch({
            type: FORM_DETAIL_ID_SUCESS,
            payload: data,
        });
    } catch (error) { 
        dispatch({
            type: FORM_DETAIL_ID_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
};
