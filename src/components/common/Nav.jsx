"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FcMenu } from "react-icons/fc";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
const styles = {
  maxWidth: "max-w-[1350px] mx-auto px-[125px]",
};

const Nav = ({ path }) => {
  const currentPath = useRouter().pathname;
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <nav
      className={`z-[30] border-b h-[84px] flex items-center relative bg-white ${
        menu ? "opacity-3" : ""
      }  bg-white font-source font-[600] px-[20px] md:px-[100px]`}
      style={{
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className={` md:py-3 text-black h-[80px] md:h-[60px] w-screen md:flex md:items-center text-[20px] justify-between`}
      >
        <div className="flex justify-between items-center h-full cursor-pointer mx-3">
          <Link
            className="text-[20px] hover:text-primary duration-500"
            href="/"
          >
            <Image
              src="/images/logo.png"
              width={140}
              height={90}
              className=""
              alt="m4ace logo"
            />
          </Link>
          <FcMenu
            color="#ffffff"
            size="40"
            className="text-white md:hidden"
            onClick={handleMenu}
          />
        </div>
        <div
          className={`${
            menu
              ? "top-[60px] opacity-100 pb-6 z-10 h-screen bg-black"
              : "hidden"
          }  md:flex  md:items-center md:static absolute md:bg-transparent bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 font-normal text-[20px] basis-80`}
        >
          <ul className="md:flex md:justify-between md:items-center md:gap-x-[35px] lg:gap-x-[60px]">
            <li className=" ">
              <Link
                className={`${
                  path === "/"
                    ? "text-[#050F1F] border-2 py-1 px-1 rounded"
                    : ""
                } font-[400] text-[18px] duration-500 w-max block`}
                href="/"
              >
                Our Programs
              </Link>
            </li>
            <li className="">
              <Link
                className={`${
                  path === "/"
                    ? "text-[#050F1F] border-2 py-1 border-[#006F36] px-1 rounded"
                    : ""
                } font-[400] text-[18px]  duration-500 font-source`}
                href="/"
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                className={`${
                  path === "/"
                    ? "text-[#050F1F] border-2 py-1 border-[#006F36] px-1 rounded"
                    : ""
                } font-[400] text-[18px]  duration-500 font-source`}
                href="/"
              >
                FAQ
              </Link>
            </li>
          </ul>
          <div className="md:ml-[60px] lg:ml-[80px] flex flex-col md:flex-row md:justify-center md:items-center md:w-full  md:gap-x-[48px] gap-y-[20px] md:gap-y-0">
            <Link
              href="/signup"
              className=" text-white bg-primary w-[150px] text-center font-source rounded-lg  hover:bg-primaryYellow hover:animate-pulse ease-out duration-300 py-[5px] px-[10px]"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
