// setup Redux
import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";


const rootReducer = combineReducers({
// chua cac state cua ung dung

})

export const store = createStore(rootReducer,applyMiddleware(reduxThunk));