import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import team1 from "../../images/team/team1.png";
import team2 from "../../images/team/team2.png";
import team3 from "../../images/team/team3.png";
import team4 from "../../images/team/team4.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { MdiInstagram } from "./svgIcons/insta";

const TeamSlider = () => {
  return (
    <section className=" my-14 ">
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        loop={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="  group p-4 ">
            <img
              src={team1.src}
              alt="logo"
              className="grayscale border border-dd-primary border-opacity-0 transition-colors duration-500 group-hover:grayscale-0 group-hover:border-opacity-100"
            />
            <h3 className="text-2xl mt-6">Shahid Ali</h3>
            <p className="text-dd-primary"> Designer</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="  group p-4 ">
            <img
              src={team2.src}
              alt="logo"
              className="grayscale border border-dd-primary border-opacity-0 transition-colors duration-500 group-hover:grayscale-0 group-hover:border-opacity-100"
            />
            <h3 className="text-2xl mt-6">Shahid Ali</h3>
            <p className="text-dd-primary"> Designer</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="  group p-4 ">
            <img
              src={team3.src}
              alt="logo"
              className="grayscale border border-dd-primary border-opacity-0 transition-colors duration-500 group-hover:grayscale-0 group-hover:border-opacity-100"
            />
            <h3 className="text-2xl mt-6">Shahid Ali</h3>
            <p className="text-dd-primary"> Designer</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="  group p-4 ">
            <img
              src={team4.src}
              alt="logo"
              className="grayscale border border-dd-primary border-opacity-0 transition-colors duration-500 group-hover:grayscale-0 group-hover:border-opacity-100"
            />
            <h3 className="text-2xl mt-6">Shahid Ali</h3>
            <p className="text-dd-primary"> Designer</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TeamSlider;
