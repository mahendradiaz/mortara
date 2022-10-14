import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Grid, Navigation, Pagination } from "swiper";

// image import
import Portfolio1 from '../img/portfolio1.png'
import Portfolio2 from '../img/portfolio2.png'
import Portfolio3 from '../img/portfolio3.png'
import Swiper2 from "./Swiper2";

export default () => {
    return (
        <>
            <Swiper
            slidesPerView={3}
            grid={{
                rows: 1,
            }}
            spaceBetween={0}
            loop={true}
            pagination={{
                clickable: true,
            }}
            modules={[Grid, Pagination, Navigation]}
            navigation={true}
            className="mySwiper"
            >
            <SwiperSlide><img src={ Portfolio1 } alt="" /></SwiperSlide>
            <SwiperSlide><img src={ Portfolio2 } alt="" /></SwiperSlide>
            <SwiperSlide><img src={ Portfolio3 } alt="" /></SwiperSlide>
            
            </Swiper>

            <Swiper2 />
        </>
    );
  };