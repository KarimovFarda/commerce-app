import React, { useState } from 'react'
import './paymentStyle.scss'
import ProductPageNavbar from '../productsById/productPageNavbar'
import Footer from '../footer'
export const Payment = () => {
    const [securityCode, setSecurityCode] = useState<string>("none")
    return (
        <div >
            <ProductPageNavbar />
            <div className="container">
                <div id="Checkout" className="inline">
                    <h1>Pay Invoice</h1>
                    <div className="card-row">
                        <span className="visa"></span>
                        <span className="mastercard"></span>
                        <span className="amex"></span>
                        <span className="discover"></span>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="PaymentAmount">Payment amount</label>
                            <div className="amount-placeholder">
                                <span>$</span>
                                <span>{Number(sessionStorage.getItem("totalPrice"))}</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="NameOnCard">Name on card</label>
                            <input id="NameOnCard" className="form-control" type="text" data-maxlength="255"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="CreditCardNumber">Card number</label>
                            <input id="CreditCardNumber" className="null card-image form-control" type="text"></input>
                        </div>
                        <div className=" form-group">
                            <label htmlFor="ExpiryDate">Expiry date</label>
                            <input id="ExpiryDate" className="form-control" type="text" placeholder="MM / YY" data-maxlength="7"></input>
                        </div>
                        <div className=" form-group">
                            <label htmlFor="SecurityCode">Security code</label>
                            <div className="input-container" >
                                <input id="SecurityCode" className="form-control" type="text" ></input>
                                <i className="fa fa-question-circle" onMouseOver={() => setSecurityCode("inline-block")} onMouseOut={() => setSecurityCode("none")}></i>
                            </div>
                            <div className="cvc-preview-container two-card hide" >
                                <div className="amex-cvc-preview" style={{ display: securityCode }}></div>
                                <div className="visa-mc-dis-cvc-preview" style={{ display: securityCode }}></div>
                            </div>
                        </div>
                        <div className="zip-code-group form-group">
                            <label htmlFor="ZIPCode">ZIP/Postal code</label>
                            <div className="input-container">
                                <input id="ZIPCode" className="form-control" type="text" data-maxlength="10"></input>
                            </div>
                        </div>
                        <button id="PayButton" className="btn btn-block btn-success submit-button mt-4" type="submit">
                            <span className="submit-button-lock"></span>
                            <span className="align-middle">Pay ${Number(sessionStorage.getItem("totalPrice"))}</span>
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
            <footer className="favourites-footer">
                <p className="footer-paragraph">Copyright &copy; 2021 <b> All Rights Reserved.</b></p>
            </footer>
        </div>
    )
}

export default Payment