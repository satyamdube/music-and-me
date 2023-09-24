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
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                  <Image src={userTest} alt="User"/>
                  <h5>Satyam Dubey</h5>
                  <h2>Manager</h2>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain">
                <div className="sliderDataMainInner">
                 <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                  <Image src={userTest} alt="User"/>
                  <h5>Satyam Dubey</h5>
                  <h2>Manager</h2>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain">
                <div className="sliderDataMainInner">
                 <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                  <Image src={userTest} alt="User"/>
                  <h5>Satyam Dubey</h5>
                  <h2>Manager</h2>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain">
                <div className="sliderDataMainInner">
                 <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                  <Image src={userTest} alt="User"/>
                  <h5>Satyam Dubey</h5>
                  <h2>Manager</h2>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain">
                <div className="sliderDataMainInner">
                 <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                  <Image src={userTest} alt="User"/>
                  <h5>Satyam Dubey</h5>
                  <h2>Manager</h2>
                 </div>
              </div>
          </div>
          <div>
              <div className="sliderDataMain">
                <div className="sliderDataMainInner">
                 <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                  <Image src={userTest} alt="User"/>
                  <h5>Satyam Dubey</h5>
                  <h2>Manager</h2>
                 </div>
              </div>
          </div>
        </Slider>
      </div>
  );
}
