import React from "react";
import { GetCarusel } from "./service/query/get-carusel";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { BannerCard } from "@/components/banner-card";

export const Banners = async () => {
  const data = await GetCarusel(); // Get the carusel data

  return (
    <div className="w-[1350px]">
      <Carousel className="max-w-[1200px]">
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.id}>
              <BannerCard img={item.img} /> 
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
