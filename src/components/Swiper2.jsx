import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Grid, Navigation, Pagination } from "swiper";

// image import
import Portfolio4 from '../img/portfolio4.png'
import Portfolio5 from '../img/portfolio5.png'
import Portfolio6 from '../img/portfolio6.png'

export default () => {
    return (
        <>
            <Swiper
            slidesPerView={3}
            grid={{
                rows: 1,
            }}
            loop={true}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Grid, Pagination, Navigation]}
            navigation={true}
            className="mySwiper"
            >
            <SwiperSlide><img src={ Portfolio4 } alt="" /></SwiperSlide>
            <SwiperSlide><img src={ Portfolio5 } alt="" /></SwiperSlide>
            <SwiperSlide><img src={ Portfolio6 } alt="" /></SwiperSlide>
            
            </Swiper>
        </>
    );
  };