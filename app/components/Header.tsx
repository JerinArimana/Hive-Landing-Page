"use client";

import { useState } from "react";
import Navigation from "./Navigation";

const navItems = [
  "The Hive",
  "Experiences",
  "Membership",
  "Gallery",
  "Location",
  "Contact",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("The Hive");

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      {/* ================= DESKTOP ================= */}
      <div className="hidden px-8 py-7 lg:block lg:px-16">
        <div className="flex items-center justify-between">
          {/* Menu + Navigation */}
          <div className="flex items-center">
            <button
              type="button"
              onMouseEnter={() => setMenuOpen(true)}
              className="group relative z-50 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#713611]"
              aria-label="Open menu"
            >
              <div className="flex w-4 flex-col gap-[3px]">
                <span className="h-[1px] w-full bg-white" />
                <span className="h-[1px] w-full bg-white" />
                <span className="h-[1px] w-full bg-white" />
              </div>
            </button>

            <Navigation
              navItems={navItems}
              menuOpen={menuOpen}
              activeItem={activeItem}
              onActiveChange={setActiveItem}
              onMenuClose={() => setMenuOpen(false)}
            />
          </div>

          {/* Desktop Logo */}
          <a href="/" className="relative z-50">
            <img
              src="/images/logo-2.png"
              alt="The Hive Clubhouse"
              className="w-[120px]"
            />
          </a>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="block lg:hidden">
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            absolute
            right-6
            top-6
            z-[60]
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#713611]
            sm:right-8
            sm:top-7
          "
          aria-label="Toggle menu"
        >
          <div className="flex w-5 flex-col gap-[4px]">
            <span
              className={`h-[1.5px] w-full bg-white transition-all duration-300 ${
                menuOpen
                  ? "translate-y-[5.5px] rotate-45"
                  : ""
              }`}
            />

            <span
              className={`h-[1.5px] w-full bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-[1.5px] w-full bg-white transition-all duration-300 ${
                menuOpen
                  ? "-translate-y-[5.5px] -rotate-45"
                  : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Navigation */}
        <div
          className={`
            absolute
            right-6
            top-[88px]
            z-50
            transition-all
            duration-300
            sm:right-8
            sm:top-[95px]
            ${
              menuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-3 opacity-0"
            }
          `}
        >
          <nav className="flex flex-col items-end gap-[4px]">
            {navItems.map((item) => {
              const isActive = activeItem === item;

              return (
                <a
                  key={item}
                  href="#"
                  onClick={() => {
                    setActiveItem(item);
                    setMenuOpen(false);
                  }}
                  className={`
                    whitespace-nowrap
                    text-right
                    text-[16px]
                    leading-[1.5]
                    text-[#713611]
                    transition-opacity
                    duration-300
                    sm:text-[17px]
                    ${
                      isActive
                        ? "font-medium opacity-100"
                        : "font-normal opacity-90"
                    }
                  `}
                >
                  {item}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ================= MOBILE LOGO ================= */}
      <a
        href="/"
        className="
          absolute
          left-1/2
          top-[43svh]
          z-40
          -translate-x-1/2
          lg:hidden
        "
      >
        <img
          src="/images/logo-2.png"
          alt="The Hive Clubhouse"
          className="
            w-[250px]
            max-w-[68vw]
            sm:w-[285px]
          "
        />
      </a>
    </header>
  );
}