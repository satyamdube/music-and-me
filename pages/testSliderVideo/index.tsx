import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import userTest from "@/public/Assets/pages/user1.png";
import video from "@/public/Assets/pages/video1.png";

export default function SliderTestVideo() {
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
        <Slider {...settings}>
          <div>
              <div className="sliderDataMain video">
                <div className="sliderDataMainInner">
                  <Image src={video} alt="Video"/>
                  <h6>Video 1</h6>
                  <h4>Raag Bhimpalasi</h4>
                  <button>Read More</button>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain video">
                <div className="sliderDataMainInner">
                  <Image src={video} alt="Video"/>
                  <h6>Video 2</h6>
                  <h4>Raag Bhimpalasi</h4>
                  <button>Read More</button>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain video">
                <div className="sliderDataMainInner">
                  <Image src={video} alt="Video"/>
                  <h6>Video 3</h6>
                  <h4>Raag Bhimpalasi</h4>
                  <button>Read More</button>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain video">
                <div className="sliderDataMainInner">
                  <Image src={video} alt="Video"/>
                  <h6>Video 4</h6>
                  <h4>Raag Bhimpalasi</h4>
                  <button>Read More</button>
                 </div>
              </div>
          </div>
        </Slider>
      </div>
  );
}
