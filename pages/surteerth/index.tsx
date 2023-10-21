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
import videoPlay from "@/public/Assets/pages/videoPlay.png";
import SliderTest from "../testSlider";
import SliderTestVideo from "../testSliderVideo";
import Head from 'next/head'
export default function Surteerth() {

  return (
    <div className="outerMainAbout">
      <Head>
      <title>Surteerth Academy</title>
      <meta name='description' content='WELCOME TO KAUSHIKI CHAKRABORTY MUSIC AND US' />
      </Head>
      <div className="bannerDataTop">
        <div className="innerContentBnr">
           <h3>Surteerth Academy</h3>
           <div className="breadcrumb-info">
              <ul>
                <li className="breadcrumb-item">
                  <Link href={"/"}>Home &nbsp;</Link>
                </li>
                <li className="breadcrumb-item">Surteerth Academy</li>
              </ul>
            </div>
            <div className="bootomArrow">
              <Image src={bottomArrow} alt="Bottom Arrow"/>
            </div>
        </div>
      </div>
      <div className="formInfoData cnt" style={{paddingBottom:0}}>
        <div className="centerWrapper">
          <h3>Surteerth Academy Description</h3>
          <p>Welcome to Surteerth Academy: Your Gateway to Musical Mastery</p>
          <p>Are you an aspiring musician looking to take your skills to the next level? Look
          no further! Surteerth Academy is your ultimate destination for musical
          excellence. We cater to both intermediate and advanced level students,
          offering a unique hybrid learning experience that combines the best of both
          worlds.</p>
          <p>At Surteerth Academy, we believe that music is not just a skill; it is an art that
          deserves to be nurtured and mastered. To ensure our students receive the best
          possible education, we have designed a program that seamlessly blends
          traditional offline learning with the convenience of online classes.</p>
          <p>One of the highlights of Surteerth Academy is our exclusive offline classes
          conducted by Smt. Kaushiki Chakraborty and Shri. Parthasarathi Desikan.
          Their guidance and expertise provide a unique opportunity for students to
          learn directly from the masters. We recognize that your time is precious, and
          that is why we complement our monthly in-person classes with online sessions.</p>
          <p>Embark on your musical journey with Surteerth Academy and experience the
          magic of learning from the maestros in person. Whether you are an
          intermediate student looking to refine your skills or an advanced musician
          seeking further excellence, Surteerth Academy is your opportunity to soar to
          new musical heights.
          </p>
          <p>Do not miss this chance to learn from the best. Enroll now and let the music in
            your soul find its true voice with Surteerth Academy!</p>
          </div>
      </div>
      <div className="formInfoData">
        <div className="centerWrapper">
          <h3>Sur Teerth Academy</h3>
          <h2>Music... The art of thinking with <br/> sounds</h2>
           <div className="videoPlayNew">
            <Image src={videoPlay} alt="Video"/>
           </div>
        </div>
      </div>
      <div className="formInfoData" style={{paddingTop:0, paddingBottom:40}}>
        <div className="centerWrapper">
          <h3>Our program</h3>
          <h2>Grade programs</h2>
          <p style={{margin:0}}>In publishing and graphic design, Lorem ipsum <br/> In publishing and graphic design, Lorem ipsum</p>
        </div>
      </div>
      <div>
         <div className="centerWrapper">
            <div className="sliderTest">
                <SliderTestVideo/>
                <div className="viewAllInfo">
                  <button>View all</button>
                </div>
            </div>
         </div>
      </div>
      <br/><br/><br/>
    </div>
  );
}
