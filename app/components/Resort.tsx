import Image from "next/image";
import React from "react";
import ResortBgImg from "../img/resort-1.png";
import Biker from "../img/Biker.png";
import LeafIcon from "./LeafIcon";

const Resort = () => {
  return (
    <section className="bg-[#E0D8CF] relative pt-[220px]">
      <Image
        src={Biker}
        alt="Biker"
        width={884}
        height={520}
        className="w-[800px] h-auto absolute top-[-320px] left-0 z-0"
        priority
      />
      <div className="flex items-start justify-end gap-7 max-w-[80%] absolute right-[10%] top-[-430px] h-full">
        {/* Amenities card */}
        <div className=" bg-[#F1ECE4] rounded-[32px] shadow-lg flex flex-col items-center justify-center text-center p-[60px] mt-[40%]">
          <span className="text-[#8B5E34] text-lg mb-1"><LeafIcon /></span>
          <p className="text-[#5B3A22] font-semibold text-[92px]  leading-none">
            20+
          </p>
          <p className="text-[#8B5E34] text-[35px]  mt-1 leading-tight">
            World Class
            <br />
            Amenities
          </p>
        </div>

        {/* Cottages / Suit rooms block */}
        <div className=" h-full flex items-center items-start justify-start bg-[#7A3B1E] flex flex-col items-center justify-center text-center gap-6 p-[52px] rounded-[32px]">
          <span className="text-[#D9B98A] text-base">
            <LeafIcon />
          </span>

          <div>
            <p className="text-white font-bold text-[92px] leading-none">
              6
            </p>
            <p className="text-[#D9B98A] text-[35px] mt-1">
              Cottages
            </p>
          </div>

          <div className="w-3/3 h-px bg-[#D9B98A]/50" />

          <div>
            <p className="text-white font-bold text-[92px] leading-none">
              3
            </p>
            <p className="text-[#D9B98A] text-[35px] mt-1">
              Suit Rooms
            </p>
          </div>
          <div className="w-3/3 h-px bg-[#D9B98A]/50" />
        </div>
      </div>
      <div className=" mx-auto max-w-[1280px]">{/* Biker image */}</div>
      {/* Sun semicircle straddling both images */}
      <div className="absolute w-[300px] h-[300px] rounded-full z-1 bg-[#C9A15B] left-1/2  top-[30%] -translate-x-1/2 -translate-y-1/2">
        
      </div>

      {/* Resort image */}
      <div className="relative w-full z-5 h-[800px]"  style={{
          backgroundImage: `url(${ResortBgImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}>
        {/* <Image
          src={ResortBgImg}
          alt="Resort"
          width={1080}
          height={720}
          className="w-full h-auto rounded-lg"
        /> */}
      </div>
    </section>
  );
};

export default Resort;
