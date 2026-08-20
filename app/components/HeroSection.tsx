import Image from "next/image";

import leaf4 from "../img/leaf-4.png";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/top-slide-v2.png')",
      }}
    >
      <div className="relative z-10 flex min-h-screen items-end px-8 pb-16 md:px-24 md:pb-40">
        <div className="max-w-2xl text-white">
          <h1 className=" text-2xl font-semibold leading-[1.1] md:text-4xl xl:text-[50px]">
            Close to Nature.
            <br />
            Closer to What Matters.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-8 md:text-lg xl:text-[23px]">
            The Hive Club House is a members' club and gathering destination in
            Jalukie Town, Nagaland. A quiet place for families and friends to
            connect, celebrate and belong.
          </p>
          <div className="mt-7 flex items-center gap-6">
            <a
              href="#membership"
              className="text-xs lg:text-[19px] font-semibold uppercase tracking-wide hover:opacity-70"
            >
              Become a Member
            </a>
            <span className="text-lg">
              <Image src={leaf4} alt="Arrow" width={36} height={36} />
            </span>
            <a
              href="#hive"
              className="rounded-full bg-[#c9984b] px-6 py-3 text-xs lg:text-[18px] font-bold uppercase tracking-wide text-white transition-all hover:bg-[#b5873f] hover:scale-105"
            >
              Explore The Hive
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
