import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import corse1 from "@/public/Assets/pages/corse1.png";
import corse2 from "@/public/Assets/pages/corse2.png";
import corse3 from "@/public/Assets/pages/corse3.png";
import video from "@/public/Assets/pages/video1.png";

export default function SliderTestVideoCourse() {
  const [data1, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://devapi.kaushikimusicandus.com/public-feed/course?skip=10&take=10&sort=name&sortOrder=-1&url=1';
  
    // Make the API request
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('API request error:', error);
        setLoading(false);
      });
  }, []);
  console.log(data1, "data1")
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
           {data1?.data?.map((item:any,index1:any)=> {
             return <div key="index1">
              <div className="courcseInfo">
                <div className="courcseInfoInner">
                  {item.resources?.map((item1:any,index2:any)=> {
                   return<div key="index2"><img className="play" src={item1?.url}/></div>})}
                    <div className="cntCourses">
                      <h2>{item.name}</h2>
                      <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                      <Link href="/courses"><button className="readMoreInfo">Read More</button></Link>
                    </div>
                 </div>
              </div>
          </div>})}
        </Slider>
      </div>
  );
}
