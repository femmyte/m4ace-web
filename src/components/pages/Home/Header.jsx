import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-screen h-[649px] bg-[#FBE6CC99] flex justify-between px-[4rem] py-[80px]">
      <div className="flex-1 mt-[20px]">
        <button className="w-[358px] h-[50px] rounded-[8px] border border-[#F9D5AACC] py-[13px] px-[10px] bg-[#F9D5AACC] ml-[160px] mb-[-80px] shadow">
          You can support M4ace
        </button>
        <div className="relative">
          <img
            src="/images/elevate.svg"
            alt="elevate"
            className="absolute top-[-30px]"
          />
          <div className="ml-[100px] mt-[20px]">
            <h2 className="font-[500] text-[60px] leading-[84px] text-[#222057] mt-[0px]">
              Elevate Your Skills, Transform Your Future
            </h2>
            <p className="font-[500] leading-7 text-[#1E1E1E] text-[18px] mt-[20px] w-[443px]">
              Embark on Your Tech Journey: Register for our curated FREE
              training courses and get the right Mentorship, Tools and Content.
            </p>
            <div className="flex mt-[30px] items-center">
              <Link
                href="/signup"
                className=" text-white bg-primary  text-center font-source rounded-lg  hover:animate-pulse ease-out duration-300 h-[50px] w-[150px] flex justify-center items-center"
              >
                Apply Now
              </Link>
              <img src="/images/arrow.svg" alt="arrow" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-2 ">
        <Image
          src={"/images/hero-man.svg"}
          alt="hero man"
          height={445}
          width={342}
          className=""
        ></Image>
        <Image
          src={"/images/hero-girl.svg"}
          alt="hero man"
          height={423}
          width={348}
          className="mt-[150px] ml-[-40px]"
        ></Image>
      </div>
    </div>
  );
};

export default Header;
