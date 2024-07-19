// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';

//custom styles
import "./CarouselStyles.css";

export default function Carousel(prop) {
  return (
    <>
      <Swiper
        loop={true}
        scrollbar={true}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slide'>
          <img src={prop.img1} alt="" />
          <h2>{prop.heading}</h2>
          <h3>{prop.subheading} <span>{prop.subheadingSpan}</span></h3>
          <p>{prop.paragraph}</p>
          <div className="gradient"></div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={prop.img2} alt="" />
          <h2>{prop.heading}</h2>
          <h3>{prop.subheading} <span>{prop.subheadingSpan}</span></h3>
          <p>{prop.paragraph}</p>
          <div className="gradient"></div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={prop.img3} alt="" />
          <h2>{prop.heading}</h2>
          <h3>{prop.subheading} <span>{prop.subheadingSpan}</span></h3>
          <p>{prop.paragraph}</p>
          <div className="gradient"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}