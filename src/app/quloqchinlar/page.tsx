// import React from "react";
// import Image from "next/image";
// import { getPhones } from "../service/query/get-phones";
// import Link from "next/link";
// const Quloqchinlar = async () => {
//   const data = await getPhones();
//   return (
//     <div className="mt-[100px]">
//       <div className="flex gap-5 p-5 w-[1440px] container">
//         <Link href={"/"} className="p-5 bg-slate-200 rounded-md">
//           bosh sahifa
//         </Link>
//         <h1 className="bg-slate-200 p-5 rounded-md">Computers</h1>
//         <p className="p-5 bg-slate-200 rounded-md">apple</p>
//       </div>
//       <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-10 bg-slate-100 p-5 ">
//         {data.map((item) => (
//           <div
//             className="bg-white w-[264px] text-center h-[464px] gap-5 p-5 rounded-md"
//             key={item.id}
//           >
//             <Link href={`/product-item/${item.id}`}>
//                 <img src={item.img} alt="img" />
//               </Link>
//             <h1 className="mt-5">{item.title}</h1>
//             <h3 className="mt-1">{item.brand}</h3>
//             <Image
//               src={"stars.svg"}
//               alt={"icon"}
//               width={100}
//               height={24}
//               priority
//               className="text-center m-auto"
//             />
//             <strong className="block">{item.price}</strong>
//             <button className="pl-[74px] pr-[74px] bg-primary p-3 rounded-md">
//               Savatchaga
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Quloqchinlar;


// app/fleshka/page.tsx
import React from 'react';
import { getPhones } from '../service/query/get-phones';
import ProductCard from '@/pages/product-card2';
import Link from 'next/link';
const Quloqchinlar = async () => {
  const data = await getPhones();

  return (
    <div className="mt-[100px] container">
      <div className="flex gap-5 p-5 w-[1440px] container">
        {/* Navigatsiya linklari */}
        <div className="flex gap-5 p-5 w-[1440px] container">
        <Link href={"/"} className="p-5 bg-slate-200 rounded-md">
          bosh sahifa
        </Link>
        <h1 className="bg-slate-200 p-5 rounded-md">Phones</h1>
        <p className="p-5 bg-slate-200 rounded-md">apple</p>
      </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-10 bg-slate-100 p-5">
        {data.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Quloqchinlar;
