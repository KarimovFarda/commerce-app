import { HttpClient } from "../utils/service/httpRequest";
import { FAVOURITE_PRODUCTS_ACTIONS } from "./constants";


const request = new HttpClient("http://localhost:8502");

export const getFavouriteProducts = (id) => {
    request
        .get(`favourites`)
        .then((response) => {
            return  {
                type: FAVOURITE_PRODUCTS_ACTIONS.ADD_FAVOURITE_PRODUCTS,
                payload: response.data,
            }
        }).catch((err) => console.error(err));
};

export const addFavouriteProducts = (payload, id) => {
    request
        .post(`favourites`, payload)
        .then((response) => {
            return {
                type: FAVOURITE_PRODUCTS_ACTIONS.ADD_FAVOURITE_PRODUCTS,
                payload: response.data,
            }
        }).catch((err) => console.error(err));
};

export const deleteFavouriteProducts =
    (userId, favouriteProductId) => {
        request
            .delete(`favourites/${favouriteProductId}`)
            .then((response) => {
                return {
                    type: FAVOURITE_PRODUCTS_ACTIONS.DELETE_FAVOURITE_PRODUCTS,
                    payload: response,
                }
            }
            )
            .catch((err) => console.error(err));
    };
