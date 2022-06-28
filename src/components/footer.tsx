import React from 'react'
export const Footer = (props: any) => {
    return (
        <section className="contact-area" style={{ padding: `${props.padding}` }} id="contact">
            <div className="container" >
                <div className="row" style={{ marginTop: "2rem" }}>
                    <div className="col-lg-6 offset-lg-3">
                        <div className="contact-content text-center">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum </p>
                            <div className="hr"></div>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                            <div className="contact-social">
                                <ul>
                                    <li><a className="hover-target" href="https://www.facebook.com/ferda.kerimov.9"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a className="hover-target" href="https://www.linkedin.com/in/farda-karimov-8a00a9183/"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a className="hover-target" href="https://github.com/KarimovFarda"><i className="fab fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Footer