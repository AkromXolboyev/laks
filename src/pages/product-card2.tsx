'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  brand: string;
  price: string;
  img: string;
  quantity?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(savedCart);
    }
    setLoading(false);
  }, []);

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
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${item.title} savatchaga qo'shildi!`);
  };

  if (loading) {
    return <div>Loading...</div>; // loading holati
  }

  return (
    <div className="bg-white w-[264px] text-center h-[464px] gap-5 p-5 rounded-md">
      <Link href={`/product-item/${product.id}`}>
        <img src={product.img} alt={product.title} />
      </Link>
      <h1 className="mt-5">{product.title}</h1>
      <h3 className="mt-1">{product.brand}</h3>
      <Image
        src={"stars.svg"}
        alt={"icon"}
        width={100}
        height={24}
        priority
        className="text-center m-auto"
      />
      <strong className="block">{product.price}</strong>
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-primary p-3 rounded-md text-white hover:bg-primary-dark transition bottom-[-50px]"
      >
        Savatchaga
      </button>
    </div>
  );
};

export default ProductCard;
