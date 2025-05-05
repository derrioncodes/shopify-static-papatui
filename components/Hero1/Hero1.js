

export default function Hero1() {


    return (
        <section className="hero-section">
            <div className="hero-carousel-container">
                <div className="hero-carousel-wrapper">
                    <div className="hero__wrapper reverseX">
                        <div className="hero-asset">
                            <img src="/Dwayne_Johnson_Papatui_Home_Page_Skincare_Main.png" alt="" />
                        </div>
                        <div className="hero__text__wrapper">
                            <h2 className="hero__text__title">It's time to take better care</h2>
                            <div className="hero__text__btn btn">
                                <a href="#">Shop skincare</a>
                            </div>
                        </div>
                        <div className="hero__text__logo">
                            <h1 className="h1-logo">PAPATUI</h1>
                            <h2 className="h2-logo">TAKE BETTER CARE</h2>
                        </div>
                    </div>
                    <div className="hero__wrapper">
                        <div className="hero-asset">
                            <video src="/papatui-hero-video.mp4" controlsX autoPlay muted loop></video>
                        </div>
                        <div className="hero__text__wrapper">
                            <h2 className="hero__text__title">It's time to take better care</h2>
                            <div className="hero__text__btn btn">
                                <a href="#">Shop skincare</a>
                            </div>
                        </div>
                        <div className="hero__text__logo">
                            <h1 className="h1-logo">PAPATUI</h1>
                            <h2 className="h2-logo">TAKE BETTER CARE</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}