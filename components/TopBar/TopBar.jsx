"use client";
import Image from "next/image";
import React, { useState } from "react";
import TopBarSearch from "./TopBarSearch";
import UserOptions from "./UserOptions";
import { TbMenu } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const TopBar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center p-4 lg:px-20 lg:py-3 shadow-md sticky top-0 z-50 bg-slate-900/90">
        <Image
          src={"/logo.png"}
          width={400}
          height={400}
          alt=""
          className="w-auto h-8 lg:h-10"
        />

        <div className="hidden lg:flex">
          <TopBarSearch />
        </div>

        <div className="hidden lg:flex">
          <UserOptions />
        </div>


        <div className="lg:hidden">
          {
            !showMenu ? (
              <TbMenu
                onClick={() => setShowMenu(true)}
                className="text-white text-3xl"
              />
            ) : (
              <IoClose
                onClick={() => setShowMenu(false)}
                className="text-white text-3xl"
              />
            )
          }
        </div>

      </header>

      {/* Mobile Nav */}
      <div className={`hidden fixed z-50 max-lg:flex flex-col gap-7 items-center w-full h-dvh pt-5 bg-slate-900/90 transition-all ${!showMenu ? "max-lg:translate-x-full" : ""}`}>
        <div className="w-full px-4 mb-4">
          <TopBarSearch />
        </div>

        <div className="w-full px-4">
          <UserOptions />
        </div>
      </div>
    </>
  );
};

export default TopBar;
