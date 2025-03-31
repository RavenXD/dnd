import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import acacia from "../../images/logos/acacia.png";
import damage from "../../images/logos/damage.png";
import dixit from "../../images/logos/dixit.png";
import ohana from "../../images/logos/ohana.png";
import ozagi from "../../images/logos/ozagi.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const LogoSlider = () => {
  return (
    <section className="py-20 mt-28 bg-dd-section-bg ">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div className="grayscale  hover:grayscale-0 cursor-grab w-full flex items-center justify-center">
            <img src={acacia.src} alt="logo acacia" className="w-52" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grayscale hover:grayscale-0 cursor-grab w-full flex items-center justify-center ">
            <img src={damage.src} alt="logo acacia" className="w-52" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grayscale hover:grayscale-0 cursor-grab w-full flex items-center justify-center ">
            <img src={dixit.src} alt="logo acacia" className="w-52" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grayscale hover:grayscale-0 cursor-grab w-full flex items-center justify-center ">
            <img src={ohana.src} alt="logo acacia" className="w-52" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grayscale hover:grayscale-0 cursor-grab w-full flex items-center justify-center ">
            <img src={ozagi.src} alt="logo acacia" className="w-52" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default LogoSlider;
