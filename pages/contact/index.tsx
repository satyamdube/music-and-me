import Image from "next/image";
import Link from "next/link";

import HomeWhiteAboutIcon from "@/public/Assets/pages/home-white-about.png";
import Call1Icon from "@/public/Assets/pages/call1.png";
import Message1Icon from "@/public/Assets/pages/message1.png";
import HomeIcon from "@/public/Assets/pages/home.png";

export default function Contact() {
  return (
    <div className="outerMainAbout">
      <div className="bannerData">
        <div className="breadcrumb-area bnrService">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-info">
                  <ul>
                    <li className="breadcrumb-item">
                      <Link href={"/"}>Home &nbsp;</Link>
                    </li>
                    <li className="breadcrumb-item">Contact</li>
                  </ul>
                  <h2 className="text-white"> Contact</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor elementor-1095">
        <section className="elementor-section elementor-top-section elementor-element elementor-element-0c67f2d elementor-section-full_width elementor-section-height-default elementor-section-height-default">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-23c3a9d">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-3efde57 elementor-widget elementor-widget-aprt_animation_image">
                  <div className="elementor-widget-container">
                    <Image
                      decoding="async"
                      className="blog-dark-sp te-img-position"
                      src={HomeWhiteAboutIcon}
                      alt="Awesome Image"
                    />
                  </div>
                </div>
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-94f64af elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="94f64af"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-abd4bfe"
                      data-id="abd4bfe"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-5f07a42 elementor-widget elementor-widget-aprt_hero_title"
                          data-id="5f07a42"
                          data-element_type="widget"
                          data-widget_type="aprt_hero_title.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="section-title title-anim te-align">
                              <div>
                                <h4 className="te_title about-title aprt-size-default">
                                  Connect with us
                                </h4>
                              </div>
                              <div>
                                <div className="normal__text">
                                  <p>
                                    Some of the strangest places on earth are
                                    also the most sublime: from the UFO-like
                                    dragon&apos;s blood trees in Yemen to a
                                    rainbow-colored hot.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-7ed0378 elementor-widget elementor-widget-aprt_contact_info"
                          data-id="7ed0378"
                          data-element_type="widget"
                          data-settings='{"shape_margin":{"unit":"px","top":"15","right":"0","bottom":"15","left":"0","isLinked":false},"shape_margin_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"shape_margin_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"shape_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"shape_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"shape_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true}}'
                          data-widget_type="aprt_contact_info.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="contact-address-wrap m-0">
                              <div className="contact-address-box d-flex">
                                <Image src={Call1Icon} alt="call1" />
                                <h3>
                                  <a href="tel:8801761111456">+8801761111456</a>
                                </h3>
                              </div>
                              <div className="contact-address-box d-flex">
                                <Image src={Message1Icon} alt="message1" />
                                <h3>
                                  <a href="../cdn-cgi/l/email-protection.html#61080f070e210419000c110d044f020e0c">
                                    info@example.com
                                  </a>
                                </h3>
                              </div>
                              <div className="contact-address-box d-flex">
                                <Image src={HomeIcon} alt="home" />
                                <h3>
                                  <a href="#">
                                    23/6 Papayan Salford Tower, 16th Floor,
                                    Shambolic, Dhaka
                                  </a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-cee268b elementor-widget elementor-widget-heading"
                          data-id="cee268b"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h4 className="elementor-heading-title elementor-size-default">
                              We’re available from 10 am – 7 pm EST, 05 days{" "}
                              <br /> a week.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0e34d33"
                      data-id="0e34d33"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-0c03600 elementor-widget elementor-widget-aprt_faqs_form"
                          data-id="0c03600"
                          data-element_type="widget"
                          data-settings='{"form_spacing":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"form_spacing_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"form_spacing_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"form_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"form_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"form_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true}}'
                          data-widget_type="aprt_faqs_form.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="contact-form-wrap">
                              <h2 className="details-info-title mb-4 aprt-faq-form-title">
                                Send us a message
                              </h2>
                              <div
                                id="contact-form"
                                className="position-relative submit-form"
                              >
                                <div
                                  className="wpcf7 js"
                                  id="wpcf7-f1228-p1236-o1"
                                  lang="en-US"
                                  dir="ltr"
                                >
                                  <div className="screen-reader-response">
                                    <p
                                      role="status"
                                      aria-live="polite"
                                      aria-atomic="true"
                                    ></p>
                                    <ul></ul>
                                  </div>
                                  <form
                                    action=""
                                    className="wpcf7-form init"
                                  >
                                    <div className="row">
                                      <div className="col-lg-12">
                                        <span className="wpcf7-form-control-wrap">
                                          <textarea
                                            className="wpcf7-form-control wpcf7-textarea"
                                            placeholder="Type Your Message..."
                                          ></textarea>
                                        </span>
                                      </div>
                                      <div className="col-lg-6">
                                        <span className="wpcf7-form-control-wrap">
                                          <input
                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                            placeholder="Your Name :"
                                            type="text"
                                          />
                                        </span>
                                      </div>
                                      <div className="col-lg-6">
                                        <span className="wpcf7-form-control-wrap">
                                          <input
                                            className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                                            placeholder="Your Phone Number:"
                                            type="tel"
                                          />
                                        </span>
                                      </div>
                                      <div className="col-lg-12">
                                        <span
                                          className="wpcf7-form-control-wrap"
                                        >
                                          <input
                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                            placeholder="Type Your Subject:"
                                            type="text"
                                          />
                                        </span>
                                      </div>
                                    </div>
                                    <p>
                                      <button
                                        type="submit"
                                        className="contact-submit-btn"
                                      >
                                        Post Comments
                                      </button>
                                    </p>
                                    <p className="form-message"></p>
                                    <div
                                      className="wpcf7-response-output"
                                      aria-hidden="true"
                                    ></div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-b8ff9dc elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="b8ff9dc"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a55f98f"
              data-id="a55f98f"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-c74c99b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="c74c99b"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6abae61"
                      data-id="6abae61"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-c25ce0d elementor-widget__width-initial elementor-widget elementor-widget-aprt_hero_title"
                          data-id="c25ce0d"
                          data-element_type="widget"
                          data-widget_type="aprt_hero_title.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="section-title title-anim te-align">
                              <div>
                                <span className="te-subtitle">
                                  Work Process
                                </span>
                              </div>
                              <div>
                                <h2 className="te_title about-title aprt-size-default">
                                  Our Work Process
                                </h2>
                              </div>
                              <div>
                                <div className="normal__text">
                                  <p>
                                    Get the most of reduction in your team’s
                                    operating costs for the whole product which
                                    creates amazing UI/UX experiences.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-41c47bd elementor-widget elementor-widget-aprt_work_process"
                          data-id="41c47bd"
                          data-element_type="widget"
                          data-settings='{"aprt_layout_margin":{"unit":"px","top":"60","right":"0","bottom":"0","left":"0","isLinked":false},"aprt_layout_margin_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"aprt_layout_margin_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"aprt_layout_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"aprt_layout_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"aprt_layout_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true}}'
                          data-widget_type="aprt_work_process.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="work-process-area">
                              <div className="container">
                                <div className="row work-process-wrap row-cols-lg-4 row-cols-1 row-cols-sm-2">
                                  <div className="col fade_left">
                                    <div className="work-process-box">
                                      <span className="d-inline-flex justify-content-center align-items-center work-process-1">
                                        01
                                      </span>
                                      <h2 className="syne-font">Research</h2>
                                      <p>
                                        Branding can change how people perceive
                                        your brand, it can drive new
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col fade_left">
                                    <div className="work-process-box">
                                      <span className="d-inline-flex justify-content-center align-items-center work-process-2">
                                        02
                                      </span>
                                      <h2 className="syne-font">Idea</h2>
                                      <p>
                                        Branding is absolutely critical to a
                                        business because
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col fade_left">
                                    <div className="work-process-box">
                                      <span className="d-inline-flex justify-content-center align-items-center work-process-3">
                                        03
                                      </span>
                                      <h2 className="syne-font">Develop</h2>
                                      <p>
                                        Let’s imagine an e-commerce
                                        startup—we’ll call
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col fade_left">
                                    <div className="work-process-box">
                                      <span className="d-inline-flex justify-content-center align-items-center work-process-4">
                                        04
                                      </span>
                                      <h2 className="syne-font">Launch</h2>
                                      <p>
                                        Let’s imagine an e-commerce
                                        startup—we’ll call
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-a30f01a elementor-widget elementor-widget-Aprt_button"
                          data-id="a30f01a"
                          data-element_type="widget"
                          data-settings='{"btn_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true}}'
                          data-widget_type="Aprt_button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="te-btn">
                              <div className="work-process-btn-wrap">
                                <Link
                                  className="common-btn style-three d-inline-block link"
                                  href="/"
                                  rel="nofollow"
                                >
                                  Schedule A Free Expert Session
                                  <svg
                                    width="27"
                                    height="14"
                                    viewBox="0 0 27 14"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.217443 6.25H18.4827C18.6276 6.25 18.7001 6.30263 18.7001 6.40789V7.59211C18.7001 7.69737 18.6276 7.75 18.4827 7.75H0.217443C0.0724811 7.75 0 7.69737 0 7.59211V6.40789C0 6.30263 0.0724811 6.25 0.217443 6.25Z"
                                      fill="currentColor"
                                    ></path>
                                    <path
                                      d="M20.7002 12.2802L25.0469 7.93355C25.5602 7.42021 25.5602 6.58021 25.0469 6.06688L20.7002 1.72021"
                                      stroke="currentColor"
                                      stroke-width="1.5"
                                      stroke-miterlimit="10"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </svg>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
