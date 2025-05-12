

export default function SingleProduct() {
    return (
        <section className="single-product_section">
            <div className="single-product__container">
                <div className="single-product__media">
                    <div className="media-gallery">
                        <div className="media-gallery__thumbnails-wrapper">
                            <button className="thumb-arrow prev"><i className="fa fa-angle-up"></i></button>
                            <div className="media-gallery__thumbnails">
                                <div className="gallery-thumbnail">
                                    <img src="PAPATUI_single-product_image.png" alt=""/>
                                </div>
                                <div className="gallery-thumbnail">
                                    <img src="PAPATUI_PDP_Toner__02.png" alt=""/>
                                </div>
                                <div className="gallery-thumbnail">
                                    <img src="PAPATUI_PDP_Toner__03.png" alt=""/>
                                </div>
                                <div className="gallery-thumbnail">
                                    <img src="PAPATUI_PDP_Toner__04.png" alt=""/>
                                </div>
                                <div className="gallery-thumbnail">
                                    <img src="PAPATUI_PDP_Toner__05.png" alt=""/>
                                </div>
                                <div className="gallery-thumbnail">
                                    <img src="PAPATUI_PDP_Toner__06.png" alt=""/>
                                </div>
                                {/* <div className="gallery-thumbnail">
                                    <img src="PAPATUI_PDP_Facial_Moisturizer__02.png" alt=""/>
                                </div> */}
                                
                                
                            </div>
                            <button className="thumb-arrow next"><i className="fa fa-angle-down"></i></button>
                        </div>

                        <div className="media-gallery__main-image-wrapper">
                            <button className="main-arrow prev"><i className="fa fa-angle-left"></i></button>
                            <div className="media-gallery__main-image">
                                <div className="gallery-main-img">
                                    <img src="PAPATUI_single-product_image.png" alt=""/>
                                </div>
                            </div>
                            <button className="main-arrow next"><i className="fa fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="single-product__details">
                    <h1 className="single-product__title title-headline__underline">Rejuvenating Facial Toner</h1>
                    <div className="single-product__price">$10.00</div>
                    <div className="spacer"></div>
                    <div className="single-product__qty">
                        <p className="qty-label">Quantity</p>
                        <div className="item__quantity">
                            <div className="item__quantity__input">
                                <button className="input__minus">-</button>
                                <input type="number" defaultValue="1" min="0" autoComplete="off" step="1" name="item-quantity"/>
                                <button className="input__plus">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="single-product__add-to-cart-btn">
                        <a className="btn primary-full check-out-btn" href="#">
                            Add to cart
                        </a>
                    </div>
                    <div className="single-product__text-box">
                        <h5 className="text-box__heading">Product description</h5>
                        <p>Refresh and hydrate skin with hard working ingredients. This smoothing and soothing formula helps to whisk away dead skin cells and blemish-causing oil without harsh scrubbing or alcohol. Minimizes appearance of pores, enhances skin & improves areas of dry, flaky skin.</p>
                        <p>TAKE BETTER CARE<sup>&trade;</sup></p>
                    </div>
                    {/* <div className="accordion">
                        <div className="accordion-item">
                            <div className="accordion-header">
                                <h3>Key Ingredients</h3>
                                <div className="x-icon"></div>
                            </div>
                            <div className="accordion-content">
                                <ul>
                                    <li>AHAs</li>
                                    <li>Witch Hazel</li>
                                    <li>Glycolic Acid</li>
                                </ul>
                          </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header">
                                <h3>Benefits</h3>
                                <div className="x-icon"></div>
                            </div>
                          <div className="accordion-content">
                            <ul>
                                <li>Tightens pore</li>
                                <li>Exfoliates, hydrates & brightens skin</li>
                                <li>Free from parabens and phthalates, cruelty free, formulated without sulfates and vegan</li>
                            </ul>
                          </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header">
                                <h3>Scent Notes</h3>
                                <div className="x-icon"></div>
                            </div>
                          <div className="accordion-content">
                            <p>Unscented</p>
                          </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header">
                                <h3>Full Ingredient List</h3>
                                <div className="x-icon"></div>
                            </div>
                          <div className="accordion-content">
                            <p>Ingredients: Water, Hamamelis Virginiana (Witch Hazel) Water, Propanediol, Glycolic Acid, Lactic Acid, Ethoxydiglycol, Glycerin, Sodium Hydroxide, Sodium Hyaluronate, Tartaric Acid, Phytic Acid, Hibiscus Sabdariffa (Red Sorrel) Flower Extract, Gluconolactone, Phenoxyethanol, Ethylhexylglycerin, Benzoic Acid, Tocopherol.</p>
                          </div>
                        </div>
                    </div> */}
                    
                </div>

            </div>
        </section>
    )
}