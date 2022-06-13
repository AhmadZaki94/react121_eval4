import * as types from './actionTypes';

const initState = {
    company: [],
    error: "",
    loading: false
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;

    switch(type) {
        case types.ADD_COMPANY_REQUEST:
            return {
                ...state,
                error: '',
                loading: true
            };
        case types.ADD_COMPANY_SUCCESS:
            return {
                ...state,
                error: "",
                laoding: true,
            };
        case types.ADD_COMPANY_FAILURE:
            return {
                ...state,
                error: payload,
                loading: true,
            };
        default:
            return state;
    };
}

export default reducer;