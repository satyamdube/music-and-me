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
import Head from 'next/head'
export default function About() {

  return (
    <div className="outerMainAbout">
      <Head>
      <title>About Us</title>
      <meta name='description' content='WELCOME TO KAUSHIKI CHAKRABORTY MUSIC AND US' />
      </Head>
      <div className="bannerDataTop">
        <div className="innerContentBnr">
           <h3>About Us</h3>
           <div className="breadcrumb-info">
              <ul>
                <li className="breadcrumb-item">
                  <Link href={"/"}>Home &nbsp;</Link>
                </li>
                <li className="breadcrumb-item">About Us</li>
              </ul>
            </div>
            <div className="bootomArrow">
              <Image src={bottomArrow} alt="Bottom Arrow"/>
            </div>
        </div>
      </div>
      <div className="formInfoData cnt">
        <div className="centerWrapper">
          <h3>About Us</h3>
          <p>Step into the world of Kaushiki's Music and Us, where tradition meets
          technology, and music blossoms in the digital age!</p>
          <p>Our approach is as dynamic as the melodies of Hindustani Music. We've
          seamlessly combined the essence of the Guru-Shishya Parampara with
          cutting-edge technology. The result? An engaging, all-encompassing learning
          journey that unfolds with the elegance of classical music.</p>
          <p>Imagine this: You're exploring intricate ragas, taals, and rhythms presented in
          beautifully crafted modules. It's not just learning; it's an art form in itself,
          much like the music it teaches. With vibrant visuals and interactive tools,
          you're about to embark on a musical adventure as joyful as a lively tabla beat.</p>
          <p>But what sets us apart is our belief in practice. Our students don't merely
          learn; they actively participate. We'll assign you practical exercises that inspire
          you to prepare, record, and share your musical journey. This is where you'll
          discover your unique voice, as beautiful as the melodies you'll create.
          </p>
          <p>What makes Music and Us truly exceptional is that it's a labor of love, crafted
          by the very hands that have graced the world's grandest stages. I am deeply
          honoured to be a part of this journey, serving as a guiding light along this
          musical path. The dedication to nurturing the next generation of musical
          talent is woven into every aspect of this platform. It's not just a website; it
          stands as a heartfelt offering, a portal into the world of music that holds a
          sacred place in our hearts.
          </p>
          <p>Our promise is simple yet profound - as you delve into our courses, you'll
          enhance your singing skills and gain a deep understanding of Indian classical
          vocal music. Together, we'll pave a path as solid as a perfectly tuned tanpura
          string, leading you towards a brighter, more melodious musical future.</p>
          <p>At Music and Us, happiness isn't just a note; it's the entire symphony. Join us
          on this unique and joyous journey, where tradition and technology harmonize,
          and every lesson is a celebration of music's beauty. Together, we'll create
          melodies that resonate in your heart forever. Let's make music, and let's make
          it uniquely yours!</p>
          <p>Sing with us, swing with us, and smile with us at Music and Us. Your musical
          adventure awaits, and we're thrilled to create beautiful music together!</p>
          </div>
      </div>
      <div className="courceBanner">
         <div className="centerWrapper">
            <div className="innerContentCource">
               <h3>Latest videos</h3>
               <h2>youtube feed</h2>
               <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to <br/>  Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </div>
            <div className="sliderTest">
                <SliderTestVideo/>
                <div className="viewAllInfo">
                   <a href="https://www.youtube.com/@kaushikic" target="_blank"><button>View all</button></a>
                </div>
            </div>
         </div>
      </div>
      <br/><br/><br/>
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
