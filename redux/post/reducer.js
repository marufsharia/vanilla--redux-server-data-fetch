const { POST_REQUEST_PENDDING, POST_REQUEST_SUCCESSED, POST_REQUEST_REJECTED } = require("./actionType");



// inital state
const initalState = {
    loading: false,
    posts: [],
    error: ''
};

// reducer
const reducer = (state = initalState, action) => {

    switch (action.type) {
        case POST_REQUEST_PENDDING:
            return {
                ...state,
                loading: true,
                error: '',

            }
        case POST_REQUEST_SUCCESSED:
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: '',

            }
        case POST_REQUEST_REJECTED:
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload.meeage,

            }
        default:
            return state;
    }

}


module.exports.reducer = reducer;