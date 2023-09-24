import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import corse1 from "@/public/Assets/pages/corse1.png";
import corse2 from "@/public/Assets/pages/corse2.png";
import corse3 from "@/public/Assets/pages/corse3.png";
import video from "@/public/Assets/pages/video1.png";

export default function SliderTestVideoCourse() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
        <Slider className="infoProgram" {...settings}>
          <div>
              <div className="courcseInfo">
                <div className="courcseInfoInner">
                   <Image className="play" src={corse1} alt="Course"/>
                    <div className="cntCourses">
                      <h6>Coueses 1</h6>
                      <h2>Prarambh</h2>
                      <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                      <button className="readMoreInfo">Read More</button>
                    </div>
                 </div>
              </div>
          </div>
          <div>
              <div className="courcseInfo">
                <div className="courcseInfoInner">
                   <Image className="play" src={corse2} alt="Course"/>
                    <div className="cntCourses">
                      <h6>Coueses 2</h6>
                      <h2>Vihaan</h2>
                      <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                      <button className="readMoreInfo">Read More</button>
                    </div>
                 </div>
              </div>
          </div>
          <div>
              <div className="courcseInfo">
                <div className="courcseInfoInner">
                   <Image className="play" src={corse3} alt="Course"/>
                    <div className="cntCourses">
                      <h6>Coueses 3</h6>
                      <h2>Prarambh</h2>
                      <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                      <button className="readMoreInfo">Read More</button>
                    </div>
                 </div>
              </div>
          </div>
          <div>
              <div className="courcseInfo">
                <div className="courcseInfoInner">
                   <Image className="play" src={corse1} alt="Course"/>
                    <div className="cntCourses">
                      <h6>Coueses 1</h6>
                      <h2>Prarambh</h2>
                      <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                      <button className="readMoreInfo">Read More</button>
                    </div>
                 </div>
              </div>
          </div>
          <div>
              <div className="courcseInfo">
                <div className="courcseInfoInner">
                   <Image className="play" src={corse2} alt="Course"/>
                    <div className="cntCourses">
                      <h6>Coueses 2</h6>
                      <h2>Vihaan</h2>
                      <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                      <button className="readMoreInfo">Read More</button>
                    </div>
                 </div>
              </div>
          </div>
          <div>
              <div className="courcseInfo">
                <div className="courcseInfoInner">
                   <Image className="play" src={corse3} alt="Course"/>
                    <div className="cntCourses">
                      <h6>Coueses 3</h6>
                      <h2>Prarambh</h2>
                      <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                      <button className="readMoreInfo">Read More</button>
                    </div>
                 </div>
              </div>
          </div>
        </Slider>
      </div>
  );
}
