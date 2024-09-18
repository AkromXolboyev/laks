"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: string;
  img: string;
  quantity: number;
}

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cart.length === 0) {
    return (
      <h1 className="text-center text-3xl font-bold mt-20">Basket empty choose something</h1>
    );
  }

  return (
    <div className="container mx-auto p-10 w-[1400px]">
         <Link href={"/"} className="p-5 bg-slate-200 rounded-md">
          bosh sahifaga o'tish
        </Link>
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">
        your choosen products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-6 transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-[150px] h-[150px] object-cover rounded-md"
            />
            <div>
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">Brand: {item.brand}</p>
              <p className="text-gray-600">Color: {item.color}</p>
              <p className="text-gray-600">RAM: {item.rame}</p>
              <strong className="text-xl text-primary">{item.price}</strong>
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded-md transition-all"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded-md transition-all"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white p-5 px-4 py-2 rounded-md transition-all"
              >
                O'chirish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
