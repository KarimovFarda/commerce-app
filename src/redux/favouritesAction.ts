import { Dispatch } from "redux";
import { IFavouriteProducts, IFavouriteProductsArr } from "../models/types";
import { HttpClient } from "../components/service/httpRequest";
import { FAVOURITE_PRODUCTS_ACTIONS } from "./constants";

interface IActionGetProducts {
    type: "ADD_PRODUCTS";
    payload: IFavouriteProducts[];
}
const request = new HttpClient("http://localhost:8502");

export const getFavouriteProducts = (id: Number) => (dispatch: Dispatch) => {
    request
        .get(`favourites`)
        .then((response) =>
            dispatch({
                type: FAVOURITE_PRODUCTS_ACTIONS.ADD_FAVOURITE_PRODUCTS,
                payload: response.data,
            })
        )
        .catch((err) => console.error(err));
};

export const addFavouriteProducts = (payload: any, id: Number) => (dispatch: Dispatch) => {
    request
        .post(`favourites`, payload)
        .then((response) => {
            dispatch({
                type: FAVOURITE_PRODUCTS_ACTIONS.ADD_FAVOURITE_PRODUCTS,
                payload: response.data,
            });
        })
        .catch((err) => console.error(err));
};

export const deleteFavouriteProducts =
    (userId: Number, favouriteProductId: Number) => (dispatch: Dispatch) => {
        request
            .delete(`favourites/${favouriteProductId}`)
            .then((response) =>
                dispatch({
                    type: FAVOURITE_PRODUCTS_ACTIONS.DELETE_FAVOURITE_PRODUCTS,
                    payload: response,
                })
            )
            .catch((err) => console.error(err));
    };


export type Actions = IActionGetProducts;
export type DispatchType = (args: IFavouriteProductsArr) => IFavouriteProductsArr;