import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import CallIcon from "@/public/Assets/pages/call.png";
import MessageIcon from "@/public/Assets/pages/message.png";
import LogoIcon from "@/public/Assets/pages/logo.png";
import MenuIcon from "@/public/Assets/pages/menu.png";
import downArrow from "@/public/Assets/pages/down-arrow.png";
import CompanyDetails from "@/Constent/CompanyDetails";
import CommanSite from "@/Constent/CommanSite";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handlerToggle = () => setToggle((pre) => !pre);

  return (
    <div className="outerMainInfoHeader">
      <header className="headerMain">
        <div className="topHeaderInfo">
          <div className="centerWrapper">
            <div className="ulDataTopHeader">
              <div className="infoDataUL">
                <Link href="callto:+91-7975019616">
                  <Image src={CallIcon} alt="Call" />{" "}
                  {CompanyDetails.mobileNumber}
                </Link>
                <a href={`mailto:${CompanyDetails.email}`}>
                  <Image src={MessageIcon} alt="Message" />
                  {CompanyDetails.email}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomHeader">
          <div className="centerWrapper">
            <div className="outerBottomMenu">
              <div className="logoInfo">
                <Link href={"/"}>
                  <Image src={LogoIcon} alt="logo" />
                </Link>
              </div>
              <div className="menuRight desktop">
                  <Link href="/" className="active">
                    Home
                  </Link>
                  <Link href="/about">About Us</Link>
                  <div className="ulSubMenuData">
                    Services
                    <span>
                       <Image width={20} src={downArrow} alt="Down Arrow" />
                    </span>
                    <ul role="menu" className="sub-menu">
                      {CommanSite.serviceList.map((item: any, idx: number) => (
                        <li
                          key={`${idx}_${Math.random()}`}
                          className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1310 current_page_item menu-item-1317 current"
                        >
                          <Link title="Service Details" href={item.path}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/services">Services</Link>
                  <Link href="/contact">Contact Us</Link>
                </div>
              {toggle && (
                <div className="menuRight">
                  <Link href="/" className="active">
                    Home
                  </Link>
                  <Link href="/about">About Us</Link>
                  <div className="ulSubMenuData">
                    Services
                    <span>
                      <Image width={20} src={downArrow} alt="Down Arrow" />
                    </span>
                    <ul role="menu" className="sub-menu">
                      {CommanSite.serviceList.map((item: any, idx: number) => (
                        <li
                          key={`${idx}_${Math.random()}`}
                          className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1310 current_page_item menu-item-1317 current"
                        >
                          <Link title="Service Details" href={item.path}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/services">Services</Link>
                  <Link href="/contact">Contact Us</Link>
                </div>
              )}
              <div className="menuMobileView" onClick={handlerToggle}>
                <Image src={MenuIcon} alt="menu" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
