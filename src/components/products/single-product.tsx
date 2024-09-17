import React from "react";
import Image from "next/image";
import Link from "next/link";
export const SingleProduct = () => {
  return (
    <div className="flex justify-between container  mt-[50px]">
      <div className="w-[700px]">
        <div className="container  flex justify-between p-4">
          <Link href={"/"} className="p-4 bg-slate-100 rounded-md">
            Orqaga
          </Link>
          <div className="">
            <Image
              src={"/heart.svg"}
              alt="icon"
              className=""
              width={30}
              height={30}
              priority
            />
          </div>
        </div>
        <Image
          src={"/phone.svg"}
          alt="icon"
          className=""
          width={480}
          height={480}
          priority
        />
      </div>
      <div className="w-[700px] bg-slate-50 pl-[56px]">
        <h1 className="w-[614px] text-[36px] font-semibold">
          Смартфон Apple iphone 13 Pro Max 512 GB Graphite
        </h1>
        <div className="flex gap-4 items-center mt-5">
          <Image
            src={"stars.svg"}
            alt={"icon"}
            width={100}
            height={24}
            priority
            className=""
          />
          <strong className="opacity: 0.5 text-[#576755]">(34)</strong>
          <p className="opacity: 0.5 text-[#576755]">26 689 520 so’m</p>
          <button className="p-2 bg-red-500 rounded-lg">-20%</button>
        </div>
        <strong className="text-[42px] font-semibold text-primary mt-5">
          18 664 000 so’m
        </strong>
        <div className="flex mt-5">
          <button className="bg-black flex px-[74px] py-2 rounded-md gap-3 w-[240px] text-center items-center">
            <Image
              src={"basket.svg"}
              alt={"icon"}
              width={24}
              height={24}
              priority
              className=""
            />
            <p className="text-white"> savatchaga</p>
          </button>
          <button className=" flex px-[74px] py-2 rounded-md gap-3  text-center items-center">
            <Image
              src={"circle.svg"}
              alt={"icon"}
              width={24}
              height={24}
              priority
              className=""
            />
            <p className=""> omborda mavjud</p>
          </button>
        </div>
        <div className="mt-5">
          <h1 className="mt-5 inline-block">Rangi:</h1>
          <button className="items-center ml-3 border border-primary p-3 rounded-lg">
            <Image
              src={"circle4.svg"}
              alt={"icon"}
              width={24}
              height={24}
              priority
              className="m-auto"
            />
            <p>Alpine Green</p>
          </button>
          <button className="items-center ml-3 border border-primary p-3 rounded-lg">
            <Image
              src={"circle1.svg"}
              alt={"icon"}
              width={24}
              height={24}
              priority
              className="m-auto"
            />
            <p>Alpine Green</p>
          </button>
          <button className="items-center ml-3 border border-primary p-3 rounded-lg">
            <Image
              src={"circle2.svg"}
              alt={"icon"}
              width={24}
              height={24}
              priority
              className="m-auto"
            />
            <p>Alpine Green</p>
          </button>
          <button className="items-center ml-3 border border-primary p-3 rounded-lg">
            <Image
              src={"circle3.svg"}
              alt={"icon"}
              width={24}
              height={24}
              priority
              className="m-auto"
            />
            <p>Alpine Green</p>
          </button>
        </div>
        <div className="flex items-center gap-4 mt-8 w-[614px] h-[64px] bg-green-100 p-4 rounded-md">
          <Image
            src={"bayroq.svg"}
            alt={"icon"}
            width={42}
            height={42}
            priority
            className=""
          />
          <h1 className="font-semibold">
            O’zbekiston bo’ylab yetkazib berish:
          </h1>
          <p>14 ish kuni</p>
        </div>
        <div className="mt-5 mb-10">
          <h1 className="font-semibold mb-3">Описание</h1>
          <p>
            Смартфон Apple iPhone 13 Pro Max 512 GB Graphite Apple iPhone 13 Pro
            Max оснащен передовыми технологиями, значительно расширяющими
            функциональные возможности девайса. На тыльной стороне девайса
            расположен инновационный
          </p>
        </div>
      </div>
      
    </div>
  );
};
