import React from 'react'
export const Footer = (props: any) => {
    return (
        <section className="contact-area" style={{ padding: `${props.padding}` }} id="contact">
            <div className="container" >
                <div className="row" style={{ marginTop: "2rem" }}>
                    <div className="col-lg-6 offset-lg-3">
                        <div className="contact-content text-center">
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Footer