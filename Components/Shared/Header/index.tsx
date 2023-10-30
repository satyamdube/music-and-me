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
import { useRouter } from "next/router";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false)
  const handlerToggle = () => setToggle((pre) => !pre);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])
  const router = useRouter();
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
                  <span className={router.asPath == "/" ? "active" : ""}>
                  <Link href="/">
                    Home
                  </Link>
                  </span>
                  <span className={router.asPath == "/courses" ? "active" : ""}>
                  <Link href="/courses">Courses</Link>
                  </span>
                  <span className={router.asPath == "/surteerth" ? "active" : ""}>
                  <Link href="/surteerth">Surteerth Academy</Link>
                  </span>
                  <span className={router.asPath == "/masterClass" ? "active" : ""}>
                  <Link href="/masterClass">Masterclass</Link>
                  </span>
                  <span className={router.asPath == "/about" ? "active" : ""}>
                  <Link href="/about">About Us</Link>
                  </span>
                  <span className={router.asPath == "/contact" ? "active" : ""}>
                  <Link href="/contact">Contact Us</Link>
                  </span>
              </div>
              <div className="socialIconInfo">
                <Link href={"https://m.facebook.com/profile.php?id=100069592724660&_rdr"}>
                  <Image src={facebook} alt="facebook" />
                </Link>
                <Link href={"https://www.instagram.com/kaushikismusicandus"}>
                  <Image src={insta} alt="instagram" />
                </Link>
                {/* <Link href={"https://www.instagram.com/kaushikismusicandus"}>
                  <Image src={wats} alt="whatssapp" />
                </Link> */}
              </div>
              {toggle && (
                <div className="menuRight">
                  <span className={router.asPath == "/" ? "active" : ""}>
                  <Link href="/">
                    Home
                  </Link>
                  </span>
                  <span className={router.asPath == "/courses" ? "active" : ""}>
                  <Link href="/courses">Courses</Link>
                  </span>
                  <span className={router.asPath == "/surteerth" ? "active" : ""}>
                  <Link href="/surteerth">Surteerth Academy</Link>
                  </span>
                  <span className={router.asPath == "/masterClass" ? "active" : ""}>
                  <Link href="/masterClass">Masterclass</Link>
                  </span>
                  <span className={router.asPath == "/about" ? "active" : ""}>
                  <Link href="/about">About Us</Link>
                  </span>
                  <span className={router.asPath == "/contact" ? "active" : ""}>
                  <Link href="/contact">Contact Us</Link>
                  </span>
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
