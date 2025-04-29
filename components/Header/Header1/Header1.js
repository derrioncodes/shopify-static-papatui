
export default function Header1() {
    return (
        <>
            <header className="header header-1 sticky-header">
                <div className="header-1__logo">
                    <div className="header-1__logo-ratio-box">
                        <a href="#">
                            <img src="/Papatui_Header_Logo.png" alt="" />
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
                                    <img className="icon-cart" src="/cart-shopping-light.svg" alt="cart" width="20" height="20" />
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

                <div className="mobile__header-navs">
                    <nav className="mobile__primary-nav">
                        <div className="open__mobile__primary-nav__btn">
                            <i className="fa fa-bars"></i>
                        </div>
                    </nav>

                    <nav className="secondary-nav">
                        <ul className="secondary-nav__items secondary-nav__actions">
                            <li className="secondary-nav__item">
                                <a className="secondary-nav__link icon-cart-svg" href="#">
                                    <img className="icon-cart" src="/cart-shopping-light.svg" alt="cart" width="20" height="20" />
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

            <div class="mobile__nav__drawer__bg active"></div>
            <div class="mobile__nav__drawer__open active">
                <div class="mobile__nav__drawer__head">
                    <div class="mobile__nav__drawer__close-btn">
                        <i class="fa fa-close"></i>
                    </div>
                    <div class="mobile__nav__drawer__account">
                        <a href="#" class="account__link">
                            <span class="account-icon__link">
                                <i class="fa fa-user-o"></i>
                            </span>
                            <span>Log in</span>
                        </a>
                    </div>
                </div>
                {/* <div class="mobile__nav__drawer__main">
                    <ul class="mobile__nav__drawer__items">
                        <li class="mobile__nav__drawer__items__item">
                            <a class="mobile__nav__drawer__link" href="/shop-all.html">Shop All</a>
                        </li>
                        <li class="mobile__nav__drawer__items__item">
                            <a class="mobile__nav__drawer__link" href="#">Shop By Category <span class="right-arrow"><i class="fa fa-angle-right"></i></span></a>
                            <div class="mobile__nav__drawer__subnav-container">
                                <div class="mobile__nav__drawer__subnav__banner">
                                    <img src="/assets/mobile-secondary-subnav-banner_completefacecare_scent_uncented__01.png" alt="">
                                </div>
                                <div class="mobile__nav__drawer__subnav__close-btn">
                                    <i class="fa fa-close"></i>
                                </div>
                                <div class="mobile__nav__drawer__subnav__back">
                                    <button class="subnav__back__btn" type="button">
                                        <i class="fa fa-angle-left"></i>
                                    </button>
                                    <div class="subnav__back__title">Shop by Category</div>
                                </div>
                                <ul class="mobile__nav__drawer__items">
                                    <li class="mobile__nav__drawer__items__item">
                                        <a class="mobile__nav__drawer__link" href="#">Body + Hair Care</a>
                                    </li>
                                    <li class="mobile__nav__drawer__items__item">
                                        <a class="mobile__nav__drawer__link" href="#">Face Care</a>
                                    </li>
                                    <li class="mobile__nav__drawer__items__item">
                                        <a class="mobile__nav__drawer__link" href="#">Tattoo Care</a>
                                    </li>
                                    <li class="mobile__nav__drawer__items__item">
                                        <a class="mobile__nav__drawer__link" href="#">Antiperspirant + Deodarant</a>
                                    </li>
                                    <li class="mobile__nav__drawer__items__item">
                                        <a class="mobile__nav__drawer__link" href="#">Bundles</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="mobile__nav__drawer__items__item">
                            <a class="mobile__nav__drawer__link" href="#">Best Sellers</a>
                        </li>
                        <li class="mobile__nav__drawer__items__item">
                            <a class="mobile__nav__drawer__link text09" href="#">Store Locator</a>
                        </li>
                        <li class="mobile__nav__drawer__items__item">
                            <a class="mobile__nav__drawer__link text09" href="#">About PAPTUI<sup>&trade;</sup></a>
                        </li>
                        <li class="mobile__nav__drawer__items__item">
                            <a class="mobile__nav__drawer__link text09" href="#">PAPTUI Cares<sup>&trade;</sup></a>
                        </li>
                    </ul>
                </div>
                <div class="mobile__nav__drawer__footer">
                    <div class="drawer__footer__social-items">
                        <div class="social-item">
                            <a class="social-icon" href="#">
                                <img src="/assets/papatui_instagram.png" alt="" srcset="" />
                            </a>
                        </div>
                        <div class="social-item">
                            <a class="social-icon" href="#">
                                <img src="/assets/papatui-tiktok.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div> */}

            </div>
        </>


    )
}