import Image from "next/image";
import Link from "next/link";

import ServiceCard from "@/Components/Services/ServiceCard";
import slide1 from "@/public/Assets/pages/slide1.png";
import slide2 from "@/public/Assets/pages/slide2.png";
import slide3 from "@/public/Assets/pages/slide3.png";
import slide4 from "@/public/Assets/pages/slide4.png";
import music from "@/public/Assets/pages/musicHead.png";
import CommanSite from "@/Constent/CommanSite";
import bottomArrow from "@/public/Assets/pages/bottomArrow.png";
import Slider from "@/Components/Home/Slider";
import SliderTest from "./testSlider";
import SliderTestVideo from "./testSliderVideo";

export default function Home() {
  return (
    <div className="outerMainHome">
       <div className="bannerDataTop">
        <div className="innerContentBnr home">
           <h1>Learn The Music <br/> From the Masters</h1>
           <p>In publishing and graphic design, Lorem ipsum <br/> In publishing and graphic design, Lorem ipsum</p>
           <button type="button">Learn More</button>
            <div className="bootomArrow">
              <Image src={bottomArrow} alt="Bottom Arrow"/>
            </div>
        </div>
      </div>
      <div className="outerInfoCnt">
        <div className="centerWrapper">
        <div className="row">
        <div className="col-sm-6">
           <Image src={music} alt="Music"/>
        </div>
        <div className="col-sm-6">
          <div className="absolute-content">
            <h2>About Us</h2>
            <h1>Welcome to kaushiki chakraborty Music and us</h1>
            <p>In a world where technology drives success, Wenidi stands as a beacon of innovation and transformation. We are not just consultants, we are your partners in reimagining the future of your business
            Our expertise extends across a wide spectrum of cutting-edge technologies. We believe in crafting tailored strategies that go beyond mere optimization. We strive to make your business processes not</p>
            <button type="button">Read More</button>
            </div>
            </div>
        </div>
        </div>
      </div>
      <div className="formInfoData" style={{paddingBottom:40}}>
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
                  <button>View all</button>
                </div>
            </div>
         </div>
      </div>
      <br/><br/><br/>
      <div className="courceBanner">
         <div className="centerWrapper">
            <div className="innerContentCource">
               <h3>Our class</h3>
               <h2>what our students say</h2>
               <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to <br/>  Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </div>
            <div className="sliderTest">
                <SliderTest/>
                <div className="viewAllInfo">
                  <button>View all</button>
                </div>
            </div>
         </div>
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
