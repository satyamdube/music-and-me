import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import userTest from "@/public/Assets/pages/user1.png";
import video from "@/public/Assets/pages/video1.png";
import bottomArrow from "@/public/Assets/pages/bottomArrow.png";
import playVid from "@/public/Assets/pages/playVid.png";

export default function SliderTestHome() {
  const settings = {
    dots:true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };
  return (
    <div>
        <Slider {...settings}>
          <div>
              <div className="sliderDataMain homeInfo">
                <h1>Learn The Music <br/> From the Masters</h1>
                <p>In publishing and graphic design, Lorem ipsum <br/> In publishing and graphic design, Lorem ipsum</p>
                <button className="readmore" type="button">Learn More</button>
              </div>
          </div>
          <div>
              <div className="sliderDataMain homeInfo">
                <h1>Learn The Music <br/> From the Masters</h1>
                <p>In publishing and graphic design, Lorem ipsum <br/> In publishing and graphic design, Lorem ipsum</p>
                <button className="readmore" type="button">Learn More</button>
              </div>
          </div>
        </Slider>
      </div>
  );
}
