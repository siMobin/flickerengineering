"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "./ui/button";
import { CircleCheckBig } from "lucide-react";

const Slider = () => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  return (
    <header className="w-full relative group">
      <Swiper
        onSwiper={setSwiper}
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[30dvh] md:h-[50dvh] lg:h-[calc(100dvh-6rem)] w-full"
      >
        <SwiperSlide>
          <div className="__s_container">
            <section className="grid gap-6 grid-cols-2 items-center hero-bg overflow-hidden p-4 px-4 md:px-20 h-full">
              <div className="md:col-span-1 max-w-xl relative z-10 ">
                <span className="pre-tag scale-50 lg:scale-100"></span>
                <div className="tag inline-flex items-center gap-2 mb-6 px-4 py-3 rounded-full bg-accent/10 backdrop-blur-[5px] shadow scale-50 lg:scale-100">
                  <CircleCheckBig className="w-5 h-5 text-accent" />
                  <span className="text-sm text-nowrap">
                    Professional Engineering Services
                  </span>
                </div>

                <h1 className="text-sm md:text-6xl font-bold leading-tight mb-2">
                  <span>Building Tomorrow&apos;s</span>
                  <br />
                  <span
                    className="text-xs lg:text-4xl font-semibold lg:font-extrabold"
                    style={{ color: "var(--brand-gradient-to)" }}
                  >
                    Infrastructure Today
                  </span>
                </h1>

                <p className="text-xs lg:text-lg text-white/85 mb-6 hidden lg:block">
                  Flicker Engineering delivers cutting-edge engineering
                  solutions with innovative technology and expert craftsmanship.
                  Your vision, our engineering excellence.
                </p>

                <ul className="features-list text-xs lg:text-base grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  <li>
                    <span>
                      <CircleCheckBig />
                    </span>{" "}
                    Expert Engineering Team
                  </li>
                  <li>
                    <span>
                      <CircleCheckBig />
                    </span>{" "}
                    Innovative Solutions
                  </li>
                  <li>
                    <span>
                      <CircleCheckBig />
                    </span>{" "}
                    Quality Assurance
                  </li>
                  <li>
                    <span>
                      <CircleCheckBig />
                    </span>{" "}
                    Timely Delivery
                  </li>
                </ul>

                <div className="flex gap-4">
                  <a href="/contact" className="btn-primary">
                    Get Started Today →
                  </a>
                  <a href="/portfolio" className="btn-secondary">
                    View Our Work
                  </a>
                </div>
              </div>

              <div className="relative h-min">
                <div className="logo-card w-full max-w-lg  backdrop-blur-[20px]">
                  <div
                    className="badge-top-right badge-white text-center scale-50 lg:scale-100"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="500"
                  >
                    100+<div className="text-xs mt-1">Projects Completed</div>
                  </div>
                  <div className="h-14 lg:h-72 flex items-center justify-center">
                    <img
                      src="/images/hero.webp"
                      alt="Flicker Engineering"
                      className="w-full scale-117 h-auto absolute top-0 left-[-1em]"
                      // loading="lazy"
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                      data-aos-duration="500"
                    />
                  </div>
                  <div
                    className="badge-bottom-left badge-white"
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                    data-aos-duration="500"
                  >
                    10+<div className="text-xs mt-1">Years Experience</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </SwiperSlide>

        {/* 
        Other content slides
         */}

        <SwiperSlide>
          <div className="__s_container">
            <img
              src="images/cover/2.webp"
              loading="lazy"
              alt="Flicker Engineering"
              className="w-full h-full object-cover"
            />
            {/* <div className="__slider">
              <p className="text-white text-4xl font-bold">Dummy Text 2</p>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="__s_container">
            <img
              src="images/cover/3.webp"
              loading="lazy"
              alt="Flicker Engineering"
              className="w-full h-full object-cover"
            />
            {/* <div className="__slider">
              <p className="text-white text-4xl font-bold">Dummy Text 3</p>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="__s_container">
            <img
              src="images/cover/4.webp"
              loading="lazy"
              alt="Flicker Engineering"
              className="w-full h-full object-cover"
            />
            {/* <div className="__slider">
              <p className="text-white text-4xl font-bold">Dummy Text 4</p>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="__s_container">
            <img
              src="images/cover/5.webp"
              loading="lazy"
              alt="Flicker Engineering"
              className="w-full h-full object-cover"
            />
            {/* <div className="__slider">
              <p className="text-white text-4xl font-bold">Dummy Text 3</p>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="__s_container">
            <img
              src="images/cover/6.webp"
              loading="lazy"
              alt="Flicker Engineering"
              className="w-full h-full object-cover"
            />
            {/* <div className="__slider">
              <p className="text-white text-4xl font-bold">Dummy Text 3</p>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="__s_container">
            <img
              src="images/cover/7.webp"
              loading="lazy"
              alt="Flicker Engineering"
              className="w-full h-full object-cover"
            />
            {/* <div className="__slider">
              <p className="text-white text-4xl font-bold">Dummy Text 3</p>
            </div> */}
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={() => swiper?.slidePrev()} className="__slider-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button onClick={() => swiper?.slideNext()} className="__slider-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Slider;
