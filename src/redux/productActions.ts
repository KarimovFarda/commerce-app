import { Dispatch } from "redux";
import { IProducts, IProductsArr } from "../utils/models/types";
import { HttpClient } from "../utils/service/httpRequest";
import { PRODUCTS_ACTIONS } from "./constants";

interface IActionGetProducts {
  type: "ADD_PRODUCTS";
  payload: IProducts[];
}
const request = new HttpClient("http://localhost:8502");

export const getProducts = (id: Number) => (dispatch: Dispatch) => {
  request
    .get(`products`)
    .then((response) =>
      dispatch({
        type: PRODUCTS_ACTIONS.ADD_PRODUCTS,
        payload: response.data,
      })
    )
    .catch((err) => console.error(err));
};

export const addProducts = (payload: any, id: Number) => (dispatch: Dispatch) => {
  request
    .post(`products`, payload)
    .then((response) => {
      dispatch({
        type: PRODUCTS_ACTIONS.ADD_PRODUCTS,
        payload: response.data,
      });
    })
    .catch((err) => console.error(err));
};

export const editProducts =
  (payload: any, userId: Number, productId: Number) => (dispatch: Dispatch) => {
    request
      .edit(`products/${productId}`, payload)
      .then((response) => {
        dispatch({
          type: PRODUCTS_ACTIONS.EDIT_PRODUCTS,
          payload: response,
        });
      })
      .catch((err) => console.error(err));
  };


export const deleteProducts =
  (userId: Number, productId: Number) => (dispatch: Dispatch) => {
    request
      .delete(`products/${productId}`)
      .then((response) =>
        dispatch({
          type: PRODUCTS_ACTIONS.DELETE_PRODUCTS,
          payload: response,
        })
      )
      .catch((err) => console.error(err));
  };


export type Actions = IActionGetProducts;
export type DispatchType = (args: IProductsArr) => IProductsArr;