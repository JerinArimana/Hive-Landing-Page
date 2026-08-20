import React from "react";
import LeafIcon from "./LeafIcon";
import Image from "next/image";
import leafWhite from "../img/leaf.png";
import HillsImg from "../img/Hills.png";
import CloudImg3 from "../img/cloud_PNG112253.png";
import LogoIcon from "../img/Logo-Icon.png";

const SignatureHive = () => {
  return (
    <section className="bg-[#AF894A]  pt-[130px] relative">
      <div className="mx-auto max-w-[1280px] px-4 ">
        <div className="mb-[44px] flex items-center justify-center gap-[27px] ">
          <Image src={leafWhite} alt="Hive Logo" />
          <h2 className="text-[25px] font-semibold leading-none tracking-[0.2px] text-white">
            The Signature of The Hive
          </h2>
          <Image src={leafWhite} alt="Hive Logo" />
        </div>
        <div className="mx-auto max-w-[1280px] px-4 text-center">
          <p className="text-white text-[23px] mb-[50px]">
            The Hive isn’t just a place you visit - it’s one you carry with you.
            A calm space to slow down, gather with family, and simply enjoy the
            surroundings, the way a good day with people you love should feel.
            Some people come once and find themselves thinking about it long
            after they’ve left, already planning their way back. That’s The Hive
            - a home away from home, however far away you are.
          </p>
          <h3 className="text-[25px] font-semibold leading-none tracking-[0.2px] text-white">
            Not a getaway. A homecoming.
          </h3>
        </div>
      </div>
      <div className="relative z-0 h-[1000px] w-full overflow-hidden">
        <Image
          src={LogoIcon}
          alt="LogoIcon"
          width={200}
          height={200}
          className="absolute left-1/2 top-[34%] z-0 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 object-contain"
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
          className="
      absolute
      left-[-250px]
      top-[240px]
      z-20
      animate-cloud-slow
    "
        />

        <Image
          src={CloudImg3}
          alt="Cloud"
          width={430}
          height={200}
          className="
      absolute
      left-[-200px]
      top-[120px]
      z-20
      animate-cloud-medium
    "
        />

        <Image
          src={CloudImg3}
          alt="Cloud"
          width={840}
          height={300}
          className="
      absolute
      left-[-150px]
      top-0
      z-20
      animate-cloud-fast
    "
        />

        {/* Mountains */}
      </div>
    </section>
  );
};

export default SignatureHive;
