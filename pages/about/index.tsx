import Link from "next/link";
import Image from "next/image";

import About1Icon from "@/public/Assets/pages/about-1.png";
import HomeWhiteAboutIcon from "@/public/Assets/pages/home-white-about.png";
import showcase1 from "@/public/Assets/pages/showcase-1.png";
import showcase2 from "@/public/Assets/pages/showcase-2.png";
import showcase3 from "@/public/Assets/pages/showcase-3.png";
import BoxTopSp1 from "@/public/Assets/pages/box-top-sp-1.png";
import SpRightWhite from "@/public/Assets/pages/sp-right-white.png";

export default function About() {
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
                    <li className="breadcrumb-item">About Us</li>
                  </ul>
                  <h2 className="text-white"> About Us</h2>Get Started Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor elementor-1095">
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-e370d96 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="e370d96"
          data-element_type="section"
          data-settings='{"background_background":"gradient"}'
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-dc25451"
              data-id="dc25451"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-46c43ef elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="46c43ef"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7de5efc"
                      data-id="7de5efc"
                      data-element_type="column"
                      data-settings='{"animation":"none"}'
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-e59379b elementor-widget elementor-widget-aprt_float_image"
                          data-id="e59379b"
                          data-element_type="widget"
                          data-settings='{"btn_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true}}'
                          data-widget_type="aprt_float_image.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="img-wrap-box img-wrap-box-white position-relative apart-magnetic">
                              <Image
                                decoding="async"
                                className="w-100"
                                src={About1Icon}
                                alt="Awesome Image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-331c855 te-about-content"
                      data-id="331c855"
                      data-element_type="column"
                      data-settings='{"animation":"none"}'
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-5028450 elementor-widget elementor-widget-aprt_heading"
                          data-id="5028450"
                          data-element_type="widget"
                          data-widget_type="aprt_heading.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="about-content te-align">
                              <h2 className="about-title aprt_title">
                                We are <span className="color-1">Designer</span>
                                , <span className="color-2">Developers</span>,
                                and <span className="color-3">Product</span>{" "}
                                Managers, Who used to spend way too much time
                                explaining things.
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-a109418 elementor-widget elementor-widget-aprt_hero_title"
                          data-id="a109418"
                          data-element_type="widget"
                          data-widget_type="aprt_hero_title.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="section-title title-anim te-align">
                              <div>
                                <div className="normal__text">
                                  <p>
                                    We never underestimate any parts of each
                                    project as they&apos;re all essential to meeting
                                    the ultimate goal. you&apos;ll be engaged in with
                                    our positive and enthusiastic attitude.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-b6a33a8 elementor-widget elementor-widget-aprt_feature_list"
                          data-id="b6a33a8"
                          data-element_type="widget"
                          data-settings='{"aprt_layout_margin":{"unit":"px","top":"15","right":"0","bottom":"0","left":"0","isLinked":false},"aprt_layout_margin_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"aprt_layout_margin_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"aprt_layout_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"aprt_layout_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"aprt_layout_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true}}'
                          data-widget_type="aprt_feature_list.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="about-content">
                              <ul>
                                <li>
                                  <svg
                                    width="20"
                                    height="16"
                                    viewBox="0 0 20 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M19.3744 0.453125H17.7361C17.5064 0.453125 17.2885 0.558594 17.1478 0.739062L7.48456 12.9805L2.85097 7.10938C2.78087 7.02038 2.69153 6.94842 2.58964 6.8989C2.48775 6.84937 2.37597 6.82357 2.26268 6.82344H0.624403C0.467371 6.82344 0.380653 7.00391 0.476746 7.12578L6.89628 15.2586C7.19628 15.6383 7.77284 15.6383 8.07518 15.2586L19.5221 0.753125C19.6182 0.633594 19.5314 0.453125 19.3744 0.453125Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  Maecenas nec nuns orca donee elided augur
                                </li>
                                <li>
                                  <svg
                                    width="20"
                                    height="16"
                                    viewBox="0 0 20 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M19.3744 0.453125H17.7361C17.5064 0.453125 17.2885 0.558594 17.1478 0.739062L7.48456 12.9805L2.85097 7.10938C2.78087 7.02038 2.69153 6.94842 2.58964 6.8989C2.48775 6.84937 2.37597 6.82357 2.26268 6.82344H0.624403C0.467371 6.82344 0.380653 7.00391 0.476746 7.12578L6.89628 15.2586C7.19628 15.6383 7.77284 15.6383 8.07518 15.2586L19.5221 0.753125C19.6182 0.633594 19.5314 0.453125 19.3744 0.453125Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                  Top quality design provide all client
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-cce99db elementor-widget elementor-widget-Aprt_button"
                          data-id="cce99db"
                          data-element_type="widget"
                          data-settings='{"btn_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"btn_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true}}'
                          data-widget_type="Aprt_button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="te-btn">
                              <div className="common-btn style-border">
                                <span className="common-btn_circle"></span>
                                <Link
                                  href="/"
                                  rel="nofollow"
                                  className="common-btn_inner link"
                                >
                                  <span className="button_text_container">
                                    More About
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div
                  className="elementor-element elementor-element-cc31b77 elementor-widget elementor-widget-aprt_animation_image"
                  data-id="cc31b77"
                  data-element_type="widget"
                  data-widget_type="aprt_animation_image.default"
                >
                  <div className="elementor-widget-container">
                    <Image
                      decoding="async"
                      className="blog-dark-sp te-img-position"
                      src={HomeWhiteAboutIcon}
                      alt="Awesome Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-91b9973 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="91b9973"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ba515dd"
              data-id="ba515dd"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-d14b07f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="d14b07f"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1763e0f"
                      data-id="1763e0f"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-95f8a8a elementor-widget elementor-widget-aprt_hero_title"
                          data-id="95f8a8a"
                          data-element_type="widget"
                          data-widget_type="aprt_hero_title.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="section-title title-anim te-align">
                              <div>
                                <h2 className="te_title about-title aprt-size-default">
                                  Why Chooses Us?
                                </h2>
                              </div>
                              <div>
                                <div className="normal__text">
                                  <p>
                                    Vulgate advising. Egest ac sit enid
                                    suspensive massa, phallus ridicules lucius
                                    valuta prion carabiner. Class non quia amen…
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-8a12721 elementor-widget elementor-widget-aprt_icon_list_card">
                          <div className="elementor-widget-container">
                            <div className="choose-area">
                              <div className="container">
                                <div className="row justify-content-between">
                                  <div className="choose-list-wrap choose-list-wrap-black">
                                    <div className="choose-list-box d-flex fade_left">
                                      <div className="choose-list-icon">
                                        <svg
                                          width="44"
                                          height="44"
                                          viewBox="0 0 44 44"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clip-path="url(#clip0_55_969)">
                                            <path
                                              d="M41.146 13.75L34.521 7.125C32.021 4.62502 28.5835 4.75007 26.896 7.4376L23.2085 13.2709L35.021 25.0833L40.8543 21.3959C43.3751 19.7918 43.521 16.1042 41.146 13.75Z"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            ></path>
                                            <path
                                              d="M35.0205 25.0627L35.5205 33.6461C35.9997 38.4377 34.333 40.1044 29.7913 40.646L11.6247 42.7919C7.79126 43.2294 5.04129 40.4796 5.49962 36.6671L7.54136 19.417"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            ></path>
                                            <path
                                              d="M23.2083 13.2711L19.5625 13.042"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            ></path>
                                            <path
                                              d="M8 40.292L14.625 33.646"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            ></path>
                                            <path
                                              d="M19.9169 10.5415C19.9169 11.3957 19.7919 12.2499 19.5628 13.0415C19.3336 13.8749 19.0003 14.6457 18.5628 15.3749C18.0628 16.2082 17.4378 16.9582 16.7086 17.5832C15.0628 19.0415 12.9169 19.9165 10.5419 19.9165C9.47944 19.9165 8.47944 19.7499 7.54194 19.4165C5.41698 18.7082 3.64614 17.2499 2.52114 15.3749C1.66698 13.9582 1.16699 12.2915 1.16699 10.5415C1.16699 7.5832 2.52116 4.93732 4.68783 3.22898C6.29199 1.93732 8.33364 1.1665 10.5419 1.1665C15.7294 1.1665 19.9169 5.354 19.9169 10.5415Z"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-miterlimit="10"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            ></path>
                                            <path
                                              d="M14 10.5415H7"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-miterlimit="10"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            ></path>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_55_969">
                                              <rect
                                                width="44"
                                                height="44"
                                                fill="currentColor"
                                              ></rect>
                                            </clipPath>
                                          </defs>
                                        </svg>
                                      </div>
                                      <div className="choose-list-info">
                                        <Image
                                          decoding="async"
                                          className="h-img"
                                          src={showcase3}
                                          alt="Awesome Image"
                                        />
                                        <h3>Creative Best Designer</h3>
                                        <p>
                                          Lorem ipsum dolor sit amen, consenter
                                          advising elite, sed do elusion tempore
                                          incident ut laborer.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-6b5f54e elementor-widget elementor-widget-aprt_icon_list_card">
                          <div className="elementor-widget-container">
                            <div className="choose-area">
                              <div className="container">
                                <div className="row justify-content-between">
                                  <div className="choose-list-wrap choose-list-wrap-black">
                                    <div className="choose-list-box d-flex fade_left">
                                      <div className="choose-list-icon">
                                        <svg
                                          width="47"
                                          height="44"
                                          viewBox="0 0 47 44"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M26.1669 30.3335C26.1669 34.021 24.5628 37.3543 22.0003 39.6252C19.7919 41.6252 16.8753 42.8335 13.6669 42.8335C6.77115 42.8335 1.16699 37.2293 1.16699 30.3335C1.16699 24.5835 5.08365 19.7085 10.3753 18.271C11.8128 21.896 14.8961 24.6877 18.7086 25.7293C19.7503 26.021 20.8544 26.1668 22.0003 26.1668C23.1461 26.1668 24.2503 26.021 25.2919 25.7293C25.8544 27.146 26.1669 28.7085 26.1669 30.3335Z"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                          <path
                                            d="M34.5 13.6665C34.5 15.2915 34.1875 16.854 33.625 18.2707C32.1875 21.8957 29.1042 24.6873 25.2917 25.729C24.25 26.0207 23.1458 26.1665 22 26.1665C20.8542 26.1665 19.75 26.0207 18.7083 25.729C14.8958 24.6873 11.8125 21.8957 10.375 18.2707C9.8125 16.854 9.5 15.2915 9.5 13.6665C9.5 6.77067 15.1042 1.1665 22 1.1665C28.8958 1.1665 34.5 6.77067 34.5 13.6665Z"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                          <path
                                            d="M42.8333 30.3335C42.8333 37.2293 37.2292 42.8335 30.3333 42.8335C27.125 42.8335 24.2083 41.6252 22 39.6252C24.5625 37.3543 26.1667 34.021 26.1667 30.3335C26.1667 28.7085 25.8542 27.146 25.2917 25.7293C29.1042 24.6877 32.1875 21.896 33.625 18.271C38.9167 19.7085 42.8333 24.5835 42.8333 30.3335Z"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                        </svg>
                                      </div>
                                      <div className="choose-list-info">
                                        <Image
                                          decoding="async"
                                          className="h-img"
                                          src={showcase1}
                                          alt="Awesome Image"
                                        />
                                        <h3>Creative Best Designer</h3>
                                        <p>
                                          Lorem ipsum dolor sit amen, consenter
                                          advising elite, sed do elusion tempore
                                          incident ut laborer.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-5a3f577 elementor-widget elementor-widget-aprt_icon_list_card">
                          <div className="elementor-widget-container">
                            <div className="choose-area">
                              <div className="container">
                                <div className="row justify-content-between">
                                  <div className="choose-list-wrap choose-list-wrap-black">
                                    <div className="choose-list-box d-flex fade_left">
                                      <div className="choose-list-icon">
                                        <svg
                                          width="40"
                                          height="42"
                                          viewBox="0 0 40 42"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clip-path="url(#clip0_55_965)">
                                            <path
                                              d="M22.104 2.0835L34.3957 7.5418C37.9374 9.1043 37.9374 11.6877 34.3957 13.2502L22.104 18.7085C20.7082 19.3335 18.4165 19.3335 17.0207 18.7085L4.72901 13.2502C1.18734 11.6877 1.18734 9.1043 4.72901 7.5418L17.0207 2.0835C18.4165 1.4585 20.7082 1.4585 22.104 2.0835Z"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            ></path>
                                            <path
                                              d="M1.25 18.9165C1.25 20.6665 2.5625 22.6873 4.16667 23.3957L18.3125 29.6873C19.3958 30.1665 20.625 30.1665 21.6875 29.6873L35.8333 23.3957C37.4375 22.6873 38.75 20.6665 38.75 18.9165"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            ></path>
                                            <path
                                              d="M1.25 29.3335C1.25 31.271 2.39583 33.021 4.16667 33.8127L18.3125 40.1043C19.3958 40.5835 20.625 40.5835 21.6875 40.1043L35.8333 33.8127C37.6042 33.021 38.75 31.271 38.75 29.3335"
                                              stroke="currentColor"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            ></path>
                                          </g>
                                          <defs>
                                            <clipPath id="clip0_55_965">
                                              <rect
                                                width="40"
                                                height="42"
                                                fill="currentColor"
                                              ></rect>
                                            </clipPath>
                                          </defs>
                                        </svg>
                                      </div>
                                      <div className="choose-list-info">
                                        <Image
                                          decoding="async"
                                          className="h-img"
                                          src={showcase2}
                                          alt="Awesome Image"
                                        />
                                        <h3>Creative Best Designer</h3>
                                        <p>
                                          Lorem ipsum dolor sit amen, consenter
                                          advising elite, sed do elusion tempore
                                          incident ut laborer.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-a64abf2 elementor-widget elementor-widget-Aprt_button">
                          <div className="elementor-widget-container">
                            <div className="te-btn">
                              <div className="common-btn">
                                <span className="common-btn_circle"></span>
                                <Link
                                  href="/"
                                  rel="nofollow"
                                  className="common-btn_inner link"
                                >
                                  <span className="button_text_container">
                                    Get Started Now
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6ff9fc1"
                      data-id="6ff9fc1"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-0ed9734 elementor-widget elementor-widget-aprt_video_image"
                          data-id="0ed9734"
                          data-element_type="widget"
                          data-widget_type="aprt_video_image.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="img-wrap-box img-wrap-box-white img-wrap-box-video position-relative fade_left">
                              <Image
                                decoding="async"
                                className="w-100"
                                src={About1Icon}
                                alt="Awesome Image"
                              />
                              <Image
                                decoding="async"
                                className="position-absolute img-wrap-box-video-sp d-none d-lg-block"
                                src={BoxTopSp1}
                                alt="Awesome Image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div
                  className="elementor-element elementor-element-a178a86 elementor-widget elementor-widget-aprt_animation_image"
                  data-id="a178a86"
                  data-element_type="widget"
                  data-widget_type="aprt_animation_image.default"
                >
                  <div className="elementor-widget-container">
                    <Image
                      decoding="async"
                      className="blog-dark-sp te-img-position"
                      src={SpRightWhite}
                      alt="Awesome Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                                </span>{" "}
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
