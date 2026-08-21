import Image from "next/image";
import React from "react";
import ResortBgImg from "../img/resort-1.png";
import Biker from "../img/Biker.png";
import LeafIcon from "./LeafIcon";

const Resort = () => {
  return (
    <section className="bg-[#E0D8CF] relative pt-[420px] md:pt-[120px] lg:pt-[220px]">
<Image
  src={Biker}
  alt="Biker"
  width={884}
  height={520}
  className="biker-ride absolute top-[-120px] md:top-[-120px] md:top-[-220px] lg:top-[-320px] left-0 z-0 w-[400px] md:w-[500px] lg:w-[800px] h-auto"
  priority
/>
      <div className=" flex flex-col md:flex-row items-start justify-end gap-7 max-w-[80%] absolute right-[10%] top-[-130px] md:top-[-230px] lg:top-[-270px] xl:top-[-430px] h-full">
        {/* Amenities card */}
        <div className=" bg-[#F1ECE4] rounded-[32px] shadow-lg flex flex-col items-center justify-center text-center p-[25px] lg:p-[28px] xl:p-[60px] mt-[40%]">
          <span className="text-[#8B5E34] text-lg mb-1"><LeafIcon /></span>
          <p className="text-[#5B3A22] font-semibold text-[35px] lg:text-[40px] xl:text-[80px] leading-none">
            20+
          </p>
          <p className="text-[#8B5E34] text-[20px] lg:text-[25px] xl:text-[30px]  mt-1 leading-tight">
            World Class
            <br />
            Amenities
          </p>
        </div>

        {/* Cottages / Suit rooms block */}
        <div className=" h-full flex items-center items-start justify-start bg-[#7A3B1E] flex flex-col items-center justify-center text-center gap-6 p-[25px] lg:p-[28px] xl:p-[60px] rounded-[32px]">
          <span className="text-[#D9B98A] text-base">
            <LeafIcon />
          </span>

          <div>
            <p className="text-white font-bold text-[35px] lg:text-[40px] xl:text-[80px] leading-none">
              6
            </p>
            <p className="text-[#D9B98A] text-[20px] lg:text-[25px] xl:text-[30px] mt-1">
              Cottages
            </p>
          </div>

          <div className="w-3/3 h-px bg-[#D9B98A]/50" />

          <div>
            <p className="text-white font-bold text-[35px] lg:text-[40px] xl:text-[80px] leading-none">
              3
            </p>
            <p className="text-[#D9B98A] text-[20px] lg:text-[25px] xl:text-[30px] mt-1">
              Suit Rooms
            </p>
          </div>
          <div className="w-3/3 h-px bg-[#D9B98A]/50" />
        </div>
      </div>
      <div className=" mx-auto max-w-[1280px]">{/* Biker image */}</div>
      {/* Sun semicircle straddling both images */}
      <div className="absolute w-[100px] h-[100px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] rounded-full z-1 bg-[#C9A15B] left-1/2 top-[65%] md:top-[36%] lg:top-[50%]  xl:top-[40%] -translate-x-1/2 -translate-y-1/2">
        
      </div>

      {/* Resort image */}
      <div className="relative w-full z-5 h-[200px] md:h-[400px] md:h-[500px] xl:h-[800px]"  style={{
          backgroundImage: `url(${ResortBgImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}>
        
      </div>
    </section>
  );
};

export default Resort;
