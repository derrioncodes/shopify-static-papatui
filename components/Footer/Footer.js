export default function Footer() {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer-nav">
                    <img src="/Papatui_Flame_Logo_1a526e18-3e67-45a5-a57e-51c3cb7674d2.png" alt="" />
                </div>
                <div className="footer-nav">
                    <h5 className="footer-nav__title">About</h5>
                    <ul className="footer-nav__items">
                        <li className="footer-nav__item">
                            <a href="#" className="footer-nav__link">About Us</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#" className="footer-nav__link">PAPATUI<sup>&trade;</sup> Cares</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#" className="footer-nav__link">Store Locator</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#" className="footer-nav__link">FAQs</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h5 className="footer-nav__title">SUPPORT & CONTACT</h5>
                    <ul className="footer-nav__items">
                        <li className="footer-nav__item">
                            <a href="#" className="footer-nav__link">FAQs</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#" className="footer-nav__link">Contact Us</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#" className="footer-nav__link">Privacy</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#" className="footer-nav__link">Terms of Use</a>
                        </li>
                        <li className="footer-nav__item">
                            <a href="#" className="footer-nav__link">Accessbility Statement</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav social">
                    <h5 className="footer-nav__title">Social</h5>
                    <ul className="footer-nav__items social__items">
                        <li className="footer-nav__item social__item">
                            <a className="footer-nav__link social-icon" href="#">
                                <img src="/papatui_footer_white_instagram.png" alt="" />
                            </a>
                        </li>
                        <li className="footer-nav__item social__item">
                            <a className="footer-nav__link social-icon" href="#">
                                <img src="/papatui_footer_white_tiktok.png" alt="" />
                            </a>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer-copyright__text">&copy; {new Date().getFullYear()}, PAPATUI</div>
            </div>

        </footer>
    )
}