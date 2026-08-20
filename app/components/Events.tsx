"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import eventTextureBg from "../img/event-texture-bg.png";

import Image from "next/image";
import EventCard from "./EventCard";
import MaskGroup7 from "../img/Mask-Group-7.png";
import groupBlock from '../img/group-block.png';
const Events = () => {
  const [eventData, setEventData] = useState([
    {
      id: 1,
      title: "Hornbill Festival",
      subTitle: "Kisama Heritage Village, Near Kohima",
      description: "Fixed government dates - confirmed accurate",
      date: "Dec 01-10 2026",
      eventImage: MaskGroup7,
    },
    {
      id: 2,
      title: "Sekrenyi Festival",
      subTitle: "Kohima",
      description: "Angami tribe. *Follows tribal calendar - confirm exact days closer to the date",
      date: "Feb 21-24 2026",
      eventImage: MaskGroup7,
    },
    {
      id: 3,
      title: "Aoleang Monyu Festival",
      subTitle: "Mon District",
      description: "Konyak tribe. *Traditionally first week of April",
      date: "Apr 01-06 2026",
      eventImage: MaskGroup7,
    },
        {
      id: 4,
      title: "Moatsu Festival",
      subTitle: "Mokokchung District",
      description: "Ao tribe",
      date: "May 01-03 2026",
      eventImage: MaskGroup7,
    },
  ]);

  return (
    <>
      <section className="relative bg-[#e0d8cf]">
        <div
          className="absolute left-0 top-[-130px] z-20 h-[150px] w-full bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${eventTextureBg.src})`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1280px] pt-[100px] pb-[130px]">
          {/* Heading */}
          <div className="mb-[44px] flex items-center justify-center gap-[27px]">
            <h2 className="text-[25px] font-semibold leading-none tracking-[0.2px] text-[#c5a24d]">
              Upcoming Events
            </h2>
          </div>

          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
            //   pagination={{
            //     clickable: true,
            //   }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {eventData.map((event) => (
                <SwiperSlide>
                  <EventCard
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    subTitle={event.subTitle}
                    description={event.description}
                    date={event.date}
                    eventImage={event.eventImage}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div>
            <Image
            src={groupBlock}
            
            alt=""
            className=""
            style={{
                width:"100%",
                height:"100px",
                objectFit:"cover"
                            }}
            />
        </div>
      </section>
    </>
  );
};

export default Events;
