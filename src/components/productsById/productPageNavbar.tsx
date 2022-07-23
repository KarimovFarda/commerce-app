import React, { useState, useEffect } from 'react'
import './productPageNavbarStyle.scss'
import { useDispatch, useSelector } from "react-redux";
import { addProducts, getProducts, deleteProducts } from '../../redux/productActions';
import { useNavigate } from 'react-router'
export const ProductPageNavbar = (props: any) => {
  const [display, setDisplay] = useState<string>("none")
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    getProducts(1)(dispatch);
  }, [dispatch, state]);
  const updateBasket = () => {
    deleteProducts(1, state.products[0]._id)(dispatch);
    addProducts({
      productInfo: props.product,
      totalPrice: props.totalPrice
    }, 1)(dispatch);
    navigate('/shopping')
  }
  const addBasket = () => {
    addProducts({
      productInfo: props.product,
      totalPrice: props.totalPrice
    }, 1)(dispatch);
    navigate('/shopping')
  }
  return (
    <div>
      <nav className="product-navbar">
        <div className="contain">
          <ul className="navbar-left">
            <li className="list"><a href="/">Home</a></li>
          </ul>
          <ul className="navbar-right" onMouseOver={(e) => { e.preventDefault(); setDisplay("inline-block") }} onMouseOut={() => setDisplay("none")}>
            <li className="list" ><button id="cart" ><i className="fa fa-shopping-cart"></i> Cart <span className="badge">{props.amount}</span></button></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="shopping-cart" onMouseOver={() => setDisplay("inline-block")} onMouseOut={() => setDisplay("none")} style={{ opacity: 1, display: display }}>
          <div className="shopping-cart-header">
            <i className="fa fa-shopping-cart cart-icon"></i><span className="badge">{props.amount}</span>
            <div className="shopping-cart-total">
              <span className="lighter-text">Total:</span>
              <span className="main-color-text">${props.totalPrice}</span>
            </div>
          </div>
          <ul className="shopping-cart-items">
            {props.product && props.product.map((item: any, index: number) => {
              return (
                <li className="clearfix list">
                  <img style={{ width: "30%" }} src={item.imageLink} alt="item1" />
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price}</span>
                  <span className="item-quantity">Quantity: {item.amount}</span>
                </li>
              )
            })}
          </ul>
          <a className="button" href="/shopping" onClick={state.products.length > 0 ? updateBasket : addBasket
          }>Checkout</a>
        </div>
      </div>
    </div>
  )
}
export default ProductPageNavbar