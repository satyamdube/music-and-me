import React, { useState, useEffect } from "react"
import Image from "next/image";
import Link from "next/link";

import CallIcon from "@/public/Assets/pages/call.png";
import MessageIcon from "@/public/Assets/pages/message.png";
import LogoIcon from "@/public/Assets/pages/logo.png";
import MenuIcon from "@/public/Assets/pages/menu.png";
import facebook from "@/public/Assets/pages/face.png";
import insta from "@/public/Assets/pages/insta.png";
import wats from "@/public/Assets/pages/whats.png";
import downArrow from "@/public/Assets/pages/down-arrow.png";
import CompanyDetails from "@/Constent/CompanyDetails";
import CommanSite from "@/Constent/CommanSite";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false)
  const handlerToggle = () => setToggle((pre) => !pre);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])

  return (
    <div className="outerMainInfoHeader">
      <header className="headerMain">
        <div className={scroll ? "bottomHeader scrolled" : "bottomHeader"}>
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
                  <Link href="/courses">Courses</Link>
                  <Link href="/">Surteerth Academy</Link>
                  <Link href="/">Masterclass</Link>
                  <Link href="/">Blogs</Link>
                  <Link href="/contact">Contact Us</Link>
              </div>
              <div className="socialIconInfo">
                <Link href={"/"}>
                  <Image src={facebook} alt="facebook" />
                </Link>
                <Link href={"/"}>
                  <Image src={insta} alt="instagram" />
                </Link>
                <Link href={"/"}>
                  <Image src={wats} alt="whatssapp" />
                </Link>
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
