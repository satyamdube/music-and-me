import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

import ExampleCarouselImage from "@/public/Assets/pages/BannerHeader.png";

export default function Slider() {
  return (
    <div className="outerMainSlider">
      <Carousel>
        <Carousel.Item>
          <Image src={ExampleCarouselImage} alt="First slide" />
          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={ExampleCarouselImage} alt="Second slide" />
          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={ExampleCarouselImage} alt="Third slide" />
          <Carousel.Caption>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
