import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineNavigateNext,
} from "react-icons/md";
import Herobg from "../assets/hero.png";

function Hero() {
  return (
    <div className="bg-[#F8F9FA]">
      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                <div>
                  <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold leading-tight text-[#3B0B01] sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-ph">
                      Love The Skin, Love The Earth
                    </h1>
                    <p className="mt-2 text-lg text-[#6c757d] sm:mt-4">
                      We have quality products like artisan soap, body butters,
                      essential oils, carrier oils
                    </p>

                    <div className="flex items-center justify-center mt-4 space-x-5 lg:justify-start">
                      <a
                        href="#_"
                        className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                      >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Shop Now</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <img className="w-[90%]" src={Herobg} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                <div>
                  <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold leading-tight text-[#2F4858] sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-ph">
                      Love The Skin, Love The Earth
                    </h1>
                    <p className="mt-2 text-lg text-[#6c757d] sm:mt-4">
                      We have quality products like artisan soap, body butters,
                      essential oils, carrier oils
                    </p>

                    <div className="flex items-center justify-center mt-4 space-x-5 lg:justify-start">
                      <a
                        href="#_"
                        className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                      >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Button Text</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <img className="w-[90%]" src={Herobg} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Hero;
