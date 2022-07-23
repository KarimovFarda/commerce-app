import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import ProductPageNavbar from './productPageNavbar'
import './productDetailsStyle.scss'
import Footer from '../footer'
import Comments from './comments'
import { getProducts } from '../../redux/productActions';
import { useDispatch } from "react-redux";
import axios from 'axios'
export const ProductDetails = () => {
  const [product, setProduct] = useState<any>()
  let [amount, setAmount] = useState<number>(1)
  const navigate = useNavigate()
  const [data, setData] = useState<any>([])
  const [quantity, setQuantity] = useState<any>([])
  const [added, setAdded] = useState<boolean>(false)
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.npoint.io/b2204137dc22699575be`);
      setProduct(response.data);
    }
    fetchData();
  }, []);
  const [total, setTotal] = useState<number>(0)
  const params = useParams();
  const id = (Object(params).id)
  const arr = [+id + 1, +id + 2, +id + 3, +id + 4];
  console.log(params)
  const [totalPrice, setTotalPrice] = useState<any>(0)
  useEffect(() => {
    getProducts(1)(dispatch);
  }, [dispatch]);
  useEffect(() => {
    setData(data)
    setQuantity(quantity)
  }, [data, quantity, total])
  return (
    <div style={product ? {} : { position: "fixed" }}>
      <div>
        <ProductPageNavbar amount={total} product={data} totalPrice={totalPrice} />
      </div>
      {product ? "" : <div id="loading-wrapper">
        <div id="loading-text">LOADING</div>
        <div id="loading-content"></div>
      </div>}
      <div className="wrapper" style={product ? { opacity: "1" } : { opacity: "0" }}>
        <div className="product group" style={product ? { opacity: "1" } : { opacity: "0" }}>
          <div className="col-1-2 product-image">
            <div className="bg" style={product && { backgroundImage: `url(${product && product[id - 1].image_link})`, marginTop: "5rem" }}></div>
          </div>
          <div className="col-2-2 product-info mt-5">
            <h2>{product && product[id - 1].name}</h2>
            <h2>${product && product[id - 1].price}</h2>
            <div className="selected">
              <h5> Amount : </h5>
            </div>
            <div className="select-dropdown ">
              <i className="fas fa-minus p-4" style={{ color: "#f55a5a", fontSize: "1.6rem", cursor: "pointer" }} onClick={() => setAmount(amount === 1 ? 1 : amount - 1)}></i>
              <span style={{ fontSize: "1.5rem", fontWeight: "bold" }} >{amount}</span>
              <i className="fas fa-plus p-4" style={{ color: "#f55a5a", fontSize: "1.6rem", cursor: "pointer" }} onClick={() => setAmount(amount + 1)}></i>
            </div>
            <br />
            <a href="#test" className={added === true ? "added-btn " : "add-btn"} onClick={(e) => {
              setAdded(true)
              setTotalPrice(totalPrice + product[id - 1].price * amount)
              added === false ?
                data.push({
                  name: product[id - 1].name,
                  brand: product[id - 1].brand,
                  price: String(product[id - 1].price),
                  amount: amount,
                  imageLink: String(product[id - 1].image_link)
                }) : console.log("hi");
              added === false ? setTotal(total + 1) : console.log("Already added"); e.preventDefault()
            }}>{added === false ? 'Add To Cart' : 'Added Successfully'}</a>
            <p style={{ fontSize: "13px" }}>Tags :
              {product && product[id - 1].tag_list.map((item: any) => {
                console.log(item)
                return (
                  <span>#{item}</span>
                )
              })}
            </p>
            <p style={{ fontSize: "13px" }}>Product Type :
              <a href={product && product[id - 1].product_link}>{product && product[id - 1].product_type}</a>
            </p>
            <p style={{ fontSize: "12px" }}>{product && product[id - 1].description}</p>
          </div>
        </div>
        <h3 style={{ marginLeft: "1rem" }}> Suggested Products </h3>
        <ul className="cards suggested_product_cards">
          {product && arr.map((item: any) => {
            let directed = item
            console.log(item)
            return (
              <li className="cards__item" onClick={() => setAmount(1)}>
                <div className="card">
                  <div className="card__image card__image--flowers" onClick={() => { console.log(item); navigate(`/products/${directed + 1}`); setAdded(false) }} style={{
                    backgroundSize: "cover", height: "380px", backgroundImage: `url(${product[item].image_link})`
                  }}></div>
                  <div className="card__content">
                    <div className="card__title">Brand : {product[item].brand}</div>
                    <h5 className="card__text">{product[item].name}</h5>
                    <h6>Price : <span style={{ fontWeight: "bold", color: "#f55a5a" }}>${product[item].price}</span></h6>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <h2 style={{ paddingLeft: "2rem", marginTop: "2rem" }}>Comments</h2>
      <Comments />
      <Footer padding="0 0 20px 0" />
      
    </div>
  )
}
export default ProductDetails

