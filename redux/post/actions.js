const { POST_REQUEST_PENDDING, POST_REQUEST_SUCCESSED, POST_REQUEST_REJECTED } = require("./actionType");

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
        type: POST_REQUEST_REJECTED,
        payload: error,
    };
};

module.exports.fetchPostRequested = fetchPostRequested;
module.exports.featchPostSuccessed = featchPostSuccessed;
module.exports.fetchPostRejected = fetchPostRejected;