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

export default function Course() {

  return (
    <div className="outerMainAbout">
      <div className="bannerDataTop">
        <div className="innerContentBnr">
           <h3>Courses</h3>
           <div className="breadcrumb-info">
              <ul>
                <li className="breadcrumb-item">
                  <Link href={"/"}>Home &nbsp;</Link>
                </li>
                <li className="breadcrumb-item">courses</li>
              </ul>
            </div>
            <div className="bootomArrow">
              <Image src={bottomArrow} alt="Bottom Arrow"/>
            </div>
        </div>
      </div>
      <div className="formInfoData">
        <div className="centerWrapper">
          <h3>Courses</h3>
          <h2>Courses of music</h2>
          <p>Courses Us Directly For More Information Or Leave A Message Below And We'll <br/> Get Back To You  ASAP</p>
          <div className="ourServiceBox">
            <div className="serviceCard">
               <h3>Courses!</h3>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <ul>
                  <li>100 Members</li>
                  <li>Beginner</li>
                  <li>6 Months</li>
                  <li>Certificate Guarantee</li>
                </ul>
                <button type="button">Join Now</button>
                <div className="priceInfo">
                  <p>R 10,000 / $350 plus tax</p>
                </div>
            </div>
            <div className="serviceCard">
               <h3>Courses!</h3>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <ul>
                  <li>100 Members</li>
                  <li>Beginner</li>
                  <li>6 Months</li>
                  <li>Certificate Guarantee</li>
                </ul>
                <button type="button">Join Now</button>
                <div className="priceInfo">
                  <p>R 10,000 / $350 plus tax</p>
                </div>
            </div>
            <div className="serviceCard">
               <h3>Courses!</h3>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <ul>
                  <li>100 Members</li>
                  <li>Beginner</li>
                  <li>6 Months</li>
                  <li>Certificate Guarantee</li>
                </ul>
                <button type="button">Join Now</button>
                <div className="priceInfo">
                  <p>R 10,000 / $350 plus tax</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
