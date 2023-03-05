const { fetchPostRequested, featchPostSuccessed, fetchPostRejected } = require("../actions");
const fetch = require("node-fetch");

// thunk function
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

module.exports.fetchPosts = fetchPosts;
