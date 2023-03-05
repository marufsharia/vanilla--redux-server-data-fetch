// const { POST_REQUEST_PENDDING, POST_REQUEST_SUCCESSED, POST_REQUEST_SUCCESSED } = require("./post/actionType");
const fetch = require("node-fetch");
const { createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk");

//action type
const POST_REQUEST_PENDDING = "post/post_request_pendding";
const POST_REQUEST_SUCCESSED = "post/post_request_successed";
const POST_REQUEST_REJECTED = "post/post_request_rejected";


// inital state
const initalState = {
    loading: false,
    posts: [],
    error: ''
};

//action creator
const fetchPostRequested = () => {
    return {
        type: POST_REQUEST_PENDDING
    };
};

const featchPostSuccessed = (posts) => {
    return {
        type: POST_REQUEST_SUCCESSED,
        payload: posts,

    };
};

const fetchPostRejected = (error) => {
    return {
        type: POST_REQUEST_SUCCESSED,
        payload: error,
    };
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

// thunk funaction

const fetchPosts = () => {
    return async (dispatch) => {
        dispatch(fetchPostRequested());
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
            const posts = await response.json();
            dispatch(featchPostSuccessed(posts));
        } catch (error) {
            dispatch(fetchPostRejected(error));

        }
    }
}

//store

const store = createStore(reducer, applyMiddleware(thunkMiddleware.default));

// subscripre to state changes

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchPosts());