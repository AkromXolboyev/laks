

"use client";
import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface CatalogProps {
  params: { product_id: number };
}

const url = process.env.NEXT_PUBLIC_APP_URL; 

interface CatalogType {
  id: number;
  img: string;
  title: string;
  brand: string;
  price: string;
  color: string;
  ram: string;
  rame: string;
  geForce?: string | null;
  core?: string;
  display?: string;
  memory?: string | null;
  weight?: string;
  text: string;
  name: string;
  quantity?: number;
}

interface Product {
  id: number;
  title: string;
  brand: string;
  price: string;
  img: string;
  quantity?: number;
}

const CatalogDetail: NextPage<CatalogProps> = ({ params }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [datalar, setDatalar] = useState<CatalogType[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/all?id=${params.product_id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setDatalar(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.product_id]);

  const addToCart = (item: Product) => {
    const existingProduct = cart.find((p) => p.id === item.id);
    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((p) =>
        p.id === item.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${item.title} savatchaga qo'shildi!`);
  };

  return (
    <div className="flex flex-wrap gap-7 mt-[70px] container">
      <div className="flex gap-5 p-5 w-[1440px] container">
        <Link href={"/"} className="p-5 bg-slate-200 rounded-md">
          bosh sahifa
        </Link>
        <h1 className="bg-slate-200 p-5 rounded-md">Smartfonlar</h1>
        <p className="p-5 bg-slate-200 rounded-md">apple</p>
      </div>
      {datalar.map((item) => (
        <div key={item.id} className="flex items-center mb-10">
          <div className="w-[600px]">
            <img className="" src={item.img} alt={`Product ${item.id}`} />
          </div>
          <div className="w-[700px] bg-slate-100 p-5">
            <div className="w-[614px] text-[36px] font-semibold">
              {item.title}
            </div>
            <div className="flex justify-between mr-16 mt-3">
              <p className="size-10">⭐️⭐️⭐️⭐️</p>
              <strong className="opacity: 0.5 text-[#576755]">(34)</strong>
              <p className="opacity: 0.5 text-[#576755] line-through">
                26 689 520 so’m
              </p>
              <button className="p-2 bg-red-500 rounded-lg">-20%</button>
            </div>
            <div className="text-[42px] font-semibold text-primary mt-2">
              {item.price}
            </div>
            <button
              onClick={() => addToCart(item)}
              className="w-full bg-primary p-3 rounded-md text-white hover:bg-primary-dark transition  bottom-[-50px]"
            >
              Savatchaga
            </button>
            <div className="text-2xl mt-3 text-green-400">{item.brand}</div>
            <div className="">{item.name}</div>
            <p className="text-[20px]"> {item.color}</p>
            <h1 className="text-red-500 text-[20px]">{item.rame}</h1>
            <div className="flex items-center gap-4 mt-8 w-[614px] h-[64px] bg-green-100 p-4 rounded-md">
              <h1 className="font-semibold">
                O’zbekiston bo’ylab yetkazib berish:
              </h1>
              <p>14 ish kunida</p>
            </div>
            <div className="text-[20px] mt-1">{item.core}</div>
            <h3 className="text-[20px] mt-1">{item.display}</h3>
            <h4 className="text-[20px] mt-1">{item.memory}</h4>
            <div className="text-[20px] mt-1">{item.quantity}</div>
            <div className="text-[20px] mt-1">{item.geForce}</div>
            <div className="text-[20px] mt-1">{item.weight}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogDetail;
