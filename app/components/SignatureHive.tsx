import React from "react";
import Image from "next/image";
import leafWhite from "../img/leaf.png";
import HillsImg from "../img/Hills.png";
import CloudImg3 from "../img/cloud_PNG112253.png";
import LogoIcon from "../img/Logo-Icon.png";

const SignatureHive = () => {
  return (
    <section className="relative bg-[#AF894A] pt-14 sm:pt-20 md:pt-28 lg:pt-[130px]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-4">
        {/* Heading */}
        <div className="mb-5 flex items-center justify-center gap-2 sm:mb-8 sm:gap-4 md:mb-10 md:gap-6 lg:mb-[44px] lg:gap-[27px]">
          <Image
            src={leafWhite}
            alt="Hive Logo"
            className="h-4 w-auto sm:h-6 md:h-7"
          />
          <h2 className="text-center text-base font-semibold leading-tight tracking-[0.2px] text-white sm:text-xl md:text-2xl lg:text-[25px] lg:leading-none">
            The Signature of The Hive
          </h2>
          <Image
            src={leafWhite}
            alt="Hive Logo"
            className="h-4 w-auto sm:h-6 md:h-7"
          />
        </div>

        {/* Body copy */}
        <div className="mx-auto max-w-[900px] text-center">
          <p className="mb-7 text-sm leading-relaxed text-white sm:mb-10 sm:text-base md:text-lg lg:mb-[50px] lg:text-[23px]">
            The Hive isn’t just a place you visit - it’s one you carry with
            you. A calm space to slow down, gather with family, and simply
            enjoy the surroundings, the way a good day with people you love
            should feel. Some people come once and find themselves thinking
            about it long after they’ve left, already planning their way
            back. That’s The Hive - a home away from home, however far away
            you are.
          </p>
          <h3 className="text-base font-semibold leading-tight tracking-[0.2px] text-white sm:text-xl md:text-2xl lg:text-[25px] lg:leading-none">
            Not a getaway.
            <br className="sm:hidden" /> A homecoming.
          </h3>
        </div>
      </div>

      {/* Hills / clouds / logo */}
      <div className="relative z-0 mt-10 h-[360px] w-full overflow-hidden sm:mt-14 sm:h-[520px] md:h-[750px] lg:mt-0 lg:h-[1000px]">
        <Image
          src={LogoIcon}
          alt="LogoIcon"
          width={200}
          height={200}
          className="absolute left-1/2 top-[32%] z-0 h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 object-contain sm:h-[120px] sm:w-[120px] md:top-[34%] md:h-[160px] md:w-[160px] lg:h-[200px] lg:w-[200px]"
        />

        <Image
          src={HillsImg}
          alt="Hills"
          fill
          priority
          className="z-10 object-cover object-center"
        />

        {/* Clouds - ABOVE mountains */}
        <Image
          src={CloudImg3}
          alt="Cloud"
          width={610}
          height={220}
          className="animate-cloud-slow absolute left-[-30%] top-[90px] z-20 w-[190px] sm:top-[150px] sm:w-[320px] md:top-[210px] md:w-[480px] lg:left-[-250px] lg:top-[240px] lg:w-[610px]"
        />

        <Image
          src={CloudImg3}
          alt="Cloud"
          width={430}
          height={200}
          className="animate-cloud-medium absolute left-[-20%] top-[35px] z-20 w-[140px] sm:top-[65px] sm:w-[230px] md:top-[95px] md:w-[340px] lg:left-[-200px] lg:top-[120px] lg:w-[430px]"
        />

        <Image
          src={CloudImg3}
          alt="Cloud"
          width={840}
          height={300}
          className="animate-cloud-fast absolute left-[-15%] top-[-10px] z-20 w-[260px] sm:w-[420px] md:w-[640px] lg:left-[-150px] lg:top-0 lg:w-[840px]"
        />
      </div>
    </section>
  );
};

export default SignatureHive;