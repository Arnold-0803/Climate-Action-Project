// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';

//custom styles
import "./CarouselStyles.css";

export default function Carousel(props) {
  return (
    <>
      <Swiper
        loop={true}
        scrollbar={true}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slide'>
          <img src={props.img1} alt="" />
          <h2>
            {props.heading} <br />
            <span className="subheading">{props.subheading}</span> <span>{props.subheadingSpan}</span>
          </h2>
          <p>{props.paragraph}</p>
          <div className="gradient"></div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={props.img2} alt="" />
          <h2>
            {props.heading} <br />
            <span className="subheading">{props.subheading}</span> <span>{props.subheadingSpan}</span>
          </h2>
          <p>{props.paragraph}</p>
          <div className="gradient"></div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={props.img3} alt="" />
          <h2>
            {props.heading} <br />
            <span className="subheading">{props.subheading}</span> <span>{props.subheadingSpan}</span>
          </h2>
          <p>{props.paragraph}</p>
          <div className="gradient"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}