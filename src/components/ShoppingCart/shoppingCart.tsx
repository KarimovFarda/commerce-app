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
      {info === undefined?
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" style={{ marginRight: "0.5rem" }} />
          <h3 className="data-loading ml-3">  Loading ... </h3>
        </Backdrop> : 
          info && !!info[0].productInfo === false ? <div className='empty-cart'>
          <svg width="98" height="100" viewBox="0 0 98 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_232_4784)">
              <path d="M39.3555 82.8331C40.0671 80.7282 41.4204 78.8995 43.225 77.6042C45.0295 76.3089 47.1946 75.6123 49.4155 75.6123C51.6365 75.6123 53.8016 76.3089 55.6061 77.6042C57.4107 78.8995 58.764 80.7282 59.4756 82.8331" stroke="#CDCDCD" stroke-width="4" stroke-linecap="round" />
              <path d="M28.0166 72.0993C29.852 72.0993 31.3399 70.2709 31.3399 68.0155C31.3399 65.76 29.852 63.9316 28.0166 63.9316C26.1812 63.9316 24.6934 65.76 24.6934 68.0155C24.6934 70.2709 26.1812 72.0993 28.0166 72.0993Z" fill="#CDCDCD" />
              <path d="M70.458 72.0993C72.2934 72.0993 73.7813 70.2709 73.7813 68.0155C73.7813 65.76 72.2934 63.9316 70.458 63.9316C68.6226 63.9316 67.1348 65.76 67.1348 68.0155C67.1348 70.2709 68.6226 72.0993 70.458 72.0993Z" fill="#CDCDCD" />
              <path d="M27.7435 47.1636V24.4675C27.5585 18.6452 29.692 12.9875 33.6748 8.73838C37.6577 4.48922 43.1641 1.9963 48.9835 1.80762V1.80762C54.806 1.99639 60.316 4.48812 64.3046 8.73617C68.2932 12.9842 70.4348 18.6417 70.2596 24.4675V47.1636" stroke="#CDCDCD" stroke-width="4" stroke-linecap="round" />
              <path d="M4.87954 50.9213C5.63811 41.055 6.03545 36.1399 9.06973 33.1403C12.104 30.1406 16.7638 30.1406 26.0472 30.1406H71.9588C81.2422 30.1406 85.8659 30.1406 88.9002 33.1403C91.9345 36.1399 92.5124 41.055 93.1265 50.9213L95.8718 85.905C96.3053 91.6513 96.522 94.5064 94.9326 96.3495C93.3432 98.1927 90.6702 98.1927 85.2518 98.1927H12.7181C7.33586 98.1927 4.62668 98.1927 3.03729 96.3495C1.44791 94.5064 1.70077 91.6513 2.13423 85.905L4.87954 50.9213Z" stroke="#CDCDCD" stroke-width="4" />
            </g>
            <defs>
              <clipPath id="clip0_232_4784">
                <rect width="98" height="100" fill="white" />
              </clipPath>
            </defs>
          </svg>
         <h3> Səbətiniz boşdur</h3>
         <p>Sifariş vermək üçün
   səbətinizə məhsul əlavə edin</p>
        </div> : <div className="col-sm-12 col-md-10  col-md-offset-1 mt-4" style={{ margin: "0 auto" }}>
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
        </div> }
      
     
  
    </div>
  )
}


export default ShoppingCart