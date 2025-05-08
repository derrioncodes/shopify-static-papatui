export default function EmailCapture() {
    return (
        <section className="email-capture__section">
            <div className="email-capture__container">
                <h2 className="email-capture__heading">SUBSCRIBE TO GET 10% OFF</h2>
                <p className="email-capture__paragraph">Get in on exclusive deals like 10% off your first order and more when you subscribe to our mailing list</p>
                <form className="email-capture__form">
                    <input type="email" name="email" placeholder="Enter email address" />
                </form>
                <button className="email-capture__btn btn">Subscribe</button>
                <p className="email-capture__disclaimer">You can unsubscribe from our mailing list at any time. Further details of how we handle your personal information can be found in our <a style={{ textDecoration: 'underline', color: '#0066cc' }} href="#">Privacy&nbsp;Policy</a>.<br/>By subscribing you agree to our <a style={{ textDecoration: 'underline', color: '#0066cc' }} href="#">Terms and Conditions</a>.</p>
            </div>
        </section>
    )
}