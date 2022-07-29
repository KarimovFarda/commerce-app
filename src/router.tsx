import React from 'react'
import MainPage from './components/MainPage/mainpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './components/productsById/productDetails';
import ShoppingCart from './components/ShoppingCart/shoppingCart'
import Login from './components/Register-Login/login'
import Register from './components/Register-Login/register'
import Favourites from './components/Favourites/favourites'
import Payment from './components/Payment/payment';
import { PrivateRoute } from './routes/privateRoute';
// import { Mutation, QueryClient, useMutation, useQuery } from '@tanstack/react-query';
export const Router = () => {
    // const queryClient = new QueryClient();

    // const query = useQuery(['repoData'], () =>
    //     fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
    //     res.json()
    //   )  );


    //   const mutation = useMutation(postMovie, {
    //       onSuccess : () => {
    //           queryClient.invalidateQueries(['repoData'])
    //       }
    //   })

    // mutation.mutate({
    //     ...
    // })


    // const { isLoading, isError, error, data, isSuccess } = useMutation(postMovie, {
    //     onSuccess: () => {
    //       queryClient.invalidateQueries('movies');
    //     },
    //   });
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <MainPage />
                        </PrivateRoute>
                    }
                />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/shopping" element={<ShoppingCart />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router