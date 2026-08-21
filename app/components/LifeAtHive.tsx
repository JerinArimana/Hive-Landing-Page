"use client";

import Image from "next/image";
import React from "react";
import LifeAtCard from "./LifeAtCard";
import LeafIcon from "./LeafIcon";
import SunIcon from "../img/sun-energy.png";
import PoolIcon from "../img/pool.png";
import CottageIcon from "../img/cottage.png";
import FamilyIcon from "../img/family.png";
import groupTexterBg3 from "../img/group-texter-bg-3.png";

const items = [
  {
    id: 1,
    title: "Self-Sustaining\nEcosystem",
    description: (
      <>
        Powered by the sun.
        <br />
        Untouched by excess
      </>
    ),
    bottomText: (
      <>
        Solar energy keeps the
        <br />
        Hive running - quietly,
        <br />
        cleanly, true to the land
        <br />
        it sits on.
      </>
    ),
    icon: (
      <Image
        src={SunIcon}
        alt="Solar energy"
        width={77}
        height={77}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
  {
    id: 2,
    title: "The Pool",
    description: (
      <>
        The largest pool in
        <br />
        Nagaland. The kind
        <br />
        you don’t forget.
      </>
    ),
    bottomText: (
      <>
        Big enough for
        <br />
        everyone you love, still
        <br />
        enough for you to
        <br />
        breathe.
      </>
    ),
    icon: (
      <Image
        src={PoolIcon}
        alt="Pool"
        width={77}
        height={77}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
  {
    id: 3,
    title: "Cottages",
    description: (
      <>
        You don’t come for a
        <br />
        week. You stay for a
        <br />
        lifetime.
      </>
    ),
    bottomText: (
      <>
        Cottages built to hold
        <br />
        more than your stay -
        <br />
        they hold your
        <br />
        memories.
      </>
    ),
    icon: (
      <Image
        src={CottageIcon}
        alt="Cottage"
        width={77}
        height={77}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
  {
    id: 4,
    title: "Cultural Festivals &\nGatherings",
    description: (
      <>
        Every season, another
        <br />
        reason to gather.
      </>
    ),
    bottomText: (
      <>
        A calendar full of
        <br />
        festivals, celebrations,
        <br />
        and moments meant to
        <br />
        be shared.
      </>
    ),
    icon: (
      <Image
        src={FamilyIcon}
        alt="Family"
        width={77}
        height={77}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
];

const LifeAtHive = () => {
  return (
<section className="relative bg-[#5e260b]">
  <div
    className="absolute left-0 top-[-30px] md:top-[-40px] lg:top-[-80px]  z-20 h-[100px] sm:h-[150px] w-full bg-cover bg-top bg-no-repeat"
    style={{ backgroundImage: `url(${groupTexterBg3.src})` }}
  />
  <div className="relative z-10 mx-auto max-w-[1280px] px-4 pt-[60px] pb-[60px] sm:pt-[80px] sm:pb-[70px] md:pt-[100px] md:pb-[90px]">
    <div className="mb-[28px] sm:mb-[36px] md:mb-[44px] flex items-center justify-center gap-[14px] sm:gap-[20px] md:gap-[27px]">
      <LeafIcon />
      <h2 className="text-[18px] sm:text-[21px] md:text-[25px] font-semibold leading-none tracking-[0.2px] text-[#c5a24d]">
        Life at Hive
      </h2>
      <LeafIcon />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <LifeAtCard key={item.id} {...item} />
      ))}
    </div>
  </div>
</section>
  );
};

export default LifeAtHive;
