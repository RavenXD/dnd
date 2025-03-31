import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import social1 from "../../images/social/social1.png";
import social2 from "../../images/social/social2.png";
import social3 from "../../images/social/social3.png";
import social4 from "../../images/social/social4.jpg";
import social5 from "../../images/social/social5.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { MdiInstagram } from "./svgIcons/insta";

const SocialSlider = () => {
  return (
    <section className=" my-28 bg-dd-section-bg ">
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        freeMode={true}
        loop={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" relative group ">
            <img src={social1.src} alt="logo" />
            <div class="absolute  top-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100  text-white size-full p-1 ">
              <div className=" bg-black bg-opacity-70 size-full flex flex-col justify-center items-center gap-5 ">
                <MdiInstagram className="size-36" />
                <p>Follow Us on Instagram</p>
                <p className="text-xl font-semibold">@digital&design</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative group ">
            <img src={social2.src} alt="logo" />
            <div class="absolute  top-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100  text-white size-full p-1 ">
              <div className=" bg-black bg-opacity-70 size-full flex flex-col justify-center items-center gap-5 ">
                <MdiInstagram className="size-36" />
                <p>Follow Us on Instagram</p>
                <p className="text-xl font-semibold">@digital&design</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative group ">
            <img src={social3.src} alt="logo" />
            <div class="absolute  top-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100  text-white size-full p-1 ">
              <div className=" bg-black bg-opacity-70 size-full flex flex-col justify-center items-center gap-5 ">
                <MdiInstagram className="size-36" />
                <p>Follow Us on Instagram</p>
                <p className="text-xl font-semibold">@digital&design</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative group ">
            <img src={social4.src} alt="logo" />
            <div class="absolute  top-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100  text-white size-full p-1 ">
              <div className=" bg-black bg-opacity-70 size-full flex flex-col justify-center items-center gap-5 ">
                <MdiInstagram className="size-36" />
                <p>Follow Us on Instagram</p>
                <p className="text-xl font-semibold">@digital&design</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative group ">
            <img src={social5.src} alt="logo" />
            <div class="absolute  top-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100  text-white size-full p-1 ">
              <div className=" bg-black bg-opacity-70 size-full flex flex-col justify-center items-center gap-5 ">
                <MdiInstagram className="size-36" />
                <p>Follow Us on Instagram</p>
                <p className="text-xl font-semibold">@digital&design</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SocialSlider;
