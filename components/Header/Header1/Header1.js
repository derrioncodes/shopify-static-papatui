
export default function Header1() {
    return (
        <header className="header header-1 sticky-header">
            <div className="header-1__logo">
                <div className="header-1__logo-ratio-box">
                    <a href="#">
                        <img src="/Papatui_Header_Logo.png" alt=""/>
                    </a>
                </div>
            </div>
            <div className="header-navs">
                <nav className="primary-nav" >
                    <ul className="primary-nav__items">
                        <li className="primary-nav__item">
                            <a className="primary-nav__link" href="/shop-all.html">Shop All</a>

                        </li>
                        <li className="primary-nav__item">
                            <a className="primary-nav__link" href="#">Shop by category <span><i className="fa fa-angle-down" ></i></span></a>
                            <div className="subnav-container">
                                <ul className="subnav-menu">
                                    <li className="subnav-menu__item">
                                        <a className="subnav-menu__link" href="#">Body + Hair</a>
                                    </li>
                                    <li className="subnav-menu__item">
                                        <a className="subnav-menu__link" href="#">Face</a>
                                    </li>
                                    <li className="subnav-menu__item">
                                        <a className="subnav-menu__link" href="#">Tattoo</a>
                                    </li>
                                    <li className="subnav-menu__item">
                                        <a className="subnav-menu__link" href="#">Antiperpirant + Deodorant</a>
                                    </li>
                                    <li className="subnav-menu__item">
                                        <a className="subnav-menu__link" href="#">Bundles</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="primary-nav__item">
                            <a className="primary-nav__link" href="#">Bestsellers</a>
                        </li>
                        <li className="primary-nav__item">
                            <a className="primary-nav__link" href="#">About <span><i className="fa fa-angle-down"></i></span></a>
                            <div className="subnav-container">
                                <ul className="subnav-menu">
                                    <li className="subnav-menu__item">
                                        <a className="subnav-menu__link" href="#">About</a>
                                    </li>
                                    <li className="subnav-menu__item">
                                        <a className="subnav-menu__link" href="#">PAPATUI<sup>&trade;</sup> CARES</a>
                                    </li>
                                    <li className="subnav-menu__item">
                                        <a className="subnav-menu__link" href="#">STORE LOCATOR</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>

                <nav className="secondary-nav">
                    <ul className="secondary-nav__items secondary-nav__actions">
                        <li className="secondary-nav__item">
                            <a className="secondary-nav__link" href="#">
                                <i className="fa fa-user-o"></i>
                            </a>

                        </li>
                        <li className="secondary-nav__item">
                            <a className="secondary-nav__link icon-cart-svg" href="#">
                                <img className="icon-cart" src="/cart-shopping-light.svg" alt="cart" width="20" height="20"/>
                                    <div className="cart-count-bubble">
                                        <span className="item-count">0</span>
                                    </div>
                            </a>
                        </li>
                        <li className="secondary-nav__item">
                            <a className="secondary-nav__link" href="#">
                                <i className="fa fa-search"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}