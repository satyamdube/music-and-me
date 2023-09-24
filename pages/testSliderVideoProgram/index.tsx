import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import userTest from "@/public/Assets/pages/user1.png";
import program1 from "@/public/Assets/pages/program1.png";
import program2 from "@/public/Assets/pages/program2.png";
import program3 from "@/public/Assets/pages/program3.png";
import video from "@/public/Assets/pages/video1.png";

export default function SliderTestVideoProgram() {
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
              <div className="sliderDataMain video">
                <div className="sliderDataMainInner">
                  <Image src={program1} alt="Video"/>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain video">
                <div className="sliderDataMainInner">
                  <Image src={program2} alt="Video"/>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain video">
                <div className="sliderDataMainInner">
                  <Image src={program3} alt="Video"/>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain video">
                <div className="sliderDataMainInner">
                  <Image src={program1} alt="Video"/>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain video">
                <div className="sliderDataMainInner">
                  <Image src={program2} alt="Video"/>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain video">
                <div className="sliderDataMainInner">
                  <Image src={program3} alt="Video"/>
                 </div>
              </div>
          </div>
        </Slider>
      </div>
  );
}
