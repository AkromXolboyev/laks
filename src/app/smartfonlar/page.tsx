import React from "react";
import Link from "next/link";
import { getPhones } from "../service/query/get-phones";
import Image from "next/image";
import { SingleProduct } from "@/components/products/single-product";

const Smartfonlar = async () => {
  const data = await getPhones();
  const slicedData = data.slice(0, 4);

  return (
    <div className="mt-[100px]">
      <div className="flex gap-5 p-5 w-[1440px] container">
        <Link href={"/"} className="p-5 bg-slate-200 rounded-md">
          bosh sahifa
        </Link>
        <h1 className="bg-slate-200 p-5 rounded-md">Smartfonlar</h1>
        <p className="p-5 bg-slate-200 rounded-md">apple</p>
      </div>

      <SingleProduct />
      <div className=" container bg-slate-100">
        <div className="flex ">
          <div className="w-[600px]">
            <h1 className="font-semibold pt-4 border-b-2 border-slate-500">
              Основные характеристики
            </h1>
            <h1 className=" pt-4 border-b-2 border-slate-500">
              Объем встроенной памяти
            </h1>
            <h1 className=" pt-4 border-b-2 border-slate-500">Процессор</h1>
            <h1 className=" pt-4 border-b-2 border-slate-500">Диагональ</h1>
            <h1 className=" pt-4 border-b-2 border-slate-500">Тип дисплея</h1>
            <h1 className=" pt-4 border-b-2 border-slate-500">Корпус</h1>
            <h1 className=" pt-4 border-b-2 border-slate-500">Вес</h1>
            <h1 className=" pt-4 border-b-2 border-slate-500">Фотокамера</h1>
            <h1 className=" pt-4 border-b-2 border-slate-500">
              Разъем для наушников
            </h1>
            <h1 className=" pt-4 border-b-2 border-slate-500">
              Количество ядер
            </h1>
            <h1 className=" pt-4 border-b-2 border-slate-500">Аккумулятор</h1>
          </div>
          <div className="">
            <p className="font-normal pt-4 border-b-2 border-slate-500">
              Отзывы (2)
            </p>
            <p className="font-normal pt-4 border-b-2 border-slate-500">
              128 ГБ
            </p>
            <p className="font-normal pt-4 border-b-2 border-slate-500">
              Apple A15 Bionic
            </p>
            <p className="font-normal pt-4 border-b-2 border-slate-500">5.4</p>
            <p className="font-normal pt-4 border-b-2 border-slate-500">
              Super Retina XDR (OLED)
            </p>
            <p className="font-normal pt-4 border-b-2 border-slate-500">
              металл и стекло, влагозащита IP68
            </p>
            <p className="font-normal pt-4 border-b-2 border-slate-500">
              238 г
            </p>
            <p className="font-normal pt-4 border-b-2 border-slate-500">
              телефото 12 МП F/2.80, широкоугольная 12 МП F/1.50,
              сверхширокоугольная 12 МП F/1.80
            </p>
            <p className="font-normal pt-4 border-b-2 border-slate-500">
              Lightning
            </p>
            <p className="font-normal pt-4 border-b-2 border-slate-500">
              6 ядер
            </p>
            <p className="font-normal pt-4 border-b-2 border-slate-500">
              Li-Ion, Время работы в режиме прослушивания музыки 95 ч, функция
              беспроводной зарядки,
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="font-bold text-[24px] my-[50px]">
          Вместе с этим товаром покупают
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-10 bg-slate-100 p-5 ">
          {slicedData.map((item) => (
            <div
              className="bg-white w-[264px] text-center h-[464px] gap-5 p-5 rounded-md"
              key={item.id}
            >
              <img src={item.img} alt="img" />
              <h1 className="mt-5">{item.title}</h1>
              <h3 className="mt-1">{item.brand}</h3>
              <Image
                src={"stars.svg"}
                alt={"icon"}
                width={100}
                height={24}
                priority
                className="text-center m-auto"
              />
              <strong className="block">{item.price}</strong>
              <button className="pl-[74px] pr-[74px] bg-primary p-3 rounded-md">
                Savatchaga
              </button>
            </div>
          ))}
        </div>
        <h1 className="font-bold text-[24px] my-[50px]">
          {" "}
          Похожие товары (16){" "}
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-10 bg-slate-100 p-5 ">
          {slicedData.map((item) => (
            <div
              className="bg-white w-[264px] text-center h-[464px] gap-5 p-5 rounded-md"
              key={item.id}
            >
              <img src={item.img} alt="img" />
              <h1 className="mt-5">{item.title}</h1>
              <h3 className="mt-1">{item.brand}</h3>
              <Image
                src={"stars.svg"}
                alt={"icon"}
                width={100}
                height={24}
                priority
                className="text-center m-auto"
              />
              <strong className="block">{item.price}</strong>
              <button className="pl-[74px] pr-[74px] bg-primary p-3 rounded-md">
                Savatchaga
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Smartfonlar;
