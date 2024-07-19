import Carousel from "../components/Carousel";
import WhatWeDo from "../components/SectionWhatWeDo";
import image1 from "../photos/image1prime.jpg";
import image2 from "../photos/image7.jpg";
import image3 from "../photos/image6.jpeg";
import image8 from "../photos/image5.jpg";
import Mission from "../components/SectionMission";
import CounterElement from "../components/SectionCount";
import Gallery from "../components/SectionGallery";
import Testimonials from "../components/SectionTestimonials";

const Home = () => {
  return (
    <div className="homepage">
      <Carousel
        img1={image1}
        img2={image2}
        img3={image3}
        heading="Climate Champions"
        subheading="Let's go"
        subheadingSpan="Green!"
        paragraph="Lorem ipsum dolor sit amet
         consectetur adipisicing elit. Illum, 
         soluta! Aliquid saepe, veritatis eius 
         libero corporis debitis explicabo assumenda 
         illo? Aut praesentium porro obcaecati? 
         Maiores ipsum sed nobis ipsam officia.
         Lorem ipsum dolor sit amet
         consectetur adipisicing elit. Illum, 
         soluta! Aliquid saepe, veritatis eius 
         libero corporis debitis explicabo assumenda 
         illo? Aut praesentium porro obcaecati? 
         Maiores ipsum sed nobis ipsam officia.
        "
      />
      <Mission img={image8}/>
      <WhatWeDo/>
      <CounterElement
        link="https://http://localhost:3000/"
      />
      <Gallery/>
      <Testimonials/>
    </div>
  );
}
 
export default Home;