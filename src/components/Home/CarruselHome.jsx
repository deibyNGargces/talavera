import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slide1 from "../../assets/images/home/carrusel/slide1.jpg";
import slide2 from "../../../public/images/home/carrusel/slide2.jpg";
import slide3 from "../../../public/images/home/carrusel/slide3.jpg";
import slide4 from "../../../public/images/home/carrusel/slide4.jpg";
import { Image } from "astro:assets";
import SlideComponent from "./SlideComponent.astro";
const CarruselHome = () => {
  console.log(slide1);
  return (
    <div>
      <SlideComponent />
      {/* <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="h-screen bg-red-200 flex flex-col items-center justify-center">
            <p>Este es un slide de la primera vista</p>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default CarruselHome;
