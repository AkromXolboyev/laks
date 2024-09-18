
import React from 'react';
import { getComputers } from '../service/query/get-computers';
import ProductCard from '@/pages/product-card2';
import Link from 'next/link';
const Planshetlar = async () => {
  const data = await getComputers();

  return (
    <div className="mt-[100px]">
      <div className="flex gap-5 p-5 w-[1440px] container">
      
        <div className="flex gap-5 p-5 w-[1440px] container">
        <Link href={"/"} className="p-5 bg-slate-200 rounded-md">
          bosh sahifa
        </Link>
        <h1 className="bg-slate-200 p-5 rounded-md">washingM</h1>
        <p className="p-5 bg-slate-200 rounded-md">artel</p>
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

export default Planshetlar;
