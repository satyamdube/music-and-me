import Image from "next/image";
import Link from "next/link";

import ServiceCard from "@/Components/Services/ServiceCard";

import CommanSite from "@/Constent/CommanSite";
import SpRightWhite from "@/public/Assets/pages/sp-right-white.png";
import BulbIcon from "@/public/Assets/pages/bulb.png";
import WowImageIcon from "@/public/Assets/pages/wow-image.png";
import WowImage2Icon from "@/public/Assets/pages/wow-image2.png";
import Symbol from "@/public/Assets/pages/Symbol.png";
import Pen from "@/public/Assets/pages/pen.png";
import Product from "@/public/Assets/pages/product.png";
import Res from "@/public/Assets/pages/res.png";
import Slider from "@/Components/Home/Slider";

export default function Home() {
  return (
    <div className="outerMainHome">
      <Slider />
      <section className="whatMakeUs">
        <h2>What makes us different?</h2>
        <div className="cardInfoData">
          <div className="innerDataBoxCrd">
            <div className="leftCardBox">
              <Image src={BulbIcon} alt={"bulb icon"} />
              <h5>INSIDER VIEW</h5>
              <p>
                we have first-hand expertise in scaling marketplace business,
                data analytics, digital marketing, category management,
                inventory management, operation excellence and brand building.
              </p>
            </div>
            <div className="leftCardBox">
              <Image src={WowImageIcon} alt={"bulb icon"} />
              <h5>360 ANGLE</h5>
              <p>
                We scale your presence across platforms; social commerce,
                e-commerce and B2B platforms using a data-led approach,
                identifying market opportunities &amp; gaps, focusing on
                consumer experience and improving balance sheet.
              </p>
            </div>
            <div className="leftCardBox">
              <Image src={WowImage2Icon} alt={"bulb icon"} />
              <h5>STRATEGIC PARTNERS</h5>
              <p>
                Along with opening a gateway for online selling, we also become
                a strategic partner. We take ownership of your digital sales and
                are committed to building your brand through customized
                strategies for different e-commerce platforms, and strategic
                partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
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
                                  href="/"
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
                      width={192}
                      height={354}
                      className={"te-img-position-v2"}
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
      <section className="elementor-section elementor-top-section elementor-element elementor-element-fc5e0e5 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default">
          <div className="newdata elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5c8aa8b" data-id="5c8aa8b" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-b15cf0c elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box animated zoomIn" data-id="b15cf0c" data-element_type="widget">
                      <div className="elementor-widget-container">
                          <div className="elementor-icon-box-wrapper">
                            <div className="elementor-icon-box-icon">
                                <span className="elementor-icon elementor-animation-">
                                <Image
                                  width={50}
                                  height={50}
                                  src={Symbol}
                                  alt="Symbol"
                                />				
                                </span>
                            </div>
                            <div className="elementor-icon-box-content">
                                <h3 className="elementor-icon-box-title">
                                  <span>
                                  Cutting-edge					</span>
                                </h3>
                                <p className="elementor-icon-box-description">
                                  At BIG FACTION, we are committed to staying at the forefront of innovation and technology. With our cutting-edge solutions, we empower your business to thrive in the digital landscape.					
                                </p>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-60a9116" data-id="60a9116" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-965cf23 elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box animated zoomIn" data-id="965cf23" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;zoomIn&quot;,&quot;wdt_animation_effect&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
                      <div className="elementor-widget-container">
                          <div className="elementor-icon-box-wrapper">
                            <div className="elementor-icon-box-icon">
                                <span className="elementor-icon elementor-animation-">
                                <Image
                                  width={50}
                                  height={50}
                                  src={Pen}
                                  alt="Pen"
                                />
                                </span>
                            </div>
                            <div className="elementor-icon-box-content">
                                <h3 className="elementor-icon-box-title">
                                  <span>
                                  Creative					</span>
                                </h3>
                                <p className="elementor-icon-box-description">
                                  Our team of imaginative professionals brings innovative ideas to life, crafting unique solutions that make your business stand out. With our creative approach, we ignite your brand&apos;s potential and inspire meaningful connections with your audience.					
                                </p>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-26a500d" data-id="26a500d" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-4a8434c elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box animated zoomIn" data-id="4a8434c" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;zoomIn&quot;,&quot;wdt_animation_effect&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
                      <div className="elementor-widget-container">
                          <div className="elementor-icon-box-wrapper">
                            <div className="elementor-icon-box-icon">
                                <span className="elementor-icon elementor-animation-">
                                <Image
                                  width={50}
                                  height={50}
                                  src={Product}
                                  alt="Product"
                                />
                                			</span>
                            </div>
                            <div className="elementor-icon-box-content">
                                <h3 className="elementor-icon-box-title">
                                  <span>
                                  Productive					</span>
                                </h3>
                                <p className="elementor-icon-box-description">
                                  At BIG FACTION, we maximize efficiency and drive tangible results for your business. Trust our streamlined processes and diligent work ethic to optimize your productivity.					
                                </p>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-10f87ed" data-id="10f87ed" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-6dba1b5 elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box animated zoomIn" data-id="6dba1b5" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;zoomIn&quot;,&quot;wdt_animation_effect&quot;:&quot;none&quot;}" data-widget_type="icon-box.default">
                      <div className="elementor-widget-container">
                          <div className="elementor-icon-box-wrapper">
                            <div className="elementor-icon-box-icon">
                                <span className="elementor-icon elementor-animation-">
                                <Image
                                  width={50}
                                  height={50}
                                  src={Res}
                                  alt="Res"
                                />
                                </span>
                            </div>
                            <div className="elementor-icon-box-content">
                                <h3 className="elementor-icon-box-title">
                                  <span>
                                  Responsive					</span>
                                </h3>
                                <p className="elementor-icon-box-description">
                                  At BIG FACTION, we prioritize responsiveness. Our team is dedicated to promptly addressing your needs and providing timely solutions. With our agile approach, we ensure that your business receives quick and effective support, fostering a seamless experience and building lasting partnerships.					
                                </p>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </section>
        <br/><br/><br/>

        <section className="exitBottom new elementor-section elementor-top-section elementor-element elementor-element-d3dfdf2 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default">
            <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2c07102">
                  <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-1c43ec8 elementor-widget__width-initial elementor-absolute animated-fast elementor-view-default elementor-invisible elementor-widget elementor-widget-icon">
                        <div className="elementor-widget-container">
                            <div className="wdt-effect-mouse-move-wrapper layer" data-depth="0.35">
                              <div className="elementor-icon-wrapper">
                                  <div className="elementor-icon">
                                  </div>
                              </div>
                            </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-e78eb1f center elementor-widget elementor-widget-wdt-heading" data-id="e78eb1f" data-element_type="widget" data-settings="{&quot;wdt_animation_effect&quot;:&quot;none&quot;}" data-widget_type="wdt-heading.default">
                        <div className="elementor-widget-container">
                            <div className="wdt-heading-holder " id="wdt-heading-e78eb1f">
                              <h2 className="wdt-heading-title-wrapper wdt-heading-align-center wdt-heading-deco-wrapper"><span className="wdt-heading-title">Specialized <span className="wdt-heading-colored-elements">Business </span><span className="wdt-heading-colored-elements">Boosting </span>Services</span></h2>
                              <div className="wdt-heading-separator-wrapper">
                                  <div className="wdt-heading-separator with-line">
                                    <div className="wdt-separator-line"></div>
                                  </div>
                              </div>
                            </div>
                        </div>
                      </div>
                      <section className="elementor-section elementor-inner-section elementor-element elementor-element-4a5b1a7 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="4a5b1a7" data-element_type="section" data-settings="{&quot;wdt_bg_image&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;,&quot;size&quot;:&quot;&quot;},&quot;wdt_bg_image_tablet&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;,&quot;size&quot;:&quot;&quot;},&quot;wdt_bg_image_mobile&quot;:{&quot;url&quot;:&quot;&quot;,&quot;id&quot;:&quot;&quot;,&quot;size&quot;:&quot;&quot;},&quot;wdt_bg_position&quot;:&quot;center center&quot;,&quot;wdt_animation_effect&quot;:&quot;none&quot;}">
                        <div className="elementor-container elementor-column-gap-narrow">
                            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-46fc930 animated-fast animated fadeInUp" data-id="46fc930" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:100}">
                              <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-387ef8f start center elementor-widget elementor-widget-wdt-icon-box" data-id="387ef8f" data-element_type="widget" data-settings="{&quot;carousel_arrows_prev_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;wdt_animation_effect&quot;:&quot;none&quot;}" data-widget_type="wdt-icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="wdt-icon-box-holder wdt-content-item-holder wdt-column-holder wdt-rc-template-ico-title-aside" id="wdt-icon-box-387ef8f">
                                          <div className="wdt-content-item">
                                              <div className="wdt-content-detail-group">
                                                <div className="wdt-content-elements-group wdt-content-group ">
                                                    <div className="wdt-content-icon-wrapper">
                                                      <div className="wdt-content-icon"><span><i aria-hidden="true" className="fas fa-boxes"></i></span></div>
                                                    </div>
                                                    <div className="wdt-content-title">
                                                      <h5><a href="#" target="_blank" rel="nofollow">Ecommerce Portal Services</a></h5>
                                                    </div>
                                                </div>
                                                <div className="wdt-content-separator separator-2"><span></span></div>
                                                <div className="wdt-content-description">Unlock your online business potential with our dynamic Ecommerce Portal Services. Accelerate your growth, streamline operations, and reach a wider audience with our comprehensive solutions. From seamless user experiences to robust back-end management, we&apos;ve got you covered. Experience the power of an optimized ecommerce portal and unleash your business&apos;s true potential.</div>
                                              </div>
                                          </div>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-f9c56f0 start center elementor-widget elementor-widget-wdt-icon-box" data-id="f9c56f0" data-element_type="widget" data-settings="{&quot;carousel_arrows_prev_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;wdt_animation_effect&quot;:&quot;none&quot;}" data-widget_type="wdt-icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="wdt-icon-box-holder wdt-content-item-holder wdt-column-holder wdt-rc-template-ico-title-aside" id="wdt-icon-box-f9c56f0">
                                          <div className="wdt-content-item">
                                              <div className="wdt-content-detail-group">
                                                <div className="wdt-content-elements-group wdt-content-group ">
                                                    <div className="wdt-content-icon-wrapper">
                                                      <div className="wdt-content-icon"><span><i aria-hidden="true" className="fab fa-wordpress"></i></span></div>
                                                    </div>
                                                    <div className="wdt-content-title">
                                                      <h5><a href="#" target="_blank" rel="nofollow">Website Design Services</a></h5>
                                                    </div>
                                                </div>
                                                <div className="wdt-content-separator separator-2"><span></span></div>
                                                <div className="wdt-content-description">Elevate your online presence with our captivating Website Design Services. We craft visually stunning and user-friendly websites that leave a lasting impression. From sleek aesthetics to seamless navigation, we ensure an immersive and engaging user experience. Let your website be a true reflection of your brand&apos;s uniqueness and stand out in the digital landscape.</div>
                                              </div>
                                          </div>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-5b27eb6 start center elementor-widget elementor-widget-wdt-icon-box" data-id="5b27eb6" data-element_type="widget" data-settings="{&quot;carousel_arrows_prev_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;wdt_animation_effect&quot;:&quot;none&quot;}" data-widget_type="wdt-icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="wdt-icon-box-holder wdt-content-item-holder wdt-column-holder wdt-rc-template-ico-title-aside" id="wdt-icon-box-5b27eb6">
                                          <div className="wdt-content-item">
                                              <div className="wdt-content-detail-group">
                                                <div className="wdt-content-elements-group wdt-content-group ">
                                                    <div className="wdt-content-icon-wrapper">
                                                      <div className="wdt-content-icon"><span><i aria-hidden="true" className="far fa-images"></i></span></div>
                                                    </div>
                                                    <div className="wdt-content-title">
                                                      <h5><a href="#" target="_blank" rel="nofollow">Graphic Design Services</a></h5>
                                                    </div>
                                                </div>
                                                <div className="wdt-content-separator separator-2"><span></span></div>
                                                <div className="wdt-content-description">Unleash the power of visuals with our captivating Graphic Design Services. Our team of creative experts transforms ideas into stunning designs that grab attention and tell your brand&apos;s story. From eye-catching logos to engaging marketing materials, we craft visuals that leave a lasting impression. Elevate your brand&apos;s aesthetic appeal and make a bold statement with our exceptional graphic design solutions.</div>
                                              </div>
                                          </div>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-2e6e28a start center elementor-widget elementor-widget-wdt-icon-box" data-id="2e6e28a" data-element_type="widget" data-settings="{&quot;carousel_arrows_prev_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;wdt_animation_effect&quot;:&quot;none&quot;}" data-widget_type="wdt-icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="wdt-icon-box-holder wdt-content-item-holder wdt-column-holder wdt-rc-template-ico-title-aside" id="wdt-icon-box-2e6e28a">
                                          <div className="wdt-content-item">
                                              <div className="wdt-content-detail-group">
                                                <div className="wdt-content-elements-group wdt-content-group ">
                                                    <div className="wdt-content-icon-wrapper">
                                                      <div className="wdt-content-icon"><span><i aria-hidden="true" className="fab fa-facebook"></i></span></div>
                                                    </div>
                                                    <div className="wdt-content-title">
                                                      <h5><a href="#" target="_blank" rel="nofollow">Social Media Services</a></h5>
                                                    </div>
                                                </div>
                                                <div className="wdt-content-separator separator-2"><span></span></div>
                                                <div className="wdt-content-description">Ignite your social media presence with our dynamic Social Media Services. We craft strategic campaigns, engaging content, and compelling visuals that captivate your audience. From building brand awareness to driving conversions, we unlock the full potential of social media for your business. Experience the power of impactful social media strategies and take your online presence to new heights.</div>
                                              </div>
                                          </div>
                                        </div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                            <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f65953b animated-fast animated fadeInUp" data-id="f65953b" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;,&quot;animation_delay&quot;:200}">
                              <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-775fc12 start center elementor-widget elementor-widget-wdt-icon-box" data-id="775fc12" data-element_type="widget" data-settings="{&quot;carousel_arrows_prev_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;wdt_animation_effect&quot;:&quot;none&quot;}" data-widget_type="wdt-icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="wdt-icon-box-holder wdt-content-item-holder wdt-column-holder wdt-rc-template-ico-title-aside" id="wdt-icon-box-775fc12">
                                          <div className="wdt-content-item">
                                              <div className="wdt-content-detail-group">
                                                <div className="wdt-content-elements-group wdt-content-group ">
                                                    <div className="wdt-content-icon-wrapper">
                                                      <div className="wdt-content-icon"><span><i aria-hidden="true" className="fas fa-video"></i></span></div>
                                                    </div>
                                                    <div className="wdt-content-title">
                                                      <h5><a href="#" target="_blank" rel="nofollow">Video Creation Services</a></h5>
                                                    </div>
                                                </div>
                                                <div className="wdt-content-separator separator-2"><span></span></div>
                                                <div className="wdt-content-description">Bring your products to life with our captivating Product Video Services. Our team of skilled videographers creates stunning visuals that showcase your products in their best light. From engaging product demos to compelling storytelling, we capture the essence of your brand and leave a lasting impression on your audience. Elevate your product marketing with our exceptional video services and make a memorable impact.</div>
                                              </div>
                                          </div>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-35ad100 start center elementor-widget elementor-widget-wdt-icon-box" data-id="35ad100" data-element_type="widget" data-settings="{&quot;carousel_arrows_prev_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;wdt_animation_effect&quot;:&quot;none&quot;}" data-widget_type="wdt-icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="wdt-icon-box-holder wdt-content-item-holder wdt-column-holder wdt-rc-template-ico-title-aside" id="wdt-icon-box-35ad100">
                                          <div className="wdt-content-item">
                                              <div className="wdt-content-detail-group">
                                                <div className="wdt-content-elements-group wdt-content-group ">
                                                    <div className="wdt-content-icon-wrapper">
                                                      <div className="wdt-content-icon"><span><i aria-hidden="true" className="fab fa-internet-explorer"></i></span></div>
                                                    </div>
                                                    <div className="wdt-content-title">
                                                      <h5><a href="#" target="_blank" rel="nofollow">SEO Services</a></h5>
                                                    </div>
                                                </div>
                                                <div className="wdt-content-separator separator-2"><span></span></div>
                                                <div className="wdt-content-description">Dominate search engine rankings with our powerful SEO Services. We optimize your website, boost organic traffic, and ensure your brand gets noticed by the right audience. From keyword research to on-page and off-page optimization, we propel your online visibility to new heights. Stay ahead of the competition and unlock the full potential of your digital presence with our results-driven SEO solutions.</div>
                                              </div>
                                          </div>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-5abb448 start center elementor-widget elementor-widget-wdt-icon-box" data-id="5abb448" data-element_type="widget" data-settings="{&quot;carousel_arrows_prev_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;wdt_animation_effect&quot;:&quot;none&quot;}" data-widget_type="wdt-icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="wdt-icon-box-holder wdt-content-item-holder wdt-column-holder wdt-rc-template-ico-title-aside" id="wdt-icon-box-5abb448">
                                          <div className="wdt-content-item">
                                              <div className="wdt-content-detail-group">
                                                <div className="wdt-content-elements-group wdt-content-group ">
                                                    <div className="wdt-content-icon-wrapper">
                                                      <div className="wdt-content-icon"><span><i aria-hidden="true" className="fab fa-instagram"></i></span></div>
                                                    </div>
                                                    <div className="wdt-content-title">
                                                      <h5><a href="#" target="_blank" rel="nofollow">Influencer Marketing Services</a></h5>
                                                    </div>
                                                </div>
                                                <div className="wdt-content-separator separator-2"><span></span></div>
                                                <div className="wdt-content-description">Amplify your brand&apos;s reach with our dynamic Influencer Marketing Services. We connect you with influential personalities who authentically promote your brand, reaching their engaged audience. From social media collaborations to impactful partnerships, we harness the power of influence to boost your brand&apos;s visibility and drive conversions. Experience the power of influential voices and harness their impact to skyrocket your brand&apos;s success.</div>
                                              </div>
                                          </div>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-cd48fca start center elementor-widget elementor-widget-wdt-icon-box" data-id="cd48fca" data-element_type="widget" data-settings="{&quot;carousel_arrows_prev_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_prev_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_vertical_top_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;carousel_arrows_next_arrow_horizontal_left_indent_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;wdt_animation_effect&quot;:&quot;none&quot;}" data-widget_type="wdt-icon-box.default">
                                    <div className="elementor-widget-container">
                                        <div className="wdt-icon-box-holder wdt-content-item-holder wdt-column-holder wdt-rc-template-ico-title-aside" id="wdt-icon-box-cd48fca">
                                          <div className="wdt-content-item">
                                              <div className="wdt-content-detail-group">
                                                <div className="wdt-content-elements-group wdt-content-group ">
                                                    <div className="wdt-content-icon-wrapper">
                                                      <div className="wdt-content-icon"><span><i aria-hidden="true" className="fab fa-product-hunt"></i></span></div>
                                                    </div>
                                                    <div className="wdt-content-title">
                                                      <h5><a href="#" target="_blank" rel="nofollow">Product Imaging and Video Services</a></h5>
                                                    </div>
                                                </div>
                                                <div className="wdt-content-separator separator-2"><span></span></div>
                                                <div className="wdt-content-description">Capture attention and inspire desire with our captivating Product Imaging Services. Our expert photographers and digital artists create stunning visuals that showcase your products in their best light. From high-quality product photography to 360-degree views and immersive virtual tours, we bring your products to life. Stand out from the competition and elevate your brand&apos;s image with our exceptional product imaging solutions.</div>
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
    </div>
  );
}
