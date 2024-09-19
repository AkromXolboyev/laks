// import { productTypes } from "@/service/types/types";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export const SearchCard = ({ img, title, id }: productTypes) => {
//   return (
//     <>
//       <Link href={`/product-item/${id}`}>
//         <div className="w-full bg-primary-foreground flex justify-around items-center cursor-pointer p-4 h-fit">
//           <img className="w-20 h-20" src={img} alt="img" />
//           <h1 className=" text-[14px] font-normal  text-left  w-60">
//             {title}
//           </h1>
//         </div>
//       </Link>
//     </>
//   );
// };
import { productTypes } from "@/service/types/types";
import Link from "next/link";
import React from "react";

interface SearchCardProps extends productTypes {
  clearInput: () => void;
}

export const SearchCard = ({ img, title, id, clearInput }: SearchCardProps) => {
  const handleClick = () => {
    clearInput();
  };

  return (
    <Link href={`/product-item/${id}`}>
      <div
        onClick={handleClick}
        className="w-full bg-primary-foreground flex justify-around items-center cursor-pointer p-4 h-fit"
      >
        <img className="w-20 h-20" src={img} alt="img" />
        <h1 className="text-[14px] font-normal text-left w-60">{title}</h1>
      </div>
    </Link>
  );
};

