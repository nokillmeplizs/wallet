import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import coinsReducer from "./coins-reducer";
import thinkMiddleware from "redux-thunk";

let reducers = combineReducers({
    coins: coinsReducer
});


// let store = createStore(reducers,
//     compose(applyMiddleware(thinkMiddleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

let store = createStore(reducers,applyMiddleware(thinkMiddleware));

window.store = store;

export default store;