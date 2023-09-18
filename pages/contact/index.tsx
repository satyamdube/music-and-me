import Image from "next/image";
import Link from "next/link";

import HomeWhiteAboutIcon from "@/public/Assets/pages/home-white-about.png";
import Call1Icon from "@/public/Assets/pages/call1.png";
import Message1Icon from "@/public/Assets/pages/message1.png";
import HomeIcon from "@/public/Assets/pages/home.png";
import bottomArrow from "@/public/Assets/pages/bottomArrow.png";

export default function Contact() {
  return (
    <div className="outerMainAbout">
      <div className="bannerDataTop">
        <div className="innerContentBnr">
           <h3>Contact Us</h3>
           <div className="breadcrumb-info">
              <ul>
                <li className="breadcrumb-item">
                  <Link href={"/"}>Home &nbsp;</Link>
                </li>
                <li className="breadcrumb-item">Contact Us</li>
              </ul>
            </div>
            <div className="bootomArrow">
              <Image src={bottomArrow} alt="Bottom Arrow"/>
            </div>
        </div>
      </div>
      <div className="formInfoData">
        <div className="centerWrapper">
          <h3>Contact Us</h3>
          <h2>Details of contact us</h2>
          <p>Conatct Us Directly For More Information Or Leave A Message Below And We'll <br/> Get Back To You  ASAP</p>
        </div>
      </div>
    </div>
  );
}
