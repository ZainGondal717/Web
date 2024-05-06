"use client";
import Navigation from "../clientnavigaton";
import Image from "next/image";
import Image1 from "../../../../image/image1.jpeg";
import Image2 from "../../../../image/image2.jpeg";
import Image3 from "../../../../image/image3.jpeg";
import Image4 from "../../../../image/image4.jpeg";
import '../../../../CSS/home.css';

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="sliderContainer">
        <div className="ImageContainer">
          <Image
            src={Image1}
            alt="Picture 1"
            width={500}
            height={500}
          />
          <Image
            src={Image2}
            alt="Picture 2"
            width={500}
            height={500}
          />
          <Image
            src={Image3}
            alt="Picture 3"
            width={500}
            height={500}
          />
          <Image
            src={Image4}
            alt="Picture 4"
            width={500}
            height={500}
          />
        </div>
        <div className="content">
          <h1 className="WelcomeNote">Welcome to My WEB Page!</h1>
          <p className="description">Explore and enjoy our amazing content.</p>
          <button className="exploreButton">Explore Now</button>
        </div>
      </div>
    </>
  );
}
