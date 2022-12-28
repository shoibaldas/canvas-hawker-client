import React from "react";
import Link from "next/link";
import Image from "next/image";
import art1 from "../../public/assets/art1.jpg";
import art2 from "../../public/assets/art2.jpg";

const HomeProductItems = () => {
  return (
    <div className="container my-44 max-screen-lg mx-auto backdrop-blur-xl bg-white/30 rounded">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <Image
            src={art1}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            alt=""
            width={1000}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-serif text-3xl font-bold text-white">Beauty</h1>
            <p className="mb-5 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              dolore adipisci placeat.
            </p>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              Shop Now
            </button>
          </div>
        </div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <Image
            src={art2}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            alt=""
            width={1000}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-serif text-3xl font-bold text-white">Nature</h1>
            <p className="mb-5 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              dolore adipisci placeat.
            </p>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="" className="px-6 py-3 bg-neutral-900 text-white rounded my-8">
          See More
        </Link>
      </div>
    </div>
  );
};

export default HomeProductItems;
