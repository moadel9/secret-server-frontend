import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducers from "./reducers/combinedReducers"
// import { initialState } from "./reducers/combinedReducers";
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
export default store
