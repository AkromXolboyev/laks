// 'use client'; // Bu yerda client component ekanligini belgilaymiz

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';

// interface Product {
//   id: number;
//   title: string;
//   rame: string;
//   color: string;
//   brand: string;
//   price: string;
//   img: string;
//   name:string;
 
// }

// export interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const [cart, setCart] = useState<Product[]>(() => {
//     if (typeof window !== 'undefined') {
//       return JSON.parse(localStorage.getItem('cart') || '[]');
//     }
//     return [];
//   });

//   const addToCart = (item: Product) => {
//     const updatedCart = [...cart, item];
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     alert(`${item.title} savatchaga qo'shildi!`);
//   };

//   return (
//     <div className="bg-white w-[264px] text-center h-[464px] gap-5 p-5 rounded-md" key={product.id}>
//       <Link href={`/product-item/${product.id}`}>
//         <img src={product.img} alt={product.title} />
//       </Link>
//       <h1 className="mt-5">{product.title}</h1>
//       <p className="mt-1">{product.rame}</p>
//       <h2 className="mt-1">{product.color}</h2>
//       <h3 className="mt-1">{product.brand}</h3>
//       <Image src={"stars.svg"} alt={"icon"} width={100} height={24} priority className="text-center m-auto" />
//       <strong className="block">{product.price}</strong>
//       <button onClick={() => addToCart(product)} className="pl-[74px] pr-[74px] bg-primary p-3 rounded-md">
//         Savatchaga
//       </button>
     
//     </div>
//   );
// };

// export default ProductCard;


'use client'; // Bu yerda client component ekanligini belgilaymiz

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: string;
  img: string;
  name: string;
}

export interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // LocalStorage'dan cartni olish uchun useEffect ishlatamiz
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []); // Faqat component birinchi marta yuklanganda ishga tushadi

  const addToCart = (item: Product) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${item.title} savatchaga qo'shildi!`);
  };

  return (
    <div className="bg-white w-[264px] text-center h-[464px] gap-5 p-5 rounded-md" key={product.id}>
      <Link href={`/product-item/${product.id}`}>
        <img src={product.img} alt={product.title} />
      </Link>
      <h1 className="mt-5">{product.title}</h1>
      <p className="mt-1">{product.rame}</p>
      <h2 className="mt-1">{product.color}</h2>
      <h3 className="mt-1">{product.brand}</h3>
      <Image src="/stars.svg" alt="icon" width={100} height={24} priority className="text-center m-auto" />
      <strong className="block">{product.price}</strong>
      <button onClick={() => addToCart(product)} className="pl-[74px] pr-[74px] bg-primary p-3 rounded-md">
        Savatchaga
      </button>
    </div>
  );
};

export default ProductCard;
