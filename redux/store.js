const { createStore, applyMiddleware } = require("redux");
const { reducer } = require("./post/reducer");
const thunkMiddleware = require("redux-thunk");


//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware.default));

module.exports.store = store;

