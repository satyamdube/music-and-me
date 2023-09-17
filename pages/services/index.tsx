import Image from "next/image";
import Link from "next/link";

import SpRightWhite from "@/public/Assets/pages/sp-right-white.png";
import CommanSite from "@/Constent/CommanSite";
import ServiceCard from "@/Components/Services/ServiceCard";

export default function Services() {
  return (
    <div className="outerMainService">
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
                    <li className="breadcrumb-item">Services</li>
                  </ul>
                  <h2 className="text-white"> Services</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor elementor-1111">
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-8156819 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="8156819"
          data-element_type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2c4f8df"
              data-id="2c4f8df"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-6fe8e78 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="6fe8e78"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-d0289f2"
                      data-id="d0289f2"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-d35f00d elementor-widget__width-initial elementor-widget elementor-widget-aprt_hero_title"
                          data-id="d35f00d"
                          data-element_type="widget"
                          data-widget_type="aprt_hero_title.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="section-title title-anim te-align">
                              <div>
                                <span className="te-subtitle">
                                  What We Offer
                                </span>{" "}
                              </div>
                              <div>
                                <h2 className="te_title about-title aprt-size-default">
                                  Our Creative Services
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
                          className="elementor-element elementor-element-8f56d11 elementor-widget elementor-widget-aprt_creative_services"
                          data-id="8f56d11"
                          data-element_type="widget"
                          data-settings='{"aprt_layout_margin":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"aprt_layout_margin_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"aprt_layout_margin_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"aprt_layout_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"aprt_layout_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"aprt_layout_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"shape_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"shape_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"shape_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true}}'
                          data-widget_type="aprt_creative_services.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="service-area  overflow-hidden position-relative p-0 m-0">
                              <div className="container">
                                <div className="row justify-content-center mt-60">
                                  <div className="col-lg-12 col-xl-11">
                                    <ul className="service-list-wrap animation-content">
                                      {CommanSite.serviceList.map(
                                        (item: any, idx: number) => (
                                          <ServiceCard
                                            key={`${idx}_${item.title}`}
                                            item={item}
                                            idx={idx}
                                          />
                                        )
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-1724349 elementor-widget elementor-widget-Aprt_button"
                          data-id="1724349"
                          data-element_type="widget"
                        >
                          <div className="elementor-widget-container">
                            <div className="te-btn">
                              <div className="common-btn">
                                <span className="common-btn_circle"></span>
                                <Link
                                  href={"/"}
                                  rel="nofollow"
                                  className="common-btn_inner link"
                                >
                                  <span className="button_text_container">
                                    Get Started Now{" "}
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
                  className="elementor-element elementor-element-5475879 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-aprt_animation_image"
                  data-id="5475879"
                  data-element_type="widget"
                  data-widget_type="aprt_animation_image.default"
                >
                  <div className="elementor-widget-container">
                    <Image
                      decoding="async"
                      className="te-img-position-v2"
                      src={SpRightWhite}
                      alt="Awesome Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
