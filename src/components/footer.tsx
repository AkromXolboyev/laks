import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-slate-100 p-5">
      <div className="container mx-auto grid grid-cols-3 gap-8">
      
        <div>
          <div className="mb-4">
            <Image
              src="/logo.svg"
              alt="logo"
              className="dark:invert"
              width={150}
              height={30}
              priority
            />
          </div>
          <p>Mobilux © 2022. Barcha huquqlar kafolatlangan.</p>
          <div className="flex space-x-3 mt-4">
            <Image
              src="/googleplay.svg"
              alt="Google Play"
              width={120}
              height={40}
            />
            <Image
              src="/appstore.svg"
              alt="App Store"
              width={120}
              height={40}
            />
          </div>
        </div>

   
        <div>
          <h2 className="text-lg font-semibold mb-3">Foydali havolalar</h2>
          <ul className="space-y-2">
            <li>Bosh sahifa</li>
            <li>Yordam kerakmi?</li>
            <li>Foydalanish shartlari</li>
            <li>Maxfiylik siyosati</li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-lg font-semibold mb-3">Biz haqimizda</h2>
          <p>Manzil: #224, A-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul, 03113, Crescent Trade ltd.</p>
          <p>Xonona nomi: Mobilux trade</p>
          <p>Xonona rahbari: HASANBOY TURSUNOV</p>
          <p>Registratsiya raqami: 433-02-00377</p>
          <p>Telefon raqami: 93 000 66-44 / 97 000 66-44</p>
        </div>
      </div>
    </div>
  );
};
