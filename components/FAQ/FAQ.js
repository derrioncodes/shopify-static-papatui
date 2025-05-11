import Accordian from "@/components/Accordian/Accordian";

export default function FAQ() {
  return (
    <section className="faq__section mt30">
      <div className="section-title">
        <h1 className="title-headline__underline --underline-center">Contact Us</h1>
        <p>If you have any questions or would like to get in touch with the PAPATUI team, please email us at support@papatui.com</p>
      </div>

      <div className="faq__page-title">
        <h2 className="title-headline__underline --underline-center">
          FAQS
        </h2>
      </div>

      <div className="faq__container">
        <ul className="faq__categories">
          <li>
            <a href="#general">General</a>
          </li>
          <li>
            <a href="#orders">Orders</a>
          </li>
          <li>
            <a href="#product-experience">Product Experience</a>
          </li>
          <li>
            <a href="#contact-us">Contact us</a>
          </li>
        </ul>

        <div className="faq_wrapper">
          <div className="faq__single-category">
            <div id="general" className="faq__title title-headline__underline">
              General
            </div>
            <Accordian />
          </div>

          <div className="faq__single-category">
            <div id="general" className="faq__title title-headline__underline">
              General
            </div>
            <Accordian />
          </div>

          <div className="faq__single-category">
            <div id="general" className="faq__title title-headline__underline">
              General
            </div>
            <Accordian />
          </div>

          <div className="faq__single-category">
            <div id="general" className="faq__title title-headline__underline">
              General
            </div>
            <Accordian />
          </div>

        </div>

      </div>
    </section>
  )
}