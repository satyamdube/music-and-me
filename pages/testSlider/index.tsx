import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import userTest from "@/public/Assets/pages/user1.png";

export default function SliderTest() {
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
              <div className="sliderDataMain">
                <div className="sliderDataMainInner">
                  <p>The topics were very organised so it was
                  really convenient to practise step by step. Even got more insights on
                  every topic when practically done. The assignments were really helpful.
                  It was fun and challenging at the same time which I loved the most in
                  the entire Prarambh course.</p>
                  <Image src={userTest} alt="User"/>
                  <h5>Gauri Phatak</h5>
                  <h2>Student</h2>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain">
                <div className="sliderDataMainInner">
                 <p>I had done a diploma in vocal, several years ago and
                  as I have retired, I wanted to get back to music and start all over again.
                  And I found this course extremely useful and all the lessons were
                  thoroughly explained. Perfect to start for anyone.</p>
                  <Image src={userTest} alt="User"/>
                  <h5>Gita</h5>
                  <h2>Student</h2>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain">
                <div className="sliderDataMainInner">
                 <p>All the basic things taught by Kaushiki
                  didi helped me a lot to understand how to start and where to start.</p>
                  <Image src={userTest} alt="User"/>
                  <h5>Paramita Bose</h5>
                  <h2>Student</h2>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain">
                <div className="sliderDataMainInner">
                 <p>he Vihaan course has been extremely
                satisfying. My daughter has enjoyed the course and has gained so much
                knowledge from Kaushiki ma'am. We are very happy with the resources
                and course content. Thank you so much ma'am for all the hard work and
                efforts you've put in with the initiative of showing the kids a proper path
                in music.</p>
                  <Image src={userTest} alt="User"/>
                  <h5>Siyona ghosh</h5>
                  <h2>Student</h2>
                 </div>
              </div>
          </div>
        </Slider>
      </div>
  );
}
