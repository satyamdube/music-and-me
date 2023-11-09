import Image from "next/image";
import Link from "next/link";
import Head from 'next/head'
import ServiceCard from "@/Components/Services/ServiceCard";
import slide1 from "@/public/Assets/pages/slide1.png";
import slide2 from "@/public/Assets/pages/slide2.png";
import slide3 from "@/public/Assets/pages/slide3.png";
import slide4 from "@/public/Assets/pages/slide4.png";
import music from "@/public/Assets/pages/about-min.png";
import CommanSite from "@/Constent/CommanSite";
import bottomArrow from "@/public/Assets/pages/bottomArrow.png";
import playVid from "@/public/Assets/pages/playVid.png";
import Slider from "@/Components/Home/Slider";
import SliderTest from "./testSlider";
import SliderTestVideo from "./testSliderVideo";
import SliderTestHome from "./testSliderHome";
import SliderTestVideoProgram from "./testSliderVideoProgram";
import SliderTestVideoCourse from "./testSliderVideoCourse";

export default function Home() {
  return (
    <div className="outerMainHome">
      <Head>
      <title>Home</title>
      <meta name='description' content='WELCOME TO KAUSHIKI CHAKRABORTY MUSIC AND US' />
      </Head>
       <div className="bannerDataTop homeBg">
        <div className="innerContentBnr home">
          <div className="cbt-link-waves">
            <div className="waves wave-1"></div>
            <div className="waves wave-2"></div>
            <div className="waves wave-3"></div>
            <Image className="play" src={playVid} alt="Play"/>
          </div>
            <SliderTestHome/>
            <div className="bootomArrow">
              <Image src={bottomArrow} alt="Bottom Arrow"/>
            </div>
        </div>
      </div>
      <div className="outerInfoCnt">
        <div className="centerWrapper">
        <div className="row">
        <div className="col-sm-6">
           <img src="https://mus-dev-assets.s3.ap-south-1.amazonaws.com/Website/about_us_image.png" alt="Music"/>
        </div>
        <div className="col-sm-6">
          <div className="absolute-content">
            <h2>About Us</h2>
            <h1>Welcome to kaushiki chakraborty Music and us</h1>
            <p>In a world where technology drives success, Wenidi stands as a beacon of innovation and transformation. We are not just consultants, we are your partners in reimagining the future of your business
            Our expertise extends across a wide spectrum of cutting-edge technologies. We believe in crafting tailored strategies that go beyond mere optimization. We strive to make your business processes not</p>
            
            <Link href="/about"><button className="readmore" type="button">Read More</button></Link>
            </div>
            </div>
        </div>
        </div>
      </div>
      <div className="formInfoData" style={{paddingBottom:0}}>
        <div className="centerWrapper">
          <h3>Our program</h3>
          <h2>Surteerth Academy</h2>
          <p style={{margin:0}}>Welcome to Surteerth Academy: Your Gateway to Musical Mastery</p>
        </div>
      </div>
      <div  style={{paddingBottom:0}}>
         <div className="centerWrapper">
            <div className="sliderTest">
                <SliderTestVideoProgram/>
            </div>
         </div>
      </div>
      <br/><br/><br/>
      <div className="courceBanner bnrHomeInfo">
         <div className="centerWrapper">
            <div className="innerContentCource">
               <h3>Latest videos</h3>
               <h2>youtube feed</h2></div>
            <div className="sliderTest">
                <SliderTestVideo/>
                <div className="viewAllInfo">
                  <a href="https://www.youtube.com/@kaushikic" target="_blank"><button>View all</button></a>
                </div>
            </div>
         </div>
      </div>
      <div className="formInfoData" style={{paddingBottom:0}}>
        <div className="centerWrapper">
          <h3>Our Courses</h3>
          <h2>Our music Courses</h2></div>
      </div>
      <div>
         <div className="centerWrapper">
            <div className="sliderTest">
                <SliderTestVideoCourse/>
            </div>
         </div>
      </div>
      <br/><br/><br/> <br/> <br/> <br/>
      <div className="courceBanner">
         <div className="centerWrapper">
            <div className="innerContentCource">
               <h3>Our class</h3>
               <h2>what our students say</h2>
               </div>
            <div className="sliderTest">
                <SliderTest/>
                {/* <div className="viewAllInfo">
                  <button>View all</button>
                </div> */}
                <br/><br/><br/>
            </div>
         </div>
      </div>
      <div className="slideDataInfoBottom"  style={{paddingTop:60}}>
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
