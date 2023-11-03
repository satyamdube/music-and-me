import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import userTest from "@/public/Assets/pages/user1.png";
import video from "@/public/Assets/pages/vid1.png";
import video2 from "@/public/Assets/pages/vid2.png";
import video3 from "@/public/Assets/pages/vid3.png";
import playVid from "@/public/Assets/pages/playVid.png";

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
        <Slider {...settings}>
          <div>
              <div className="sliderDataMain video">
                <div className="sliderDataMainInner">
                  
                  <Image src={video} alt="Video"/>
                  {/* <h6>Video 1</h6> */}
                  <h4> Uthat Baaj</h4>
                  {/* <button>Read More</button> */}
                    <a href="https://youtu.be/9x2RbZH-YTw" target="_blank">
                    <div className="cbt-link-waves">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                      <Image className="play" src={playVid} alt="Play"/>
                    </div>
                    </a>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain video">
                <div className="sliderDataMainInner">
                  <Image src={video2} alt="Video"/>
                  {/* <h6>Video 1</h6> */}
                  <h4> Riyaz With Rishith Desikan</h4>
                  {/* <button>Read More</button> */}
                  <a href="https://youtu.be/8np4ToDOavQ" target="_blank">
                  <div className="cbt-link-waves">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                      <Image className="play" src={playVid} alt="Play"/>
                    </div> 
                    </a>  
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain video">
                <div className="sliderDataMainInner">
                  <Image src={video3} alt="Video"/>
                  {/* <h6>Video 1</h6> */}
                  <h4>  Ghazal - Qaraar</h4>
                  {/* <button>Read More</button> */}
                  <a href="https://youtu.be/THrdUphTGkY" target="_blank">
                  <div className="cbt-link-waves">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                      <Image className="play" src={playVid} alt="Play"/>
                    </div>
                    </a>
                 </div>
              </div>
          </div>
        </Slider>
      </div>
  );
}
