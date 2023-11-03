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

export default function SliderTestVideoProgram() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
                      <h2>Surteerth Intermediate Course</h2>
                      <p>Are you a music enthusiast with a basic understanding of melodies, rhythms, and the desire to explore the enchanting world of Indian classical music? If so, Surteerth's Intermediate Course is the perfect opportunity for you!</p>
                      <Link href="/surteerth"><button className="readMoreInfo">Read More</button></Link>
                    </div>
                 </div>
              </div>
          </div>
          <div>
              <div className="courcseInfo">
                <div className="courcseInfoInner">
                   <Image className="play" src={corse2} alt="Course"/>
                    <div className="cntCourses">
                      <h2>Surteerth Advance Course</h2>
                      <p>Are you ready to take your passion for music to the next level? The Surteerth Advance Class Batch is designed to elevate your musical journey to new heights. Our comprehensive program is carefully crafted to provide you with an in-depth understanding of the art, focusing on three key pillars:</p>
                      <Link href="/surteerth"><button className="readMoreInfo">Read More</button></Link>
                    </div>
                 </div>
              </div>
          </div>
        </Slider>
      </div>
  );
}
