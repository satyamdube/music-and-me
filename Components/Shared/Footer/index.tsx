import Link from "next/link";
import Image from "next/image";

import PhoneIcon from "@/public/Assets/svg/phone";
import MailIcon from "@/public/Assets/svg/mail";
import LogoIcon from "@/public/Assets/pages/logo.png";
import AwesomeIcon from "@/public/Assets/pages/footer-1-sp.png";
import CompanyDetails from "@/Constent/CompanyDetails";
import CommanSite from "@/Constent/CommanSite";

interface Iitem {
  name: string;
  link: string;
}

interface ILiListRendar {
  list: Array<Iitem>;
}

const LiListRendar = ({ list }: ILiListRendar) => {
  if (!Array.isArray(list) || !list?.length) return null;
  return list.map((item, idx) => (
    <li
      key={`${idx}_${item.name}`}
      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1576"
    >
      <Link
        title={item.name}
        href={item.link}
        className="hvr-underline-from-left1"
      >
        {item.name}
      </Link>
    </li>
  ));
};

export default function Footer() {
  return (
    <footer className="outerMainFooter">
      <div className="footer-area position-relative overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-4 col-xl-4">
                  <div className="subscribe-title">
                    <h2 className="text-white">Join Our Newsletter</h2>
                  </div>
                </div>
                <div className="col-lg-8 mobt-24">
                  <div className="subscribe-form position-relative">
                    <form
                      id="mc4wp-form-1"
                      className="mc4wp-form mc4wp-form-27"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div className="mc4wp-form-fields">
                        <input
                          type="email"
                          name="EMAIL"
                          placeholder="Your Email Address"
                          required
                        />
                        <button className="common-btn style-two link">
                          Join Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="widget-section mt-60">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-6 col-12">
                <div
                  id="aprt_about_company-2"
                  className="footer-widget widget-wrap widget_aprt_about_company"
                >
                  <div className="footer-logo-wrap">
                    <Image src={LogoIcon} alt="Awesome Image" />
                    <p>{CompanyDetails.address}</p>
                    <ul>
                      <li>
                        <Link className="link" href={`tel:${CompanyDetails.mobileNumber}`}>
                          <PhoneIcon />
                          {CompanyDetails.mobileNumber}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link"
                          href={`mailto:${CompanyDetails.email}`}
                        >
                          <MailIcon />
                          {CompanyDetails.email}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-12">
                <div
                  id="nav_menu-2"
                  className="footer-widget widget-wrap widget_nav_menu"
                >
                  <div className="footer-widget-title">
                    <h2>Our Solution</h2>
                  </div>
                  <div className="menu-footer-our-solution-container">
                    <ul id="menu-footer-our-solution" className="menu">
                      <LiListRendar list={CommanSite.ourSolution} />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-12">
                <div
                  id="nav_menu-3"
                  className="footer-widget widget-wrap widget_nav_menu"
                >
                  <div className="footer-widget-title">
                    <h2>Navigation</h2>
                  </div>
                  <div className="menu-footer-navigation-container">
                    <ul id="menu-footer-navigation" className="menu">
                      <LiListRendar list={CommanSite.navigationList} />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-12">
                <div
                  id="aprt_google_map-2"
                  className="footer-widget widget-wrap widget_aprt_google_map"
                >
                  <div className="img-wrap-box img-wrap-box-map position-relative">
                    <iframe src="https://maps.google.com/maps?q=delhi&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h5 className="copyright-text text-white">
                  Copyright © 2023 All Rights Reserved
                </h5>
              </div>
              <div className="col-lg-6 mobt-24">
                <ul className="copyright-list text-lg-end">
                  <LiListRendar list={CommanSite.navigationList} />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="footer-sp position-absolute start-50 bottom-0 translate-middle-x "
          src={AwesomeIcon}
          alt="Awesome Image"
        />
      </div>
    </footer>
  );
}
