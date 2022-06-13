import axios from 'axios';
import * as types from './actionTypes';

const addCompanyRequest = (payload) => {
    return {
        type: types.ADD_COMPANY_REQUEST,
        payload
    };
};

const addCompanySuccess = (payload) => {
    return {
        type: types.ADD_COMPANY_SUCCESS,
        payload,
    };
};

const addCompanyFailure = (payload) => {
    return {
        type: types.ADD_COMPANY_FAILURE,
        payload,
    }
};

const addCompany = (payload) => (dispatch) => {

    dispatch(addCompanyRequest());
    axios.get('/')
    .then((r) => dispatch(addCompanySuccess(r.data)))
    .then((e) => dispatch(addCompanyFailure(e.data)))
};

export { addCompany };
