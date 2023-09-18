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
           <div className="emailInfoData">
              <div className="leftDataInfo">
                 <h4>PHONE</h4>
                 <p><Image src={dotData} alt="Dot"/> (+91) 8591504800</p>
              </div>
              <div className="leftDataInfo">
                 <h4>Email address</h4>
                 <p><Image src={dotData} alt="Dot"/> support@kaushikismusicandus.com</p>
              </div>
              <div className="leftDataInfo">
                 <h4>Call timings</h4>
                 <p><Image src={dotData} alt="Dot"/> Monday - Saturday: 10am - 7pm</p>
              </div>
           </div>
           <div className="formDataInfo">
              <div className="formLabelData">
                   <div className="leftFormLabelData">
                      <label>Full Name <sup>*</sup></label>
                      <input type="text" placeholder=""/>
                   </div>
                   <div className="leftFormLabelData">
                      <label>Email <sup>*</sup></label>
                      <input type="email" placeholder=""/>
                   </div>
                   <div className="leftFormLabelData">
                      <label>Phone <sup>*</sup></label>
                      <input type="text" placeholder=""/>
                   </div>
              </div>
              <div className="formLabelData">
                   <div className="textArea">
                      <label>Enquiry</label>
                      <textarea></textarea>
                   </div>
              </div>
           </div>
        </div>
      </div>
      <div className="mapDataInfo">
        <iframe src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"> </iframe>
      </div>
      <div className="slideDataInfoBottom">
         <div className="leftInfoImgData">
            <Image src={slide1} alt="Slide"/>
         </div>
         <div className="leftInfoImgData">
            <Image src={slide2} alt="Slide"/>
         </div>
         <div className="leftInfoImgData">
            <Image src={slide3} alt="Slide"/>
         </div>
         <div className="leftInfoImgData">
            <Image src={slide4} alt="Slide"/>
         </div>
      </div>
    </div>
  );
}
