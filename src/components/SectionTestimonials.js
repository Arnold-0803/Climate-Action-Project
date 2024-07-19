// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { TestimonialData } from '../data/TestimonialData';
import "./SectionTestimonialsStyles.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials () {
  return (
    <div className="testimonial-wrapper">
      <h3>Happy Members</h3>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          769: {
            slidesPerView: 3,
          },
          1201: {
            slidesPerView: 4,
          }
        }}
        loop={true}
        spaceBetween={50}
        slidesPerView={4}
        pagination={{
          type: 'fraction',
        }}
        modules={[Pagination]}
        className='testimonial-swiper'
      >
        {TestimonialData.map((item, index) => (
          <SwiperSlide className='testimonial' key={index}>
            <img src={item.person} alt="" />
            <h4>{item.name}</h4>
            <p>
              <i className='fa-solid fa-quote-left'></i>
              {item.testimony}
              <i className='fa-solid fa-quote-right'></i></p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};