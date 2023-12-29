"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import "./slideshow.css";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}
const combinedStyles = {
  "--swiper-navigation-color": "#fff",
  "--swiper-pagination-color": "#fff",
  "--swiper-pagination-bullet-size": "15px",
  "--swiper-pagination-bullet-horizontal-gap": "8px",
  height: "500px",
} as React.CSSProperties;

export const ProductMobileSlideshow = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={combinedStyles}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
        modules={[FreeMode, Autoplay, Pagination]}
        className=""
      >
        {images.map((image, k) => (
          <SwiperSlide>
            <Image
              src={`/products/${image}`}
              alt={title}
              width={600}
              height={600}
              className=" object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
