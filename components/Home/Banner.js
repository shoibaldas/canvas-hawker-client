import React from "react";
import Link from "next/link";
import Image from "next/image";
import banner from "../../public/assets/banner.jpg";
const Banner = () => {
  return (
    <div className="my-10 font-serif flex justify-center items-center gap-2">
      <Image
        src={banner}
        className="rounded"
        alt="Mountains with snow"
        width={700}
        height={700}
      />

      <div className="w-2/5 h-64 backdrop-blur-xl bg-white/30 rounded px-4 py-5">
        <h1 className="text-white text-5xl">
          "Art is a lie that makes us realize the truth."
        </h1>
        <span className="block mt-4 text-sm text-italic text-white">
          -Pablo Picasso
        </span>
        <div className="my-12">
          <Link href="" className="bg-[#C8A47E] px-10 py-3">
            {" "}
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
