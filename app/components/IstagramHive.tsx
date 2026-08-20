"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import instaBg from "../img/instaBg.png";
import InstaCard from "./InstaCard";
import MaskGroup1 from "../img/Mask-Group-1.png";
import MaskGroup2 from "../img/Mask-Group-2.png";
import MaskGroup3 from "../img/Mask-Group-3.png";
import MaskGroup4 from "../img/Mask-Group-4.png";

const InstragramHive = () => {
  const [eventData, setEventData] = useState([
    {
      id: 1,
      eventImage: MaskGroup1,
    },
    {
      id: 2,
      eventImage: MaskGroup2,
    },
    {
      id: 3,
      eventImage: MaskGroup3,
    },
    {
      id: 4,
      eventImage: MaskGroup4,
    },
    {
      id: 5,
      eventImage: MaskGroup4,
    },
  ]);
  return (
    <>
      <section
        className="relative bg-no-repeat bg-cover bg-center after:absolute after:inset-0 after:bg-[#5E260B] after:opacity-70 after:content-['']"
        style={{
          backgroundImage: `url(${instaBg.src})`,
        }}
      >
        <div className="absolute left-0 top-[-130px] z-20 h-[150px] w-full bg-cover bg-top bg-no-repeat" />
        <div className="relative z-10 mx-auto max-w-[1280px] pt-[100px] pb-[130px]">
          {/* Heading */}
          <div className="mb-[44px] flex items-center justify-center gap-[27px]">
            <h2 className="text-[25px] font-semibold leading-none tracking-[0.2px] text-[#E0D8CF]">
              Hive @ Instagram
            </h2>
          </div>

          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {eventData.map((event) => (
                <SwiperSlide>
                  <InstaCard key={event.id} eventImage={event.eventImage} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstragramHive;
