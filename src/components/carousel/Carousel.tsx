import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.css";
import img1 from "../../assets/images/carousel1.jpg";
import img2 from "../../assets/images/carousel2.jpg";
import img3 from "../../assets/images/carousel3.jpg";
import img4 from "../../assets/images/carousel4.jpg";
import img5 from "../../assets/images/carousel5.jpg";
import img6 from "../../assets/images/carousel6.jpg";
import img7 from "../../assets/images/carousel7.jpg";
import img8 from "../../assets/images/carousel8.jpg";
import img9 from "../../assets/images/carousel9.jpg";
import img10 from "../../assets/images/carousel10.jpg";
import img11 from "../../assets/images/carousel11.jpg";
import { Autoplay } from "swiper/modules";

export default () => {
  return (
    <div className="">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay
        breakpoints={{
          370: { slidesPerView: 2 },
          750: { slidesPerView: 3 },
          1000: { slidesPerView: 4 },
        }}
        loop
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
