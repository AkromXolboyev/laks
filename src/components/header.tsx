"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "./search/search";

export const Header = () => {
  return (
    <div className="bg-white p-3 text-3xl justify-center items-center fixed w-full flex gap-5 z-50">
      <div>
        <Image
          src="/logo.svg"
          alt="logo"
          className="dark:invert ml-3"
          width={115}
          height={28}
          priority
        />
      </div>

      <div className="ml-[53px] mr-6 flex items-center w-[800px] border border-gray-300 rounded-md ">
        <div className=" w-full">
          <Search />
        </div>
      </div>
      <div className="flex gap-2 ml-5 items-center border border-green-500 p-2 rounded-md">
        <Image
          src="/note.svg"
          alt="note"
          width={24}
          height={24}
          priority={false} 
        />
        <h1>Kirish</h1>
        <Image
          src="/user.svg"
          alt="user"
          width={24}
          height={24}
          priority={false} 
        />
      </div>
      <Link href="/cart">
        <button className="p-2 bg-primary text-white rounded-md text-[20px] flex">
        <Image
          src="/cart.svg"
          alt="user"
          width={50}
          height={50}
          priority={false} 
        />
          Savatcha
        </button>
      </Link>
    </div>
  );
};
