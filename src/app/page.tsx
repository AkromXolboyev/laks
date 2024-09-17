import Link from "next/link";
import Image from "next/image";
import { getProducts } from "./service/query/get-products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getSports } from "./service/query/get-sports";

export default async function Home() {
  const data = await getProducts();
  const newdata = await getSports();
  const slicedData = data.slice(0, 8);
  const slicedNewdata = newdata.slice(0, 8);

  return (
    <div className="mt-[100px] flex ">
      <div className="bg-slate-50 w-[280px] h-screen ">
        {/* Kategoriyalarni ko'rsatish */}
        <div className="pt-[17px] pb-[17px] w-[280px] flex justify-between p-5">
          <Link href={"/smartfonlar"}>Smartfonlar</Link>
          <Image
            src={"/arrow.svg"}
            alt={"arrow"}
            width={24}
            height={24}
            priority
          />
        </div>
        <div className="pt-[17px] pb-[17px] w-[280px] flex justify-between p-5">
          <Link href={"/planshetlar"}>Computers</Link>
          <Image
            src={"/arrow.svg"}
            alt={"arrow"}
            width={24}
            height={24}
            priority
          />
        </div>
        <div className="pt-[17px] pb-[17px] w-[280px] flex justify-between p-5">
          <Link href={"/quloqchinlar"}>Phones</Link>
          <Image
            src={"/arrow.svg"}
            alt={"arrow"}
            width={24}
            height={24}
            priority
          />
        </div>
        <div className="pt-[17px] pb-[17px] w-[280px] flex justify-between p-5">
          <Link href={"/fleshka"}>washingM</Link>
          <Image
            src={"/arrow.svg"}
            alt={"arrow"}
            width={24}
            height={24}
            priority
          />
        </div>
        {/* <div className="pt-[17px] pb-[17px] w-[280px] flex justify-between p-5">
          <Link href={"/aksesuarlar"}>Smartfon aksesuarlari</Link>
          <Image
            src={"/arrow.svg"}
            alt={"arrow"}
            width={24}
            height={24}
            priority
          />
        </div> */}
        <div className="pt-[17px] pb-[17px] w-[280px] flex justify-between p-5">
          <Link href={"/gadjet"}>Stearing</Link>
          <Image
            src={"/arrow.svg"}
            alt={"arrow"}
            width={24}
            height={24}
            priority
          />
        </div>
        {/* <div className="pt-[17px] pb-[17px] w-[280px] flex justify-between p-5">
          <Link href={"/uskunalar"}>Quvvatlovchi uskunalar</Link>
          <Image
            src={"/arrow.svg"}
            alt={"arrow"}
            width={24}
            height={24}
            priority
          />
        </div> */}
        <div className="pt-[17px] pb-[17px] w-[280px] flex justify-between p-5">
          <Link href={"/kabellar"}>Sports</Link>
          <Image
            src={"/arrow.svg"}
            alt={"arrow"}
            width={24}
            height={24}
            priority
          />
        </div>
      </div>

      {/* Banner ko'rsatish */}
      <div>
        <Carousel className="z-10">
          <CarouselContent>
            <CarouselItem>
              <img
                src="https://olcha.uz/image/original/sliders/ru/etALz7NufgJ8sFKv7ZZgJJPIbCk3ka6pnDQt5brev1etacWH3Vvfl6Xuxa8Q.png"
                alt="banner"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://olcha.uz/image/original/sliders/ru/c1lBPgoshZuCwRyVfkWKxh3J03EzknQdOqNW9Hx1JGAmPsNqydGPCoQnWD2l.png"
                alt="banner"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://olcha.uz/image/original/sliders/ru/JwFP8H3qk55szQrT7xiLJzB71g6gAChEtieJYv4aFEJ3udzLC1mAKRFFInww.png"
                alt="banner"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Mahsulotlar ro'yxatini ko'rsatish */}
        <div className="p-[26px] font-semibold text-[32px] flex gap-3">
          <Image
            src={"icon.svg"}
            alt={"icon"}
            width={24}
            height={24}
            priority
          />
          <h1>Yangi mahsulotlar</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-10 bg-slate-100 p-5 ">
          {slicedData.map((item) => (
            <div
              className="bg-white w-[264px] text-center h-[464px] gap-5 p-5 rounded-md"
              key={item.id}
            >
              <img src={item.img} alt="img" />
              <h1 className="mt-5">{item.title}</h1>
              <p className="mt-1">{item.rame}</p>
              <h2 className="mt-1">{item.color}</h2>
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
        <div>
          <div className="p-[26px] font-semibold text-[32px] flex gap-3">
            <Image
              src={"icon.svg"}
              alt={"icon"}
              width={24}
              height={24}
              priority
            />
            <h1>Ommabop mahsulotlar</h1>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-10 bg-slate-100 p-5 ">
            {slicedNewdata.map((item) => (
              <div
                className="bg-white w-[264px] text-center h-[464px] gap-5 p-5 rounded-md"
                key={item.id}
              >
                <img src={item.img} alt="img" />
                <h1 className="mt-5">{item.title}</h1>
                <p className="mt-1">{item.brand}</p>
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
    </div>
  );
}
