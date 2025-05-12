

export default function Hero2() {
    return (
        <section className="hero2-section">
            <div className="hero2__wrapper">
                <div className="hero2-asset">
                    <img src="/Dwayne_Johnson_Papatui_Home_Page_Skincare_Main.png" alt="" />
                </div>

                {/* <div className="hero2-asset">
                    <video src="/papatui-hero-video.mp4" controlsX autoPlay muted loop></video>
                </div> */}

                <div className="hero2__content-container  --align-leftX  --align-rightX">
                    <div className="hero2__text__wrapper --align-text-centerX">
                        <h2 className="hero2__text__title">It&apos;s time to take better care</h2>
                        <div className="hero2__text__btn btn">
                            <a href="#">Shop skincare</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}