import Link from "next/link";
import Image from "next/image";
import { getProducts } from "./service/query/get-products";
import ProductCard from "@/pages/product-card2";
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
    <div className="mt-[100px] flex container gap-8">
      <div className="bg-slate-50 w-[280px] h-screen ">
       
        <Link href={"/planshetlar"}>
          <div className="pt-[17px] pb-[17px] w-[280px] flex justify-between mt-8 p-5 bg-slate-300 rounded-md mb-4 hover:bg-green-400">
            <h1> Computers</h1>
            <Image
              src={"/arrow.svg"}
              alt={"arrow"}
              width={24}
              height={24}
              priority
            />
          </div>
        </Link>
        <Link href={"/quloqchinlar"}>
          <div className="pt-[17px] pb-[17px] w-[280px] flex justify-between p-5 bg-slate-300 rounded-md mb-4 hover:bg-green-400">
            <h1> Phones</h1>
            <Image
              src={"/arrow.svg"}
              alt={"arrow"}
              width={24}
              height={24}
              priority
            />
          </div>
        </Link>
        <Link href={"/fleshka"}>
          <div className="pt-[17px] pb-[17px] w-[280px] flex justify-between p-5 bg-slate-300 rounded-md mb-4 hover:bg-green-400">
            <h1>washingM</h1>
            <Image
              src={"/arrow.svg"}
              alt={"arrow"}
              width={24}
              height={24}
              priority
            />
          </div>
        </Link>
        <Link href={"/gadjet"}>
          <div className="pt-[17px] pb-[17px] w-[280px] flex justify-between p-5 bg-slate-300 rounded-md mb-4 hover:bg-green-400">
            <h1>Stearing</h1>
            <Image
              src={"/arrow.svg"}
              alt={"arrow"}
              width={24}
              height={24}
              priority
            />
          </div>
        </Link>
        <Link href={"/kabellar"}>
          <div className="pt-[17px] pb-[17px] w-[280px] flex justify-between p-5 bg-slate-300 rounded-md mb-4 hover:bg-green-400">
            <h1>Sports</h1>
            <Image
              src={"/arrow.svg"}
              alt={"arrow"}
              width={24}
              height={24}
              priority
            />
          </div>
        </Link>
      </div>

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

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-10 bg-slate-100 p-5">
          {slicedData.map((item) => (
            <ProductCard key={item.id} product={item} />
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

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-10 bg-slate-100 p-5 items-center justify-center">
            {slicedNewdata.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
