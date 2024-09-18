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
        {/* <Link href={"/smartfonlar"}>
          <div className="pt-[17px] pb-[17px] w-[280px] flex justify-between p-5 bg-slate-300 rounded-md mb-4 hover:bg-green-400">
            <h1>Smartfonlar</h1>
            <Image
              src={"/arrow.svg"}
              alt={"arrow"}
              width={24}
              height={24}
              priority
            />
          </div>
        </Link> */}
        <Link href={"/planshetlar"}>
          <div className="pt-[17px] pb-[17px] w-[280px] flex justify-between mt-4 p-5 bg-slate-300 rounded-md mb-4 hover:bg-green-400">
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

//
// import Link from 'next/link';
// import Image from 'next/image';
// import { getProducts } from './service/query/get-products';
// import { getSports } from './service/query/get-sports';
// import ProductCard from '@/pages/product-card'; // Client Component'ni import qilamiz

// export default async function Home() {
//   const data = await getProducts();
//   const newdata = await getSports();
//   const slicedData = data.slice(0, 8);
//   const slicedNewdata = newdata.slice(0, 8);

//   return (
//     <div className="mt-[100px] flex container">
//       <div className="bg-slate-50 w-[280px] h-screen">
//         {/* Category links */}
//       </div>

//       <div>
//         {/* Carousel */}
//         <div className="p-[26px] font-semibold text-[32px] flex gap-3">
//           <Image src={"icon.svg"} alt={"icon"} width={24} height={24} priority />
//           <h1>Yangi mahsulotlar</h1>
//         </div>

//         {/* Yangi mahsulotlar grid */}
//         <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-10 bg-slate-100 p-5">
//           {slicedData.map((item) => (
//             <ProductCard key={item.id} product={item} />
//           ))}
//         </div>

//         {/* Ommabop mahsulotlar grid */}
//         <div>
//           <div className="p-[26px] font-semibold text-[32px] flex gap-3">
//             <Image src={"icon.svg"} alt={"icon"} width={24} height={24} priority />
//             <h1>Ommabop mahsulotlar</h1>
//           </div>
//           <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-10 bg-slate-100 p-5">
//             {slicedNewdata.map((item) => (
//               <ProductCard key={item.id} product={item} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//

{
  /* <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-10 bg-slate-100 p-5 ">
            {slicedNewdata.map((item) => (
              <div
                className="bg-white w-[264px] text-center h-[464px] gap-5 p-5 rounded-md"
                key={item.id}
              >
                <Link href={`/product-item/${item.id}`}>
                  {" "}
                  <img src={item.img} alt="img" />
                </Link>

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
          </div> */
}

{
  /* <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-10 bg-slate-100 p-5 ">
          {slicedData.map((item) => (
            <div
              className="bg-white w-[264px] text-center h-[464px] gap-5 p-5 rounded-md"
              key={item.id}
            >
              <Link href={`/product-item/${item.id}`}>
                <img src={item.img} alt="img" />
              </Link>
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
        </div> */
}
