import Image from "next/image";

import leaf4 from "../img/leaf-4.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#E0D8CF]">
      {/* Background */}
      <Image
        src="/images/top-slide-v2.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* ================= HERO CONTENT ================= */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[100svh]
          items-end
          px-6
          pb-10
          pt-[78svh]

          sm:px-8

          lg:px-24
          lg:pb-40
          lg:pt-0
        "
      >
        <div className="max-w-2xl text-white">
          {/* Heading */}
          <h1
            className="
              text-2xl
              font-semibold
              leading-[1.1]

              sm:text-3xl

              md:text-4xl

              xl:text-[50px]
            "
          >
            Close to Nature.
            <br />
            Closer to What Matters.
          </h1>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-xl
              text-sm
              leading-7

              sm:text-base
              sm:leading-8

              md:text-lg

              xl:text-[23px]
            "
          >
            The Hive Club House is a members' club and gathering destination in
            Jalukie Town, Nagaland. A quiet place for families and friends to
            connect, celebrate and belong.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-6
              flex
              flex-wrap
              items-center
              gap-4

              sm:mt-7
              sm:gap-6
            "
          >
            <a
              href="#membership"
              className="
                text-xs
                font-semibold
                uppercase
                tracking-wide
                transition-opacity
                hover:opacity-70

                sm:text-sm

                lg:text-[19px]
              "
            >
              Become a Member
            </a>

            <Image
              src={leaf4}
              alt="Arrow"
              width={36}
              height={36}
              className="h-7 w-7 sm:h-9 sm:w-9"
            />

            <a
              href="#hive"
              className="
                rounded-full
                bg-[#c9984b]
                px-5
                py-2.5
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-white
                transition-all
                hover:scale-105
                hover:bg-[#b5873f]

                sm:px-6
                sm:py-3
                sm:text-sm

                lg:text-[18px]
              "
            >
              Explore The Hive
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
