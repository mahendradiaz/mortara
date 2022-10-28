import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default (props) => {
    return (
        <>
            <div className="containerSwiper">
                <Swiper
                        slidesPerView={1}
                        spaceBetween={5}
                        pagination={{
                        clickable: true,
                        }}
                        loop={true}
                        navigation={true}
                        breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>{props.image}</SwiperSlide>
                        <SwiperSlide>{props.image2}</SwiperSlide>
                        <SwiperSlide>{props.image3}</SwiperSlide>
                        <SwiperSlide>{props.image4}</SwiperSlide>
                        <SwiperSlide>{props.image5}</SwiperSlide>
                        <SwiperSlide>{props.image6}</SwiperSlide>
                        <SwiperSlide>{props.image7}</SwiperSlide>
                </Swiper>
            </div>
        </>
    );
  };