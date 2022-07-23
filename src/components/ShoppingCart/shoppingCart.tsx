import React, { useState, useEffect } from 'react'
import './shoppingCartStyle.scss'
import ShoppingNavbar from './shoppingNavbar'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { editProducts } from '../../redux/productActions';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
export const ShoppingCart = () => {
  const navigate = useNavigate()
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
    }),
  );
  const classes = useStyles();
  const userId = 1
  const dispatch = useDispatch();
  const [info, setInfo] = useState<any>()
  useEffect(() => {
    fetch("http://localhost:8502/products").then(response => response.json()).then(data => setInfo(data))

  }, [info])

  return (
    <div>
      <ShoppingNavbar />
      {info === undefined ?
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" style={{ marginRight: "0.5rem" }} />
          <h3 className="data-loading ml-3">  Loading ... </h3>
        </Backdrop> : ""}
      <div className="col-sm-12 col-md-10  col-md-offset-1 mt-4" style={{ margin: "0 auto" }}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th className="text-center">Price</th>
              <th className="text-center">Total</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {info && info[0] !== undefined &&
              info[0].productInfo.map((item: any, index: number) => {
                return (
                  <tr onLoad={() => setTotalPrice(totalPrice + item.price * item.amount)}>
                    <td className="col-sm-8 col-md-6">
                      <div className="media">
                        <a className="thumbnail pull-left" href="#test"> <img className="media-object" alt="images" src={item.imageLink} /> </a>
                        <div className="media-body">
                          <h4 className="media-heading"><span className="added-product-name">{item.name}</span></h4>
                          <h5 className="media-heading">  <span className="added-product-brand">by {item.brand == null ? 'Unknown' : item.brand}</span></h5>
                          <span>Status: </span><span className="text-primary"><strong>In Stock</strong></span>
                        </div>
                      </div></td>
                    <td className="col-sm-1 col-md-1" style={{ textAlign: 'center' }}>
                      <input type="email" className="form-control" id="exampleInputEmail1" value={item.amount} disabled />
                    </td>
                    <td className="col-sm-1 col-md-1 text-center"><strong>${item.price}</strong></td>
                    <td className="col-sm-1 col-md-1 text-center"><strong>${item.price * item.amount}</strong></td>
                    <td className="col-sm-2 col-md-2">
                      <button type="button" className="btn btn-danger" onClick={(e) => {
                        e.preventDefault(); info[0].productInfo.splice(index, 1); editProducts(info[0], userId, info[0]._id)(dispatch);
                        ; window.location.reload()
                      }}>
                        <span className="fa fa-remove"></span> Remove
                      </button></td>
                  </tr>
                )
              })
            }
            <tr>
            </tr>
            <tr>
              <td>   </td>
              <td>   </td>
              <td>   </td>
              <td><h3>Total</h3></td>
              <td className="text-right"><h3><strong>${totalPrice}</strong></h3></td>
            </tr>
            <tr>
              <td>   </td>
              <td>   </td>
              <td>   </td>
              <td>
                <button type="button" onClick={() => navigate('/products')} className="btn btn-default continue-shopping">
                  <span className="fa fa-shopping-cart "></span> Return Shopping
                </button></td>
              <td>
                <button type="button" onClick={() => { sessionStorage.setItem("totalPrice", String(totalPrice)); navigate("/payment") }} className="btn btn-success">
                  Checkout <span className="fa fa-play"></span>
                </button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default ShoppingCart