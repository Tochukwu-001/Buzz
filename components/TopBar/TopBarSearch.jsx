"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
const TopBarSearch = () => {
  const [searching, setSearching] = useState(false);

  const handleSearch = (event) => {
    const text = event.currentTarget.value;
    if (text.length > 0) {
      setSearching(true);
    } else {
      setSearching(false);
    }
  };
  return (
    <div className="relative">
      <div className="relative">
        <label htmlFor="search" className="absolute top-3 text-gray-400 left-2">
          <FaSearch />
        </label>
        <Input
          className={"w-full lg:w-96 pl-8"}
          placeholder={"Search"}
          onInput={handleSearch}
          id={'search'}
        />
      </div>
      <div
        className={`absolute bg-white rounded p-2 w-full top-14   ${!searching ? "scale-0 opacity-0" : "opacity-100"
          } transition-opacity duration-500 ease-in-out`}
      >
        <ul>
          <li className="font-bold mb-3 border-b">People</li>

          <li>
            <Link
              href={"#"}
              className="flex items-center gap-4 hover:bg-slate-300/50 p-2 rounded"
            >
              <Image
                src={"/img-bg-1.jpg"}
                width={500}
                height={500}
                alt="uu"
                className="w-10 h-10 rounded-full border object-cover"
              />

              <div className="captions w-full flex flex-col gap-1">
                <p className="text-sm font-semibold">Jeremy Lynch</p>
                <p className="text-gray-600 text-xs font-semibold">
                  FCT - Abuja
                </p>
              </div>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="font-bold my-3 border-b">Groups</li>

          <li>
            <Link
              href={"#"}
              className="flex items-center gap-4 hover:bg-slate-300/50 p-2 rounded"
            >
              <Image
                src={"/img-bg-2.jpg"}
                width={500}
                height={500}
                className="w-10 h-10 rounded-full border object-cover"
                alt="ooo"
              />

              <div className="captions w-full flex flex-col gap-1">
                <p className="text-sm font-semibold">Next Features</p>
                <p className="text-gray-600 text-xs font-semibold">
                  200k Subscribers
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBarSearch;
