"use client";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className="bg-slate-50 p-5 text-3xl justify-center items-center fixed w-full flex">
      {/* Logo Section */}
      <div>
      <Image
          src="/logo.svg"
          alt="logo"
          className="dark:invert ml-3"
          width={115}
          height={28}
          priority // Priority is fine for the logo
        />
      </div>

      {/* Search Bar */}
      <div className="ml-[53px] mr-6 flex items-center w-[900px] border border-gray-300 rounded-md overflow-hidden">
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
            <Search className="h-5 w-5" />
          </span>
          <Input
            placeholder="Qidirish"
            className="pl-10 h-[47px] focus:ring-0 border-primary border-[1px]"
          />
        </div>
        <Button className="flex items-center gap-2 bg-primary text-white h-[47px] px-4">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Language and Icons Section */}
      <div>
        <Button variant="ghost">
          <Image
            src="/uzb.svg"
            alt="uzb-flag"
            width={100}
            height={40}
            priority
          />
        </Button>
      </div>

      <div className="flex gap-2 ml-5 items-center">
        <Image
          src="/note.svg"
          alt="note"
          width={24}
          height={24}
          priority={false} // No need for priority on small icons
        />
        <h1>Kirish</h1>
        <Image
          src="/user.svg"
          alt="user"
          width={24}
          height={24}
          priority={false} // No need for priority
        />
      </div>
    </div>
  );
};
