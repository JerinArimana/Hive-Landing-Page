"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import groupTexterBg3 from "../img/group-texter-bg-3.png";
import FooterLogo from '../img/FooterLogo.png';
import FooterLocation from '../img/FooterLocation.png';
import LocationMapImg from '../img/location-map-img.png';

const Footer = () => {
  return (
    <>
      <footer className="relative bg-[#5e260b]">
        <div
          className="absolute left-0 top-[-130px] z-20 h-[150px] w-full bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${groupTexterBg3.src})`,
          }}
        />
       <div className="w-full bg-[#5e260b] px-6 py-8 sm:px-8 md:px-10 lg:px-12">
            <div
              className="
          mx-auto
          flex
          max-w-[1280px]
          flex-col
          items-center
          justify-between
          gap-8

          md:flex-row
          md:items-center
          md:gap-6

          lg:gap-10
        "
            >
              {/* Logo */}
              <div className="shrink-0">
                <Image
                  src={FooterLogo}
                  alt="The Hive Club House"
                  width={300}
                  height={150}
                  className="
              h-auto
              w-[220px]
              sm:w-[250px]
              lg:w-[300px]
            "
                />
              </div>

              {/* Navigation */}
              <nav
                className="
            flex
            flex-col
            items-center
            gap-2
            text-center

            md:items-start
            md:text-left
          "
              >
                <a
                  href="#experiences"
                  className="
              text-[14px]
              text-[#C08B36]
              transition-colors
              hover:text-white
              sm:text-[15px]
            "
                >
                  Experiences
                </a>

                <a
                  href="#membership"
                  className="
              text-[14px]
              text-[#C08B36]
              transition-colors
              hover:text-white
              sm:text-[15px]
            "
                >
                  Membership
                </a>

                <a
                  href="#gallery"
                  className="
              text-[14px]
              text-[#C08B36]
              transition-colors
              hover:text-white
              sm:text-[15px]
            "
                >
                  Gallery
                </a>
              </nav>

              {/* Location Icon */}
              <div className="flex shrink-0 items-center justify-center">
                <Image
                  src={FooterLocation}
                  alt="Location"
                  width={55}
                  height={65}
                  className="h-[55px] w-[45px] object-contain sm:h-[65px] sm:w-[55px]"
                />
              </div>

              {/* Map */}
              <div
                className="
            relative
            h-[160px]
            w-full
            max-w-[300px]
            overflow-hidden
            rounded-[20px]

            sm:h-[180px]
            sm:max-w-[330px]

            lg:h-[190px]
            lg:max-w-[350px]
          "
              >
                <Image
                  src={LocationMapImg}
                  alt="The Hive location map"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Address + Phone */}
              <div
                className="
            flex
            flex-col
            items-center
            text-center
            text-white

            md:items-start
            md:text-left
          "
              >
                <h3
                  className="
              mb-1
              text-[14px]
              font-medium
              leading-[1.45]
              tracking-[1px]
              sm:text-[15px]
            "
                >
                  THE HIVE
                  <br />
                  CLUB HOUSE
                </h3>

                <p
                  className="
              text-[13px]
              leading-[1.45]
              tracking-[1px]
              text-white/90
              sm:text-[14px]
            "
                >
                  55A, Jalukie,
                  <br />
                  Nagaland
                  <br />
                  797110
                </p>

                {/* Phone */}
                <a
                  href="tel:+917629977720"
                  className="
              mt-3
              flex
              items-center
              gap-2
              text-[13px]
              tracking-[0.5px]
              text-white
              sm:text-[14px]
            "
                >
                  <span
                    className="
                flex
                h-[19px]
                w-[19px]
                items-center
                justify-center
                rounded-full
                bg-[#25D366]
                text-[12px]
              "
                  >
                    ✓
                  </span>
                  +91 7629977720
                </a>
              </div>
            </div>
          </div>
      </footer>
    </>
  );
};

export default Footer;
