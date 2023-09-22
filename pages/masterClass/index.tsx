import Image from "next/image";
import Link from "next/link";

import HomeWhiteAboutIcon from "@/public/Assets/pages/home-white-about.png";
import Call1Icon from "@/public/Assets/pages/call1.png";
import Message1Icon from "@/public/Assets/pages/message1.png";
import HomeIcon from "@/public/Assets/pages/home.png";
import bottomArrow from "@/public/Assets/pages/bottomArrow.png";
import dotData from "@/public/Assets/pages/dotData.png";
import map from "@/public/Assets/pages/map.png";
import slide1 from "@/public/Assets/pages/slide1.png";
import slide2 from "@/public/Assets/pages/slide2.png";
import slide3 from "@/public/Assets/pages/slide3.png";
import slide4 from "@/public/Assets/pages/slide4.png";
import SliderTest from "../testSlider";
import SliderTestVideo from "../testSliderVideo";

export default function MasterClass() {

  return (
    <div className="outerMainAbout">
      <div className="bannerDataTop">
        <div className="innerContentBnr">
           <h3>Master Class</h3>
           <div className="breadcrumb-info">
              <ul>
                <li className="breadcrumb-item">
                  <Link href={"/"}>Home &nbsp;</Link>
                </li>
                <li className="breadcrumb-item">Master Class</li>
              </ul>
            </div>
            <div className="bootomArrow">
              <Image src={bottomArrow} alt="Bottom Arrow"/>
            </div>
        </div>
      </div>
      <div className="formInfoData">
        <div className="centerWrapper">
          <h3>Master Class</h3>
          <h2>Course of masterclass</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
          <div className="emailInfoData">
              <div className="leftDataInfo new">
                 <h4>Riyaz masterclass</h4>
              </div>
              <div className="leftDataInfo hide">
                 <h4>coming soon...</h4>
              </div>
              <div className="leftDataInfo hide">
                 <h4>coming soon...</h4>
              </div>
           </div>
         </div>
      </div>
    </div>
  );
}
