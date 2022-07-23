import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { IProductsArr } from "../utils/models/types";
import { Actions, DispatchType } from "./productActions";
import subscriptionReducer from "./reducer";
const store: Store<IProductsArr, Actions> & {
  dispatch: DispatchType;
} = createStore(subscriptionReducer, applyMiddleware(thunk));

export default store;