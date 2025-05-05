import AnnouncementBanner from "@/components/AnnouncementBanner/AnnouncementBanner"
export default function Header1() {
    return (
        <>
            <AnnouncementBanner />
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

            <div className="mobile__nav__drawer__bg active"></div>
            <div className="mobile__nav__drawer__open active">
                <div className="mobile__nav__drawer__head">
                    <div className="mobile__nav__drawer__close-btn">
                        <i className="fa fa-close"></i>
                    </div>
                    <div className="mobile__nav__drawer__account">
                        <a href="#" className="account__link">
                            <span className="account-icon__link">
                                <i className="fa fa-user-o"></i>
                            </span>
                            <span>Log in</span>
                        </a>
                    </div>
                </div>
                <div className="mobile__nav__drawer__main">
                    <ul className="mobile__nav__drawer__items">
                        <li className="mobile__nav__drawer__items__item">
                            <a className="mobile__nav__drawer__link" href="/shop-all.html">Shop All</a>
                        </li>
                        <li className="mobile__nav__drawer__items__item">
                            <a className="mobile__nav__drawer__link" href="#">Shop By Category <span className="right-arrow"><i className="fa fa-angle-right"></i></span></a>
                            <div className="mobile__nav__drawer__subnav-container mobile-subnav-activeX">
                                <div className="mobile__nav__drawer__subnav__banner">
                                    <img src="/mobile-secondary-subnav-banner_completefacecare_scent_uncented__01.png" alt="" />
                                </div>
                                <div className="mobile__nav__drawer__subnav__close-btn">
                                    <i className="fa fa-close"></i>
                                </div>
                                <div className="mobile__nav__drawer__subnav__back">
                                    <button className="subnav__back__btn" type="button">
                                        <i className="fa fa-angle-left"></i>
                                    </button>
                                    <div className="subnav__back__title">Shop by Category</div>
                                </div>
                                <ul className="mobile__nav__drawer__items">
                                    <li className="mobile__nav__drawer__items__item">
                                        <a className="mobile__nav__drawer__link" href="#">Body + Hair Care</a>
                                    </li>
                                    <li className="mobile__nav__drawer__items__item">
                                        <a className="mobile__nav__drawer__link" href="#">Face Care</a>
                                    </li>
                                    <li className="mobile__nav__drawer__items__item">
                                        <a className="mobile__nav__drawer__link" href="#">Tattoo Care</a>
                                    </li>
                                    <li className="mobile__nav__drawer__items__item">
                                        <a className="mobile__nav__drawer__link" href="#">Antiperspirant + Deodarant</a>
                                    </li>
                                    <li className="mobile__nav__drawer__items__item">
                                        <a className="mobile__nav__drawer__link" href="#">Bundles</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="mobile__nav__drawer__items__item">
                            <a className="mobile__nav__drawer__link" href="#">Best Sellers</a>
                        </li>
                        <li className="mobile__nav__drawer__items__item">
                            <a className="mobile__nav__drawer__link text09" href="#">Store Locator</a>
                        </li>
                        <li className="mobile__nav__drawer__items__item">
                            <a className="mobile__nav__drawer__link text09" href="#">About PAPTUI<sup>&trade;</sup></a>
                        </li>
                        <li className="mobile__nav__drawer__items__item">
                            <a className="mobile__nav__drawer__link text09" href="#">PAPTUI Cares<sup>&trade;</sup></a>
                        </li>
                    </ul>
                </div>
                <div className="mobile__nav__drawer__footer">
                    <div className="drawer__footer__social-items">
                        <div className="social-item">
                            <a className="social-icon" href="#">
                                <img src="/papatui_instagram.png" alt="" />
                            </a>
                        </div>
                        <div className="social-item">
                            <a className="social-icon" href="#">
                                <img src="/papatui-tiktok.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* CART ITEMS  */}
            <div className="shopping-cart__popup__bg cart-activeX"></div>
            <div className="shopping-cart__popup cart-activeX">
                <div className="shopping-cart__wrapper">
                    <div className="shopping-cart__head">
                        <h3 className="shopping-cart__title">SHOPPING CART</h3>
                        <div className="shopping-cart__quantity">(1 item )</div>
                        <div className="shopping-cart__close-btn">
                            <i className="fa fa-close"></i>
                        </div>
                    </div>
                    <div className="shopping-cart_items__container">
                        <div className="shopping-cart_items__content">
                            <div className="shopping-cart_items__item">
                                <div className="item__image">
                                    <img src="/TattooCareBundle_scent_uncented__01.png" alt="" />
                                </div>
                                <div className="item__details">
                                    <div className="item__details__title">
                                        Tattoo Care Bundle
                                    </div>
                                    <div className="item__details__price">
                                        $20.00
                                    </div>
                                    <div className="item__details__micro-copy">
                                        Unscented
                                    </div>
                                </div>

                                <div className="item__quantity">
                                    <div className="item__quantity__input">
                                        <button className="input__minus">-</button>
                                        <input type="number" defaultValue="1" min="0" autoComplete="off" step="1" name="item-quantity" />
                                        <button className="input__plus">+</button>
                                    </div>
                                    <div className="cart-item__remove">
                                        <i className="fa fa-trash-o"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping-cart_items__item">
                                <div className="item__image">
                                    <img src="/TattooCareBundle_scent_uncented__01.png" alt="" />
                                </div>
                                <div className="item__details">
                                    <div className="item__details__title">
                                        Tattoo Care Bundle
                                    </div>
                                    <div className="item__details__price">
                                        $20.00
                                    </div>
                                    <div className="item__details__micro-copy">
                                        Unscented
                                    </div>
                                </div>

                                <div className="item__quantity">
                                    <div className="item__quantity__input">
                                        <button className="input__minus">-</button>
                                        <input type="number" defaultValue="1" min="0" autoComplete="off" step="1" name="item-quantity" />
                                        <button className="input__plus">+</button>
                                    </div>
                                    <div className="cart-item__remove">
                                        <i className="fa fa-trash-o"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping-cart_items__item">
                                <div className="item__image">
                                    <img src="/TattooCareBundle_scent_uncented__01.png" alt="" />
                                </div>
                                <div className="item__details">
                                    <div className="item__details__title">
                                        Tattoo Care Bundle
                                    </div>
                                    <div className="item__details__price">
                                        $20.00
                                    </div>
                                    <div className="item__details__micro-copy">
                                        Unscented
                                    </div>
                                </div>

                                <div className="item__quantity">
                                    <div className="item__quantity__input">
                                        <button className="input__minus">-</button>
                                        <input type="number" defaultValue="1" min="0" autoComplete="off" step="1" name="item-quantity" />
                                        <button className="input__plus">+</button>
                                    </div>
                                    <div className="cart-item__remove">
                                        <i className="fa fa-trash-o"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping-cart_items__item">
                                <div className="item__image">
                                    <img src="/TattooCareBundle_scent_uncented__01.png" alt="" />
                                </div>
                                <div className="item__details">
                                    <div className="item__details__title">
                                        Tattoo Care Bundle
                                    </div>
                                    <div className="item__details__price">
                                        $20.00
                                    </div>
                                    <div className="item__details__micro-copy">
                                        Unscented
                                    </div>
                                </div>

                                <div className="item__quantity">
                                    <div className="item__quantity__input">
                                        <button className="input__minus">-</button>
                                        <input type="number" defaultValue="1" min="0" autoComplete="off" step="1" name="item-quantity" />
                                        <button className="input__plus">+</button>
                                    </div>
                                    <div className="cart-item__remove">
                                        <i className="fa fa-trash-o"></i>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="shopping-cart__controls">
                            <div className="shopping-cart__details">
                                <div className="shopping-cart__order-details">
                                    <p className="shopping-cart__total">
                                        <span>Subtotal</span>
                                        <span className="money">$20.00</span>
                                    </p>
                                    <p className="shopping-cart__message">Taxes and shipping calculated at checkout</p>
                                </div>
                            </div>
                            <div className="shopping-cart__actions">
                                <a className="btn dark-outline view-cart-btn" href="#">View Cart</a>
                                <a className="btn primary-full check-out-btn" href="#">
                                    <span className="lock-icon"><i className="fa fa-lock" style={{ fontSize: 24 + 'px' }}></i></span>
                                    Check out
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="shopping-cart__empty">
                        <p className="shopping-cart__empty__title">Your cart is currently empty</p>
                        <a className="shopping-cart__empty__btn" href="#">SHOP NOW</a>
                    </div>  */}
                </div>
            </div>
        </>


    )
}