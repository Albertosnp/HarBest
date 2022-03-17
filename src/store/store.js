import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { productsReducer } from './reducers/productsStore';
import thunk from "redux-thunk";

const reducer = combineReducers({
  productsStore: productsReducer,
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));