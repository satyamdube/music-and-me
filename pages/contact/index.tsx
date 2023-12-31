import Image from "next/image";
import Link from "next/link";

import HomeWhiteAboutIcon from "@/public/Assets/pages/home-white-about.png";
import Call1Icon from "@/public/Assets/pages/call1.png";
import Message1Icon from "@/public/Assets/pages/message1.png";
import HomeIcon from "@/public/Assets/pages/home.png";
import bottomArrow from "@/public/Assets/pages/bottomArrow.png";
import dotData from "@/public/Assets/pages/dotData.png";
import map from "@/public/Assets/pages/map.png";
import slide1 from "@/public/Assets/pages/footerTop1.jpg";
import slide2 from "@/public/Assets/pages/footerTop2.jpg";
import slide3 from "@/public/Assets/pages/footerTop3.jpg";
import slide4 from "@/public/Assets/pages/footerTop4.jpg";
import Head from 'next/head'
export default function Contact() {

  return (
    <div className="outerMainAbout">
      <Head>
      <title>Contact Us</title>
      <meta name='description' content='WELCOME TO KAUSHIKI CHAKRABORTY MUSIC AND US' />
      </Head>
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
          <p>Conatct Us Directly For More Information Or Leave A Message Below And We will <br/> Get Back To You  ASAP</p>
           <div className="emailInfoData">
              <div className="leftDataInfo">
                 <h4>PHONE</h4>
                 <p><Image src={dotData} alt="Dot"/> (+91) 9147056393</p>
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
              <div className="submitDataBtn">
                  <button type="button">Submit</button>
              </div>
           </div>
        </div>
      </div>
      <div className="mapDataInfo">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689704996!2d88.26495065623695!3d22.535564936867313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1698992076533!5m2!1sen!2sin"> </iframe>
      </div>
      <div className="slideDataInfoBottom">
         <div className="leftInfoImgData">
            <img src="https://mus-dev-assets.s3.ap-south-1.amazonaws.com/Website/dashboard_1.jpg" alt="Slide"/>
         </div>
         <div className="leftInfoImgData">
             <img src="https://mus-dev-assets.s3.ap-south-1.amazonaws.com/Website/dashboard_2.jpg" alt="Slide"/>
         </div>
         <div className="leftInfoImgData">
            <img src="https://mus-dev-assets.s3.ap-south-1.amazonaws.com/Website/dashboard_3.jpg" alt="Slide"/>
         </div>
         <div className="leftInfoImgData">
            <img src="https://mus-dev-assets.s3.ap-south-1.amazonaws.com/Website/dashboard_4.jpg" alt="Slide"/>
         </div>
      </div>
    </div>
  );
}
