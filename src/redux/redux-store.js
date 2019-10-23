import { createStore, combineReducers } from "redux";
import coinsReducer from "./coins-reducer";
// import profileReducer from './profile-reducer';
// import dialogsReducer from './dialogs-reducer';
// import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
    coins : coinsReducer
});


let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

export default store;