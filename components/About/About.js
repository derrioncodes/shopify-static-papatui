export default function About() {
    return (
        <>
        <section className="about__section">
            <div className="about-title_container">
                <h1 className="about-title title-headline__underline --underline-center">WELCOME TO PAPTUI</h1>
                <p>Science backed formulations developed for performance</p>
            </div>

            <div className="about-video__container">
                <div className="about-home-video">
                    <iframe src="https://www.youtube.com/embed/Dkv173dkfbA?si=VYmzy0at3JbteznR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>

            <div className="text">
                <p>TAKE BETTER CARE™. A men's care line founded by Dwayne "The Rock" Johnson.</p>
            </div>
        </section>
        
        </>
        
    )
}