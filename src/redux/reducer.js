import { PRODUCTS_ACTIONS } from "./constants";

const initialState = {
  products: []
};
export function productsReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case PRODUCTS_ACTIONS.ADD_PRODUCTS: 
      return { ...state, products: action.payload };
    
    default:
      return state;
  }
}

export default productsReducer