import React from 'react';
import { useLoaderData } from 'react-router-dom';
import City from '../Place/City';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {
const place = useLoaderData();
  // console.log(place);

    return (
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     { place.map(city=> <SwiperSlide><City
        key={city.id} 
        city={city}></City></SwiperSlide> )}
    </Swiper>

    );
};

export default Home;