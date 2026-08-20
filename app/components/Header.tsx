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
    <header className="absolute left-0 top-0 z-50 w-full px-8 py-7 md:px-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            type="button"
            onMouseEnter={() => setMenuOpen(true)}
            className="group relative z-50 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#713611]"
            aria-label="Open menu"
          >
            <div className="flex w-4 flex-col gap-[3px]">
              <span className="h-[1px] w-full bg-white transition-all duration-300" />
              <span className="h-[1px] w-full bg-white transition-all duration-300" />
              <span className="h-[1px] w-full bg-white transition-all duration-300" />
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
        <a
          href="/"
          className="relative z-50"
        >
          <img
            src="/images/logo-2.png"
            alt="The Hive Clubhouse"
            className="w-[290px] md:w-[120px]"
          />
        </a>
      </div>
    </header>
  );
}