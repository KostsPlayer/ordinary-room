import React, { useRef } from "react";
import { ChevronRight, ChevronLeft, Search } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import image1 from "./../../../assets/pexels-thanh-nguy-n-637271-1438524.jpg";
import image2 from "./../../../assets/pexels-pixabay-164504.jpg";
import image3 from "./../../../assets/pexels-kaip-454509.jpg";

function Hero() {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  return (
    <div className="hero">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        modules={[Navigation, Pagination]}
        className="hero-carousel"
        onInit={(swiper) => {
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide className="hero-carousel-container">
          <img src={image2} alt="image1" />
        </SwiperSlide>
        <SwiperSlide className="hero-carousel-container">
          <img src={image1} alt="image2" />
        </SwiperSlide>
        <SwiperSlide className="hero-carousel-container">
          <img src={image2} alt="image3" />
        </SwiperSlide>
        <SwiperSlide className="hero-carousel-container">
          <img src={image1} alt="image4" />
        </SwiperSlide>
        <SwiperSlide className="hero-carousel-container">
          <img src={image3} alt="image5" />
        </SwiperSlide>
        <ChevronRight
          strokeWidth={1.75}
          className="swiper-button-next custom-next"
          ref={nextRef}
        />
        <ChevronLeft
          strokeWidth={1.75}
          className="swiper-button-prev custom-prev"
          ref={prevRef}
        />
      </Swiper>
      <div className="hero-search">
        <div className="hero-search-title">our new collection</div>
        <div className="wrapper">
          <input type="text" placeholder="Search.." className="wrapper-input" />
          <Search className="wrapper-button" strokeWidth={1.75} size={22}/>
        </div>
      </div>
      <div className="hero-quote">
        <div className="hero-quote-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rerum
          commodi cupiditate nam dolore odit tenetur atque enim sequi magnam?
        </div>
      </div>
    </div>
  );
}

export default Hero;
