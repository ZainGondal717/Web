import Navigation from "./components/Navigation";
import Image from "next/image";
import Image1 from "./image/image1.jpeg";
import Image2 from "./image/image2.jpeg";
import Image3 from "./image/image3.jpeg";
import Image4 from "./image/image4.jpeg";

export default function Home() {


  return (
    <>
      <Navigation />
      <div className="sliderContainer">
        <div className="ImageContainer">
          <Image
            src={Image1}
            alt="Picture of the author"
            width={500}
            height={500}
          
          />
          <Image
            src={Image2}
            alt="Picture of the author"
            width={500}
            height={500}
          
          />
          <Image
            src={Image3}
            alt="Picture of the author"
            width={500}
            height={500}
          
          />
          <Image
            src={Image4}
            alt="Picture of the author"
            width={500}
            height={500}
         
          />
        </div>
        <h1 className="WelcomeNote">Welcome to my Next.js app!</h1>
      </div>
    </>
  );
}