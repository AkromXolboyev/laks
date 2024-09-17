// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export const Carusel = () => {
//   return (
//     <div>
//       <h1>lorem</h1>
//       <div>
//         <Carousel>
//           <CarouselContent>
//             <CarouselItem>...</CarouselItem>
//             <CarouselItem>...</CarouselItem>
//             <CarouselItem>...</CarouselItem>
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </div>
//   );
// };





// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { GetCarusel } from "@/app/service/query/get-carusel";
// import { Button } from "@/components/ui/button"; // ShadCN-UI button
// import { ChevronLeft, ChevronRight } from "lucide-react"; // ShadCN icons

// // NEXT_PUBLIC_APP_URL muhit o'zgaruvchisi orqali URL olindi
// const url = process.env.NEXT_PUBLIC_APP_URL;

// interface ImageData {
//   id: number;
//   img: string;
//   alt: string;
// }

// export const Carousel = () => {
//   const [data, setImages] = useState<ImageData[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);


//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const res = await fetch(`${url}/banners`); 
//         const data: ImageData[] = await res.json();
//         setImages(data);
//       } catch (error) {
//         console.error("Error fetching images:", error);
//       }
//     };

//     fetchImages();
//   }, []);

 
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//   };

  
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
//   };

//   if (data.length === 0) {
//     return <div>Loading...</div>; 
//   }

//   return (
//     <div className="relative w-full max-w-[600px] mx-auto p-5">
//       {/* Rasmlar */}
//       <div className="relative h-[400px]">
//         {data.map((item, index) => (
//           <div
//             key={item.id}
//             className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             }`}
//           > 
//           <img src={item.img} alt="img" />
//             {/* <Image
//               src={item.img}
//               alt="img"
//              priority
//               style={{ objectFit: "cover" }}
//               className="rounded-md"
//               width={500}
//               height={500}
//             /> */}
//           </div>
//         ))}
//       </div>

     
//       <div className="absolute inset-0 flex items-center justify-between">
//         <Button
//           onClick={handlePrev}
//           variant="outline"
//           className="rounded-full bg-white/70 p-2"
//         >
//           <ChevronLeft size={24} />
//         </Button>
//         <Button
//           onClick={handleNext}
//           variant="outline"
//           className="rounded-full bg-white/70 p-2"
//         >
//           <ChevronRight size={24} />
//         </Button>
//       </div>
//     </div>
//   );
// };
