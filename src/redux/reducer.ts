import { IProductsArr } from "../models/types";
import { Actions } from "./productActions";
import { PRODUCTS_ACTIONS } from "./constants";

const initialState: IProductsArr = {
  products: []
};
export default function productsReducer(
  state: IProductsArr = initialState,
  action: Actions
): IProductsArr {
  switch (action.type) {
    case PRODUCTS_ACTIONS.ADD_PRODUCTS: {
      return { ...state, products: action.payload };
    }
    default:
      return state;
  }
}