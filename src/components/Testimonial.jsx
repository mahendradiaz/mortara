import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import CardReview from './CardReview'
import Rating from '@mui/material/Rating';

export default () => {

  // Props Avatar Testimoni
  const Avatar = () => {
    return <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" /> 
  }
  const Avatar2 = () => {
    return <img src="https://randomuser.me/api/portraits/women/75.jpg" alt="" /> 
  }
  const Avatar3 = () => {
    return <img src="https://randomuser.me/api/portraits/women/76.jpg" alt="" /> 
  }

  // Props Review
  const Review = () => {
    return <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga impedit aspernatur iste alias, numquam fugit pariatur ipsa qui consequuntur iusto tempore accusantium expedita quas, recusandae illum, porro labore assumenda repellendus."</p>
  }
  const Review2 = () => {
    return <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga impedit aspernatur iste alias, numquam fugit pariatur ipsa qui consequuntur iusto tempore accusantium expedita quas, recusandae illum, porro labore assumenda repellendus."</p>
  }
  const Review3 = () => {
    return <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga impedit aspernatur iste alias, numquam fugit pariatur ipsa qui consequuntur iusto tempore accusantium expedita quas, recusandae illum, porro labore assumenda repellendus."</p>
  }


  // Props Star
  const [value, setValue] = React.useState(4);
  const Star = () => {
    return <Rating name="read-only" value={value} readOnly />
  }
  const [value2, setValue2] = React.useState(5);
  const Star2 = () => {
    return <Rating name="read-only" value={value2} readOnly />
  }
  const [value3, setValue3] = React.useState(3);
  const Star3 = () => {
    return <Rating name="read-only" value={value3} readOnly />
  }

    return (
      <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        pagination={{
                        clickable: true,
                        }}
                        loop={true}
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
                            spaceBetween: 0,
                        },
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="p-5"><CardReview Avatar={Avatar()} Review={Review()} Star={Star()}/></SwiperSlide>
                        <SwiperSlide className="p-5"><CardReview Avatar={Avatar2()} Review={Review2()} Star={Star2()}/></SwiperSlide>
                        <SwiperSlide className="p-5"><CardReview Avatar={Avatar3()} Review={Review3()} Star={Star3()}/></SwiperSlide>
                    </Swiper>
      </>
    );
  }