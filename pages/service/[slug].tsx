import React from "react";
import Image from "next/image";
import Link from "next/link";

import HomeWhiteAboutIcon from "@/public/Assets/pages/home-white-about.png";

import CommanSite from "@/Constent/CommanSite";
import ServiceData from "@/Constent/ServiceData";

export default function ServiceDetails({
  params: { slug = "amazon" } = {},
}: any) {
  const {
    imageUrl,
    title,
    heading,
    subHeading,
    subHeadingList,
  }: {
    imageUrl: string;
    title: string;
    heading: string;
    subHeading: Array<string>;
    subHeadingList: Array<string>;
  } = ServiceData[slug];
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
                      <Link href="/">Home &nbsp;</Link>
                    </li>
                    <li className="breadcrumb-item">{title}</li>
                  </ul>
                  <h2 className="text-white">{title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor elementor-1111">
        <section className="elementor-section elementor-top-section elementor-element elementor-element-3bbb737 elementor-section-full_width elementor-section-height-default elementor-section-height-default">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-56ce69d">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-b571d3b elementor-widget elementor-widget-aprt_service_details">
                  <div className="elementor-widget-container">
                    <div className="service-details-wrap brand-area-white pt-120 pb-96 position-relative">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-4 mobt-60">
                            <div className="service-sidebar-wrap">
                              <div className="aprt-bg-color">
                                <div className="services-list">
                                  <h2 className="sidebar-title mb-4">
                                    All Services
                                  </h2>
                                  <ul>
                                    {CommanSite.serviceList.map(
                                      (service: any, idx: number) => (
                                        <li key={`${idx}_${service.slug}`}>
                                          <Link href={service.path}>
                                            {service.title}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="details-info-wrap aprt-pl-30">
                              <h2 className="details-info-title">{heading}</h2>
                              <p className="details-info-text">
                                {Array.isArray(subHeading) &&
                                  subHeading?.map((item, idx, arr) => {
                                    if (arr.length - 1 > idx)
                                      return (
                                        <React.Fragment key={idx}>
                                          <span>{item}</span>
                                          <br />
                                          <br />
                                        </React.Fragment>
                                      );
                                    return <span key={idx}>{item}</span>;
                                  })}
                              </p>
                              <Image
                                decoding="async"
                                className="w-100 mb-4"
                                src={imageUrl}
                                width={770}
                                height={388}
                                alt={`${title} Image`}
                              />
                              {Array.isArray(subHeadingList) &&
                                Boolean(subHeadingList?.length) && (
                                  <ul className="details-info-list mt-3 mb-4">
                                    {subHeadingList?.map((item, idx) => (
                                      <li key={`${idx}_${item}`}>
                                        <i className="bi bi-check2"></i>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              {/* <h2 className="details-info-sub-title">
                                Scratch to Development
                              </h2>
                              <p className="details-info-text">
                                Let’s imagine an e-commerce startup—we’ll call
                                it Beautify. Beautify creates their own
                                all-natural cosmetics and sells them online via
                                their website. Some of the key team members
                                behind this small Let’s imagine an e-commerce
                                startup—we’ll call it Beautify. Beautify creates
                                their own all-natural cosmetics and sells them
                                online via their website. Some of the key team
                                members behind this small
                              </p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Image
                        decoding="async"
                        className="position-absolute top-0 start-0 "
                        src={HomeWhiteAboutIcon}
                        alt="Awesome Image"
                      />
                    </div>
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

// This also gets called at build time
export async function getStaticProps({ params }: any) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const res = await fetch(`https://.../posts/${params.id}`)
  // const post = await res.json()

  // Pass post data to the page via props
  return { props: { params } };
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // Get the paths we want to pre-render based on posts
  const paths = CommanSite.serviceList.map((service: any, idx: number) => ({
    params: { slug: service.slug, key: idx },
  }));
  // [
  //   {
  //     params: { slug: "1" },
  //   },
  //   {
  //     params: { slug: "2" },
  //   },
  //   {
  //     params: { slug: "3" },
  //   },
  //   {
  //     params: { slug: "4" },
  //   },
  // ];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
