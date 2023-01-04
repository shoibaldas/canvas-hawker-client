import Link from "next/link";
import react, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import BG from "../../public/layer.jpg";
import Avatar from "react-avatar";
import { AiOutlineLogout } from "react-icons/ai";
import { useUser } from "../../context/user";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { session, logOut, setSignIn, signIn } = useUser();
  console.log(session);

  const handleClick = () => setNav(!nav);

  const handleLogout = () => {
    logOut();
  };

  return (
    <>
      <div
        className="h-screen"
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
        }}
      >
        <Image src={BG} alt="" cover="true" />
      </div>

      <div className="w-full h-[60px] flex justify-between items-center px-4 bg-none text-gray-300">
        <div className="flex">
          <Image src={Logo} alt="" width={50} />
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
              <Link href="/" className="mx-3 hover:border-b-2 border-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/home"
                className="mx-3 hover:border-b-2 border-green-600"
              >
                Shop
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
            { session && session?.email? (
              <>
                <li className="dropdown inline-block relative">
                    <button className="inline-flex items-center">
                    <span className="text-green-600 mx-2">Hello,</span>
                    <Avatar
                      size="25"
                      round={true}
                      name={session?.firstName + " " + session?.lastName}
                      maxInitials={2}
                      className=""
                    />
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                      <Link href=""
                        className="rounded bg-gray-200 hover:bg-gray-400 py-2 px-4 block flex items-center whitespace-no-wrap"
                        onClick={handleLogout}
                      >
                        <AiOutlineLogout className="mx-1 text-red-400 font-semibold"></AiOutlineLogout>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <li>
                <Link
                  href="/login"
                  className="mx-3 hover:border-b-2 border-green-600"
                >
                  Sign In
                </Link>
              </li>
            )}
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
            <Image src={Logo} alt="" width={50} />
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
