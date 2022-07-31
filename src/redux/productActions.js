import { HttpClient } from "../utils/service/httpRequest";
import { PRODUCTS_ACTIONS } from "./constants";

const request = new HttpClient("http://localhost:8502");

export const getProducts = (id) => {
  request
    .get(`products`)
    .then((response) => {
      return {
        type: PRODUCTS_ACTIONS.ADD_PRODUCTS,
        payload: response.data,
      }})
    
    .catch((err) => console.error(err));
};

export const addProducts = (payload, id) => {
  request
    .post(`products`, payload)
    .then((response) => {
      return {
        type: PRODUCTS_ACTIONS.ADD_PRODUCTS,
        payload: response.data,
      };
    })
    .catch((err) => console.error(err));
};

export const editProducts =
  (payload, userId, productId) => {
    request
      .edit(`products/${productId}`, payload)
      .then((response) => {
        return {
          type: PRODUCTS_ACTIONS.EDIT_PRODUCTS,
          payload: response,
        };
      })
      .catch((err) => console.error(err));
  };


export const deleteProducts =
  (userId, productId) => {
    request
      .delete(`products/${productId}`)
      .then((response) => {
        return {
          type: PRODUCTS_ACTIONS.DELETE_PRODUCTS,
          payload: response,
        }}
      )
      .catch((err) => console.error(err));
  };
