"use client"; // Ensure this runs on the client side

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperComponent: React.FC = () => {
  return (
    <Swiper
      className="h-[250px]"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      pagination={{ clickable: true }}
      breakpoints={{
        480: { slidesPerView: 1, spaceBetween: 30 },
        770: { slidesPerView: 2, spaceBetween: 40 },
      }}
      onSwiper={(swiper) => console.log("Swiper instance:", swiper)}
      onSlideChange={() => console.log("Slide changed")}
    >
      {[...Array(4)].map((_, index) => (
        <SwiperSlide key={index}>
          <div className="text-center space-y-4">
            <p className="text-textsec">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
              magni, perferendis corrupti pariatur officiis nisi sed quibusdam
              minus.
            </p>
            <h1 className="text-xl font-bold">Rajan Sharma</h1>
            <div>⭐⭐⭐⭐⭐</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
