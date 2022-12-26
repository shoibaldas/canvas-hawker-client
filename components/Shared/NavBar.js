import Link from "next/link";
import { useRouter } from "next/router";
import react, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import BG from '../../public/layer.jpg';

const NavBar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleLogout = () => {
    router("/");
  };

  return (
    <>
    <div style={{
        zIndex: -1,
        position: "fixed",
        width: "100vw",
        height: "100vh"
      }}>
  <Image 
            src={BG}
          alt="Mountains with snow"
          fill
          cover
        />
  </div>
    
    <div className="w-full h-[60px] flex justify-between items-center px-4 bg-none text-gray-300">
      <div className="flex">
        <Image src={Logo} width={50} />
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

      {/* Nav Items */}
      <div>
        <ul className="text-white hidden md:flex">
          <li>
            <Link
              href="/home"
              className="mx-3 hover:border-b-2 border-green-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/home"
              className="mx-3 hover:border-b-2 border-green-600"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/home"
              className="mx-3 hover:border-b-2 border-green-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="mx-3 hover:border-b-2 border-green-600"
            >
              Login
            </Link>
          </li>
          {/* {
                    user && user ?
                        <>
                            <li>
                                <Link className='mx-3'>
                                    <span className='text-green-600'>Hello,</span> {user?.username}
                                </Link>
                            </li>
                            <li>
                                <Link onClick={handleLogout} className='mx-3 hover:border-b-2 border-green-600'>
                                    Sign Out
                                </Link>
                            </li>
                        </>
                        :
                        <li>
                            <Link href='' className='mx-3 hover:border-b-2 border-green-600'>
                                Sign In
                            </Link>
                        </li>
                } */}
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Items */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute md:hidden top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <div className="flex">
          <Image src={Logo} width={50} />
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
        <li className="py-4 text-2xl">
          <Link onClick={handleClick} href="">
            Feed
          </Link>
        </li>
        <li className="py-4 text-2xl">
          <Link onClick={handleClick} href="">
            Sign In
          </Link>
        </li>
      </ul>
    </div>
    </>
  );
};

export default NavBar;
