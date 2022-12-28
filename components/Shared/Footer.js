import React from "react";
import Logo from "../../public/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="backdrop-blur-xl bg-white/30 fixed bottom-0 w-full p-6">
      <div className="flex justify-between">
      <div className="flex">
        <Image src={Logo} alt="" width={60} height={10} />
        <h1 className="italic text-3xl">
          {" "}
          <span className="text-sky-600">C</span>
          <span className="text-pink-500">a</span>
          <span className="text-green-500">n</span>
          <span className="text-yellow-500">v</span>
          <span className="text-purple-500">a</span>
          <span className="text-lime-400">s</span>
        </h1>
        <span className="block italic text-gray-100 text-md">hawker</span>
      </div>
      <div className="flex gap-10">
        <div className="text-center text-white underline">
            <p>Shop</p>
            <p>About</p>
            <p>Contact</p>
        </div>
        <div className="text-center text-white">
            <p className="underline">Find us here</p>
            <p>Facebook</p>
            <p>Instagram</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
