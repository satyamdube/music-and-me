import Image from "next/image";
import Link from "next/link";
import HomeWhiteAboutIcon from "@/public/Assets/pages/home-white-about.png";
import Call1Icon from "@/public/Assets/pages/call1.png";
import Message1Icon from "@/public/Assets/pages/message1.png";
import HomeIcon from "@/public/Assets/pages/home.png";
import bottomArrow from "@/public/Assets/pages/bottomArrow.png";
import VideoData from "@/public/Assets/pages/videoPlay2.png";
import SliderTest from "../testSlider";
import SliderTestVideo from "../testSliderVideo";
import Head from 'next/head';
export default function MasterClass() {
  return (
    <div className="outerMainAbout">
      <Head>
      <title>Master Class</title>
      <meta name='description' content='WELCOME TO KAUSHIKI CHAKRABORTY MUSIC AND US' />
      </Head>
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
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer.</p>
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
           <div className="infoDataTimingPart">
             <div className="uldataLi">
               <ul>
                  <li><span className="dotData"></span> 6 Month</li>
                  <li><span className="dotData"></span> Beginner</li>
                  <li><span className="dotData"></span> 15 Lessons</li>
                  <li><span className="dotData"></span> 100 Members</li>
               </ul>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer.</p>
               <Image src={VideoData} alt="Video"/>
               <h5>WHat you will learn from masterclass</h5>
               <h6>1. For Voice Flexibility</h6>
               <h6>2. For Pitching</h6>
               <h6>3. For Sargam/Aakar</h6>
               <hr className="hrdata"/>
               <h2><b>Fees: </b> Rs 3500 (Indian Students) and $200 (Out of India)</h2>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
}
