"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface CustomSwiperProps {
  slides: React.ReactNode[];
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({ slides }) => {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={30}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        480: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      }}
    >
      {slides.map((slideContent, index) => (
        <SwiperSlide className="!w-auto" key={index}>
          {slideContent}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
