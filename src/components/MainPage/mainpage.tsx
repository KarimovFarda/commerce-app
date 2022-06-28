import React, { useEffect, useState } from 'react'
import Navbar from '../navbar'
import './mainpageStyle.scss'
import brands from '../../brands'
import Pagination from './pagination'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import HeaderCarousel from './carousel'
import Carousel from "react-multi-carousel";
import { useDispatch } from 'react-redux'
import { addFavouriteProducts } from '../../redux/favouritesAction'
import "react-multi-carousel/lib/styles.css";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import Footer from '../footer'
export const MainPage = () => {
  const [info, setInfo] = React.useState<any>()
  const [brand, setBrand] = useState<any>()
  const history = useHistory()
  useEffect(() => {
  fetch("https://api.npoint.io/b2204137dc22699575be").then(response => response.json()).then(data => setInfo(data))
}, [])
  const dispatch = useDispatch()
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
    }),
  );
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
  const classes = useStyles();
  const productsArray = info
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 70;
  const [totalPageCount, SetTotalPageCount] = useState<number>(0);
  const [query, setQuery] = useState('');
  const computedRecords = (() => {
    let computed = info;
    computed = productsArray && computed.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage)
    if (query) {
      computed = productsArray && info.filter((item: any) => item.name.toLowerCase().includes(query.toLowerCase()) || `${item.name}`.toLowerCase().includes(query.toLowerCase()))
    }
    return computed
  })();
  useEffect(() => {
    if (productsArray && productsArray.length) {
      const recordsLength = query.length ? true : productsArray.length;
      let totalCount = Math.ceil(recordsLength / itemsPerPage);
      SetTotalPageCount(totalCount)
    }
  }, [productsArray, query.length, itemsPerPage]);
  return (
    <div>
      <Navbar value={query} SearchElement={(element: any) => setQuery(element)} />
      <HeaderCarousel />
      <div className="container" style={{ background: "white" }}>
        <Carousel responsive={responsive}>
          {brands && brands.map((item: any, index: number) => {
            return (
              <div key={index} className="cardSlider" style={{ height: "120px" }} onClick={() => { setBrand(item.name) }}>
                <img alt="brandImage" style={{ height: "110px", width: "95%" }} src={item.image}></img>
                <p>{String(item.name).charAt(0).toUpperCase() + String(item.name).slice(1)}</p>
              </div>
            )
          })}
        </Carousel>
        {info ? '' : <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" style={{ marginRight: "0.5rem" }} />
          <h3 className="data-loading ml-3">  Loading ... </h3>
        </Backdrop>}
        <div className="product_grid mt-5" >
          <ul className="product_list list">
            {info && computedRecords.map((item: any, index: number) => {
              return (
                <li key={item.id} style={brand === undefined || item.brand === brand || brand === "All"  ? { margin: "2px 5px" } : { display: "none", margin: "0 5px" }} className="product_item">
                  <div className="product_sale">
                    <p>On Sale</p>
                  </div>
                  <div className="product_image" style={{ height: "250px" }} >
                    <img alt="product" onClick={() => history.push(`products/${index + 1}`)} src={item.image_link} />
                    <div className="product_buttons">
                      <button className="product_heart" onClick={() => {addFavouriteProducts({
                          name: item.name,
                          brand: item.brand,
                          price: String(item.price),
                          rating: String(item.rating),
                          date: String(item.created_at),
                          image: String(item.image_link),
                          productType: String(item.product_type),
                          index : index
                        }, 1)(dispatch)
                      }}><i className="fa fa-heart"></i></button>
                      <button className="add_to_cart" onClick={() => history.push(`products/${index + 1}`)}><i className="fa fa-shopping-cart"></i></button>
                      <div className="quick_view">
                        <h6>{item.brand === null ? "Unknown" : item.brand}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="product_values">
                    <div className="product_title">
                      <h5>{item.name}</h5>
                    </div>
                    <div className="product_price">
                      <span className="price_new">${item.price}</span>
                      <p>Rating :  <span>{[...Array(Math.floor(item.rating))].map((e) => <i className="fas fa-star"></i>)
                      }</span><span>{item.rating - Math.floor(item.rating) > 0 ? <i className="fas fa-star-half-alt"></i> : ""}</span><span>
                          {Math.floor(item.rating) < 5 && item.rating - Math.floor(item.rating) > 0 ? [...Array(4 - Math.floor(item.rating))].map((e) => <i className="far fa-star"></i>
                          ) : Math.floor(item.rating) < 5 && item.rating - Math.floor(item.rating) === 0 ? [...Array(5 - Math.floor(item.rating))].map((e) => <i className="far fa-star"></i>
                          ) : ""}</span></p>
                    </div>
                    <div className="product_desc">
                      <p className="truncate">{new Date(item.created_at).toLocaleString()}</p>
                    </div>
                    <div className="product_buttons">
                      <button className="product_heart" onClick={() => {addFavouriteProducts({
                          name: item.name,
                          brand: item.brand,
                          price: String(item.price),
                          rating: String(item.rating),
                          date: String(item.created_at),
                          image: String(item.image_link),
                          productType: String(item.product_type),
                          index : index
                        }, 1)(dispatch)
                      }}><i className="fa fa-heart"></i></button>
                      <button className="add_to_cart" onClick={() => history.push(`products/${index + 1}`)}><i className="fa fa-shopping-cart"></i></button>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <Footer padding='60px 0' />
      <div className="card-footer">
        <div className="row">
          <div className="col-12 ">
            <Pagination
              totalPageCount={totalPageCount}
              handlePageChange={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
      <footer className="favourites-footer">
        <p className="footer-paragraph">Copyright &copy; 2021 <b> All Rights Reserved.</b></p>
      </footer>
    </div>
  )
}
export default MainPage