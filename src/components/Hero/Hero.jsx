"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Hero.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
export default function Hero() {
  return (
    <section className="hero">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/images/4.jpg" layout="fill" alt="home banner" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/5.jpg" layout="fill" alt="home banner" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/7.jpg" layout="fill" alt="home banner" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
