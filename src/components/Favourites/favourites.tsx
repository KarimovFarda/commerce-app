import { useState, useEffect } from 'react'
import './favouritesStyle.scss'
import ShoppingNavbar from '../ShoppingCart/shoppingNavbar'
import { deleteFavouriteProducts } from '../../redux/favouritesAction'
import { useDispatch } from 'react-redux'
import Footer from '../footer'
import { useNavigate } from 'react-router'
export const Favourites = () => {
    const [favourites, setFavourites] = useState<any>()
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://localhost:8502/favourites").then(response => response.json()).then(data => setFavourites(data))
    }, [favourites])
    const dispatch = useDispatch()
    return (
        <section className="section-products">
            <ShoppingNavbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="navigation">
                        <h2 className="title" style={{ marginBottom: "0" }}>Favourite Products</h2>

                    </div>
                </div>
                <div className="row">
                    {favourites && favourites.map((item: any) => {
                        if (item.rating === "null") { item.rating = 0 }
                        return (
                            <div className="col-md-6 col-lg-4">
                                <div className="single-product">
                                    <div className="img-part">
                                        <img src={item.image} alt="" />
                                        <div className="overlay">
                                            <div className="item">
                                                <button className="icon-button" onClick={() => navigate(`../products/${item.index + 1}`)}><i className="far fa-eye"></i></button>
                                                <span className="text-button">Go to Product</span>
                                            </div>
                                            <div className="item">
                                                <button className="icon-button" onClick={() => { deleteFavouriteProducts(1, item._id)(dispatch) }}><i className="fas fa-trash"></i></button>
                                                <span className="text-button" >Remove product</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="infos">
                                        <span className="tag featured">Favourite</span>
                                        <h3 className="title"><p>{item.name}</p></h3>
                                        <p className="description">{new Date(item.date).toLocaleString()}</p>
                                        <div className="type-price">
                                            <p className="type">{String(item.brand)[0].toUpperCase() + String(item.brand).slice(1)}</p>
                                            <span className="price favourite-product-price"><span className="dollar">$</span>{item.price}</span>
                                        </div>
                                    </div>
                                    <div className="author-stars">
                                        <div className="author">
                                            <a href="#test" className="name">Product Type : {String(item.productType)[0].toUpperCase() + String(item.productType).slice(1)}</a>
                                        </div>
                                        <div className="stars">
                                            <span>{new Array(Math.floor(Number(item.rating))).fill(0).map((e) => <i className="fas fa-star"></i>)
                                            }</span><span>{item.rating - Math.floor(Number(item.rating)) > 0 ? <i className="fas fa-star-half-alt"></i> : ""}</span><span>
                                                {Math.floor(Number(item.rating)) < 5 && item.rating - Math.floor(Number(item.rating)) > 0 ? new Array(4 - Math.floor(Number(item.rating))).fill(0).map((e) => <i className="far fa-star"></i>
                                                ) : Math.floor(Number(item.rating)) < 5 && item.rating - Math.floor(Number(item.rating)) === 0 ? new Array(5 - Math.floor(Number(item.rating))).fill(0).map((e) => <i className="far fa-star"></i>
                                                ) : ""}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </section>
    )
}
export default Favourites