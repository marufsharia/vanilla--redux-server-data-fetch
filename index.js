const { store } = require("./redux/store");
const { fetchPosts } = require("./redux/post/thunk/featchPosts");


// subscribre to state changes
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchPosts());